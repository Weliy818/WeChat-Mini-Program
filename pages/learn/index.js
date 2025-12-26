// pages/learn/index.js
Page({
  data: {
    activeTab: 'learn',
    learningPaths: [
      {
        id: 1,
        title: "童话启蒙之旅",
        description: "适合3-6岁儿童的经典童话故事",
        progress: 65,
        books: 12,
        completed: 8,
        icon: "🌟",
        colorClass: "path-yellow"
      },
      {
        id: 2,
        title: "科学探索计划",
        description: "趣味科普，激发好奇心",
        progress: 40,
        books: 10,
        completed: 4,
        icon: "🔬",
        colorClass: "path-blue"
      },
      {
        id: 3,
        title: "冒险故事集",
        description: "勇气与智慧的成长之旅",
        progress: 80,
        books: 15,
        completed: 12,
        icon: "⛵",
        colorClass: "path-pink"
      }
    ]
  },

  onLoad: function() {
    console.log('学习页面加载完成');
  },

  onShow: function() {
    this.updateActiveTab();
  },

  updateActiveTab: function() {
    const pages = getCurrentPages();
    const currentPage = pages[pages.length - 1];
    const route = currentPage.route;
    
    let activeTab = 'learn';
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

  onPathClick: function(e) {
    const id = e.currentTarget.dataset.id;
    wx.showToast({
      title: '进入学习路径 ' + id,
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
