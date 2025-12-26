// pages/customize/index.js
Page({
  data: {
    activeTab: 'customize',
    content: '',
    isRecording: false
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
    this.setData({ isRecording });
    
    if (isRecording) {
      wx.showToast({
        title: '开始录音...',
        icon: 'none'
      });
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
    wx.showToast({
      title: '正在生成故事...',
      icon: 'loading'
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
