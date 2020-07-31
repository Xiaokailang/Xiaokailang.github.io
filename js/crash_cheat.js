var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/joke.ico");
         document.title = '网页丢失~好像没网了~';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/favicon.ico");
         document.title = ' nice  网络非常好哟 ^_^';
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });