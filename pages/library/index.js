// pages/library/index.js
Page({
  data: {
    activeTab: 'library',
    activeCategory: 1,
    categories: [
      { id: 1, name: "全部", count: 128 },
      { id: 2, name: "童话", count: 45 },
      { id: 3, name: "科普", count: 32 },
      { id: 4, name: "冒险", count: 28 },
      { id: 5, name: "友情", count: 23 }
    ],
    books: [
      {
        id: 1,
        title: "小王子",
        author: "安东尼·德·圣-埃克苏佩里",
        cover: "https://img2.baidu.com/it/u=2064135069,2383160837&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
        rating: [1, 2, 3, 4, 5],
        readers: "12.5k",
        tag: "热门",
        tagClass: "tag-hot"
      },
      {
        id: 2,
        title: "绿野仙踪",
        author: "莱曼·弗兰克·鲍姆",
        cover: "https://img2.baidu.com/it/u=2064135069,2383160837&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
        rating: [1, 2, 3, 4, 5],
        readers: "8.3k",
        tag: "经典",
        tagClass: "tag-classic"
      },
      {
        id: 3,
        title: "爱丽丝梦游仙境",
        author: "刘易斯·卡罗尔",
        cover: "https://img2.baidu.com/it/u=2064135069,2383160837&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
        rating: [1, 2, 3, 4],
        readers: "10.1k",
        tag: "奇幻",
        tagClass: "tag-fantasy"
      },
      {
        id: 4,
        title: "彼得潘",
        author: "J·M·巴里",
        cover: "https://img2.baidu.com/it/u=2064135069,2383160837&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
        rating: [1, 2, 3, 4, 5],
        readers: "7.2k",
        tag: "冒险",
        tagClass: "tag-adventure"
      }
    ]
  },

  onLoad: function() {
    console.log('书城页面加载完成');
  },

  onShow: function() {
    this.updateActiveTab();
  },

  updateActiveTab: function() {
    const pages = getCurrentPages();
    const currentPage = pages[pages.length - 1];
    const route = currentPage.route;
    
    let activeTab = 'library';
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

  onCategoryClick: function(e) {
    const id = e.currentTarget.dataset.id;
    this.setData({ activeCategory: id });
  },

  navigateToDetail: function(e) {
    const id = e.currentTarget.dataset.id;
    wx.showToast({
      title: '该功能暂未开放',
      icon: 'none',
      duration: 2000
    });
  },

  switchTab: function(e) {
    const url = e.currentTarget.dataset.url;
    wx.switchTab({
      url: url
    });
  }
});
