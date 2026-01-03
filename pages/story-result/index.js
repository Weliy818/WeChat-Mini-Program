// pages/story-result/index.js

Page({
  data: {
    storyContent: '这是一个关于爱与勇气的故事...',
    microphonePressed: false,
    images: [
      { id: 1, url: 'https://wy-1383356824.cos.ap-shanghai.myqcloud.com/%E5%85%94%E5%AD%90%E7%A7%AF%E6%9C%A8.jpg', alt: '绘本图片1' },
      { id: 2, url: 'https://wy-1383356824.cos.ap-shanghai.myqcloud.com/%E5%85%94%E5%AD%90%E5%BC%80%E9%97%A8.jpg', alt: '绘本图片2' },
      { id: 3, url: 'https://wy-1383356824.cos.ap-shanghai.myqcloud.com/%E5%85%94%E5%AD%90%E6%9D%BE%E9%BC%A0.png', alt: '绘本图片3' },
      { id: 4, url: 'https://wy-1383356824.cos.ap-shanghai.myqcloud.com/%E5%85%94%E5%AD%90%E6%9D%BE%E9%BC%A0%E8%A7%82%E6%B5%B7.jpg', alt: '绘本图片4' }
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
    
    // 根据麦克风是否按下控制图片显示
    const images = [
      { id: 1, url: 'https://wy-1383356824.cos.ap-shanghai.myqcloud.com/%E5%85%94%E5%AD%90%E7%A7%AF%E6%9C%A8.jpg', alt: '绘本图片1' },
      { id: 2, url: 'https://wy-1383356824.cos.ap-shanghai.myqcloud.com/%E5%85%94%E5%AD%90%E5%BC%80%E9%97%A8.jpg', alt: '绘本图片2' },
      { id: 3, url: 'https://wy-1383356824.cos.ap-shanghai.myqcloud.com/%E5%85%94%E5%AD%90%E6%9D%BE%E9%BC%A0.png', alt: '绘本图片3' },
      { id: 4, url: this.data.microphonePressed ? '' : 'https://wy-1383356824.cos.ap-shanghai.myqcloud.com/%E5%85%94%E5%AD%90%E6%9D%BE%E9%BC%A0%E8%A7%82%E6%B5%B7.jpg', alt: '绘本图片4' }
    ];
    
    this.setData({
      images: images
    });
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