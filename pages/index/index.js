// index.js
Page({
  data: {
    activeTab: 'index'
  },

  onLoad: function() {
    // 页面加载时的初始化逻辑
    console.log('页面加载完成')
  },

  onShow: function() {
    // 页面显示时的逻辑
    this.updateActiveTab();
  },

  updateActiveTab: function() {
    const pages = getCurrentPages();
    const currentPage = pages[pages.length - 1];
    const route = currentPage.route;
    
    let activeTab = 'index';
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
  // 底部导航切换
  switchTab: function(e) {
    const url = e.currentTarget.dataset.url;
    wx.switchTab({
      url: url
    });
  },

  // 绘本点击事件
  onBookClick: function(e) {
    const id = e.currentTarget.dataset.id;
    wx.showToast({
      title: '该功能暂未开放',
      icon: 'none',
      duration: 2000
    });
  }
})