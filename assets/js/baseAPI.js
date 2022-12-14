// 注意：每次调用$.get()、$.post()或$.ajax的时候会先调用ajaxPrefilter这个函数
// 在ajaxPrefilter这个函数中，可以拿到我们给ajax提供的配置对象
$.ajaxPrefilter(function (options) {
   options.url = "http://www.liulongbin.top:3007" + options.url
   //  console.log(options.url)

   // 统一为有权限的借口，设置 headers 请求头
   if (options.url.indexOf('/my/') !== -1) {
      options.headers = {
         Authorization: localStorage.getItem('token') || ''
      }
   }

   // 全局统一挂在 complete回调函数
   options.complete = function (res) {
      // 无论ajax请求成功或者失败，都会调用 complete 回调函数
      // 在 complete 回调函数中，可以使用 res.responseJSON 难道服务器响应回来的数据
      if (res.responseJSON.status === 1 && res.responseJSON.message === '身份认证失败！') {
         localStorage.removeItem('token')
         location.href = '/login.html'
      }
   }

})
