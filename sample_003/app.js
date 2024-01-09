var vm = new Vue({
  el: '#app',
  data: function() {
    return {
      count: 0,
      timerId: null
    }
  },
  created: function() {
    // インスタンスが生成されてデータが初期化された後に呼ばれる
    // DOM要素はインスタンスに紐づいていない
    console.log('created')
    var that = this
    // データを参照できる
    console.log(this.count)
    // DOM要素が紐づいていないので undefined
    console.log(this.$el)
    // タイマー処理を開始できる
    this.timerId = setInterval(function() {
      that.count += 1
    }, 1000)
  },
  mounted: function() {
    // インスタンスにDOM要素が紐づいた後に呼ばれる
    console.log('mounted')
    // DOM要素が紐づいている
    console.log(this.$el)
  },
  beforeDestroy: function() {
    // インスタンスが破壊される前に呼ばれる
    console.log('beforeDestroy')
    //タイマーの後始末を行う
    clearInterval(this.timerId)
  }
})

window.vm = vm