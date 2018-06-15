App({
  onLaunch() {
    // 引入 SDK
    require('./utils/sdk-v1.3.0.js');
    // 初始化 SDK
    let clientID = '975a62e478fceb6e85b5';
    wx.BaaS.init(clientID);
  }
})