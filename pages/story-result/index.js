// pages/story-result/index.js

Page({
  data: {
    storyContent: '这是一个关于爱与勇气的故事...',
    microphonePressed: false,
    images: [
      { id: 1, url: '/images/book-covers/1.jpg', alt: '绘本图片1' },
      { id: 2, url: '/images/book-covers/2.jpg', alt: '绘本图片2' },
      { id: 3, url: '/images/book-covers/3.png', alt: '绘本图片3' },
      { id: 4, url: '/images/book-covers/4.jpg', alt: '绘本图片4' }
    ]
  },

  onLoad: function(options) {
    // 可以从options中获取传递过来的数据
    if (options && options.storyContent) {
      this.setData({
        storyContent: options.storyContent
      });
    }
    
    // 获取传递过来的麦克风按下标志
    if (options && options.microphonePressed) {
      this.setData({
        microphonePressed: options.microphonePressed === 'true'
      });
    }
    
    // 确保图片数组正确初始化
    if (!this.data.images || this.data.images.length === 0) {
      this.setData({
        images: [
          { id: 1, url: 'https://img2.baidu.com/it/u=2064135069,2383160837&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', alt: '绘本图片1' },
          { id: 2, url: 'https://img2.baidu.com/it/u=2064135069,2383160837&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', alt: '绘本图片2' },
          { id: 3, url: this.data.microphonePressed ? '' : 'https://img2.baidu.com/it/u=2064135069,2383160837&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', alt: '绘本图片3' },
          { id: 4, url: 'https://img2.baidu.com/it/u=2064135069,2383160837&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', alt: '绘本图片4' }
        ]
      });
    }
  },

  onShow: function() {
    console.log('绘本生成结果页面加载完成');
  },

  // 返回定制页面
  backToCustomize: function() {
    console.log('返回定制按钮被点击');
    // 使用switchTab跳转到tabbar页面
    wx.switchTab({
      url: '/pages/customize/index',
      success: function() {
        console.log('跳转成功');
      },
      fail: function(error) {
        console.log('跳转失败:', error);
      }
    });
  },

  // 重新生成绘本
  regenerateStory: function() {
    console.log('重新生成按钮被点击');
    // 使用switchTab跳转到tabbar页面
    wx.switchTab({
      url: '/pages/customize/index',
      success: function() {
        console.log('跳转成功');
      },
      fail: function(error) {
        console.log('跳转失败:', error);
      }
    });
  }
});