$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
// from https://github.com/gernotstarke/minimal-mistakes/blob/master/assets/js/mod_outer_links.js
$(function () {
  // add `target="_blank"` to outgoing links.
  var host = document.location.host;
  $("a[href]").each(function() {
      var re = new RegExp(host, "g");
      if ($(this).attr("href").match(/\/\//) && !$(this).attr("href").match(re)) {
        $(this).attr("target", "_blank");
        $(this).attr("rel", "noopener noreferrer");
      }
  });
});

// 출처: https://cofs.tistory.com/188 [CofS]
$(function() {
  $("#MOVE_TOP_BTN").click(function() {
      $('html, body').animate({scrollTop:0}, 1000);
      return false;
  });
});
