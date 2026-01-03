// pages/story-loading/index.js

Page({
  data: {
    progress: 0, // 当前进度
    currentTip: '正在生成故事内容...', // 当前提示文字
    storyContent: '', // 传递过来的故事内容
    microphonePressed: false, // 麦克风是否被按下
    timer: null, // 定时器
    tips: [ // 生成过程中的提示文字
      '正在生成故事内容...',
      '正在构思精彩情节...',
      '正在设计绘本插图...',
      '正在调整画面细节...',
      '正在优化整体效果...',
      '绘本生成完成！'
    ]
  },

  onLoad: function(options) {
    // 获取传递过来的故事内容
    if (options && options.storyContent) {
      this.setData({
        storyContent: decodeURIComponent(options.storyContent)
      });
    }
    
    // 获取传递过来的麦克风按下标志
    if (options && options.microphonePressed) {
      this.setData({
        microphonePressed: options.microphonePressed === 'true'
      });
    }
    
    // 开始模拟生成进度
    this.startGeneration();
  },

  onUnload: function() {
    // 清除定时器
    if (this.data.timer) {
      clearInterval(this.data.timer);
      this.setData({ timer: null });
    }
  },

  // 处理标题栏返回按钮
  onBackPress: function() {
    // 直接跳转到定制页面，关闭加载页面
    wx.switchTab({
      url: '/pages/customize/index'
    });
    // 返回true表示处理了返回事件
    return true;
  },

  // 开始模拟生成进度
  startGeneration: function() {
    let progress = 0;
    let tipIndex = 0;
    let step = 0;
    
    // 定时器，每秒更新一次进度
    const timer = setInterval(() => {
      step++;
      
      // 前5步，每步增加10-15%进度
      // 最后一步确保进度达到100%
      let increment;
      if (step >= 10 || progress >= 90) {
        // 最后一步，直接到100%
        increment = 100 - progress;
      } else {
        // 随机增加进度（10-15%）
        increment = Math.floor(Math.random() * 6) + 10;
      }
      
      progress += increment;
      
      // 确保进度不超过100%
      if (progress >= 100) {
        progress = 100;
        
        // 强制清除定时器
        clearInterval(timer);
        this.setData({ timer: null });
        
        // 更新提示文字
        this.setData({
          progress: 100,
          currentTip: this.data.tips[this.data.tips.length - 1]
        });
        
        // 延迟1秒后跳转到结果页面
        // 使用setTimeout的回调函数直接调用navigateTo，确保跳转执行
        const jumpTimeout = setTimeout(() => {
          clearTimeout(jumpTimeout);
          this.navigateToResult();
        }, 1000);
      } else {
        // 更新提示文字（每20%更换一次）
        const newTipIndex = Math.floor(progress / 20);
        if (newTipIndex > tipIndex) {
          tipIndex = newTipIndex;
          
          // 确保不超出提示文字数组范围
          if (tipIndex < this.data.tips.length - 1) {
            this.setData({
              currentTip: this.data.tips[tipIndex]
            });
          }
        }
        
        // 更新进度
        this.setData({
          progress: progress
        });
      }
    }, 800); // 缩短间隔，让加载过程更流畅
    
    this.setData({
      timer: timer
    });
  },

  // 跳转到结果页面
  navigateToResult: function() {
    // 使用redirectTo替换当前页面，清除导航栈中的加载页面，传递microphonePressed标志
    wx.redirectTo({
      url: '/pages/story-result/index?storyContent=' + encodeURIComponent(this.data.storyContent) + '&microphonePressed=' + this.data.microphonePressed
    });
  }
});
