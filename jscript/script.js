$(document).ready(function () {
    $("#navbar1 a").click(function () {
      $("body").html("Log in to view the Web Page ... ");
      $("body").css({
        "background-color": "#333",
        "text-align": "center",
        "color": "#fff",
        "font-size": "6em",
        "font-family": "segoe ui",
        "margin-top": "250px",
        "font-weight": "600"
      });
    });
  
    $("#navbar a").click(function () {
      $("body").html("Loading .... ");
      $("body").css({
        "background-color": "#333",
        "text-align": "center",
        "color": "#fff",
        "font-size": "6em",
        "font-family": "segoe ui",
        "margin-top": "250px",
        "font-weight": "600"
      });
    });
    
    $('.product').each(function() {
      var $carousel = $(this).find('.carousel');
      var $images = $carousel.find('.product-image');
      var currentIndex = 0;

      function showImage(index) {
          $images.hide();
          $images.eq(index).show();
      }

      showImage(currentIndex);

      $(this).find('.next-button').click(function() {
          currentIndex = (currentIndex + 1) % $images.length;
          showImage(currentIndex);
      });

      $(this).find('.prev-button').click(function() {
          currentIndex = (currentIndex - 1 + $images.length) % $images.length;
          showImage(currentIndex);
      });
  });

   
});
    
  