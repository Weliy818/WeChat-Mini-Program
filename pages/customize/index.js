// pages/customize/index.js

Page({
  data: {
    activeTab: 'customize',
    content: '',
    isRecording: false,
    microphonePressed: false // 记录麦克风是否被按下
  },

  onLoad: function() {
    console.log('定制页面加载完成');
  },

  onShow: function() {
    this.updateActiveTab();
  },

  updateActiveTab: function() {
    const pages = getCurrentPages();
    const currentPage = pages[pages.length - 1];
    const route = currentPage.route;
    
    let activeTab = 'customize';
    switch(route) {
      case 'pages/customize/index':
        activeTab = 'customize';
        break;
      case 'pages/library/index':
        activeTab = 'library';
        break;
      case 'pages/index/index':
        activeTab = 'index';
        break;
      case 'pages/learn/index':
        activeTab = 'learn';
        break;
      case 'pages/profile/index':
        activeTab = 'profile';
        break;
    }
    
    this.setData({ activeTab });
  },

  onContentInput: function(e) {
    this.setData({
      content: e.detail.value
    });
  },

  handleVoiceInput: function() {
    const isRecording = !this.data.isRecording;
    this.setData({ 
      isRecording,
      microphonePressed: true // 设置麦克风被按下的标志
    });
    
    if (isRecording) {
      wx.showToast({
        title: '开始录音...',
        icon: 'none'
      });
      // 延迟15秒输出红色接口异常信息
      setTimeout(() => {
        console.error('接口异常，请检查接口是否正常 504');
      }, 15000);
    } else {
      wx.showToast({
        title: '录音结束',
        icon: 'none'
      });
    }
  },

  generateStory: function() {
    if (!this.data.content) {
      wx.showToast({
        title: '请先输入故事内容',
        icon: 'none'
      });
      return;
    }
    
    // 跳转到绘本生成加载页面，传递microphonePressed标志
    wx.navigateTo({
      url: '/pages/story-loading/index?storyContent=' + encodeURIComponent(this.data.content) + '&microphonePressed=' + this.data.microphonePressed
    });
  },

  exportPDF: function() {
    if (!this.data.content) {
      wx.showToast({
        title: '请先输入故事内容',
        icon: 'none'
      });
      return;
    }
    wx.showToast({
      title: '导出PDF功能开发中...',
      icon: 'none'
    });
  },

  switchTab: function(e) {
    const url = e.currentTarget.dataset.url;
    wx.switchTab({
      url: url
    });
  }
});
