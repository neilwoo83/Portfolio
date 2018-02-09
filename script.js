<!--jquery script runs heading fade-->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
$(window).bind("load", function() {
  $("#start").click(function(){
      $("div").animate({height: 300}, 3000);
      $("div").animate({width: 300}, 3000);
  });
  $("#complete").click(function(){
      $("div").finish();
  });
});

</script>
