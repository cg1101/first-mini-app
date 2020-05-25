// orders.ts

Component({
  data: {
    hasMessage: false,
  },
  methods: {
    notify() {
      const showDot = this.data.hasMessage;
      if (showDot) {
        this.setData({ hasMessage: false });
        wx.hideTabBarRedDot({
          index: 2,
        });
      } else {
        this.setData({ hasMessage: true });
        wx.showTabBarRedDot({
          index: 2,
          success: function() {
            console.log('showTabBarRedDot succeeded', arguments);
          }
        });
      }
    }
  }
});
