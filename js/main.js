//Loader
document.onreadystatechange = function () {
  var state = document.readyState
  if (state == 'interactive') {
       document.getElementById('contents').style.visibility="hidden";
  } else if (state == 'complete') {
      setTimeout(function(){
         document.getElementById('interactive');
         document.getElementById('load').style.visibility="hidden";
         document.getElementById('contents').style.visibility="visible";
      },1000);
  }
}


//Smooth Scroll
$(document).ready(function () {

    $("a").on('click', function (event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function () {

                window.location.hash = hash;
            });
        }
    });
});



// Close mobile menu on click
$(function () {

    $(".navbar-light .navbar-nav .nav-link").on("click touch", function () {

        $(".navbar-toggler").click();
    });
});



// Show/Hide transparent black navigation and Back button
$(function () {

    $(window).scroll(function () {

        if ($(this).scrollTop() < 60) {
            // hide nav
            $("nav").removeClass("mydark");
//            $("#back-btn").fadeOut();

        } else {
            // show nav
            $("nav").addClass("mydark");
//            $("#back-btn").fadeIn();
        }
    });
});
