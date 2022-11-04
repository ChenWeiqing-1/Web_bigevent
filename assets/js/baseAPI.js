 // 注意：每次调用$.get()、$.post()或$.ajax的时候会先调用ajaxPrefilter这个函数
 // 在ajaxPrefilter这个函数中，可以拿到我们给ajax提供的配置对象
 $.ajaxPrefilter(function(options){
    options.url = "http://www.liulongbin.top:3007" + options.url
    console.log(options.url)
 })
