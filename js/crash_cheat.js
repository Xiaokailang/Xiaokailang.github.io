var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/joke.ico");
         document.title = 'ε＝ε＝ε＝(#>д<)ﾉ你丑你就走';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/favicon.ico");
         document.title = ' (*^▽^*)  你帅你就回来！ ^_^';
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });