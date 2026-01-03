// pages/profile/index.js
Page({
  data: {
    activeTab: 'profile',
    isLoggedIn: false,
    userInfo: {
      name: '',
      avatar: '',
      title: ''
    },
    stats: [
      { label: '阅读', value: 0, icon: 'book', color: 'stat-blue' },
      { label: '收藏', value: 0, icon: 'heart', color: 'stat-pink' },
      { label: '成就', value: 0, icon: 'medal', color: 'stat-purple' }
    ],
    menuItems: [
      { label: '我的收藏', url: '/pages/favorites/index', icon: 'heart', color: 'menu-pink' },
      { label: '我的创作', url: '/pages/creation/index', icon: 'book', color: 'menu-blue' },
      { label: '成就徽章', url: '/pages/achievements/index', icon: 'award', color: 'menu-purple' },
      { label: '设置', url: '/pages/settings/index', icon: 'settings', color: 'menu-orange' }
    ]
  },

  onLoad: function() {
    // 检查是否已登录
    const userInfo = wx.getStorageSync('userInfo');
    if (userInfo) {
      this.setData({
        isLoggedIn: true,
        userInfo: userInfo
      });
    }
    console.log('个人页面加载完成');
  },

  onShow: function() {
    this.updateActiveTab();
  },

  updateActiveTab: function() {
    const pages = getCurrentPages();
    const currentPage = pages[pages.length - 1];
    const route = currentPage.route;
    
    let activeTab = 'profile';
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

  handleLogin: function() {
    const userInfo = { 
      name: '小明', 
      avatar: 'https://thirdwx.qlogo.cn/mmopen/vi_32/POgEwh4mIHO4nibH0KlMECNjjGxQUq24ZEaGT4poC6icRiccVGKSyXwibcPq4BWmiaIGuG1icwxaQX6grC9VemZoJ8rg/132', 
      title: '小小故事家' 
    };
    wx.setStorageSync('userInfo', userInfo);
    this.setData({ 
      isLoggedIn: true, 
      userInfo: userInfo 
    });
    wx.showToast({
      title: '登录成功',
      icon: 'success'
    });
  },

  handleLogout: function() {
    wx.removeStorageSync('userInfo');
    this.setData({
      isLoggedIn: false,
      userInfo: {
        name: '',
        avatar: '',
        title: ''
      }
    });
    wx.showToast({
      title: '已退出登录',
      icon: 'none'
    });
  },

  onMenuItemClick: function(e) {
    const url = e.currentTarget.dataset.url;
    if (!this.data.isLoggedIn) {
      wx.showToast({
        title: '请先登录',
        icon: 'none'
      });
      return;
    }
    
    wx.showToast({
      title: '功能开发中...',
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
