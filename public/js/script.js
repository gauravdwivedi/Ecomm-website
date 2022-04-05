/* function openNav() {
  document.getElementById("mySidenav").style.width = "180px";
  document.getElementById("main").style.left = "180px"; 
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.left = "0"; 
  document.body.style.backgroundColor = "white";
} */

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

/*=====================
    Header sidebar 
==========================*/
$(".nav-bar").on('click', function () {
  $(".sidenav").addClass("show");
  $(".overlay-sidebar").addClass("show");
  $('body').css({
    'overflow': 'hidden'
  });
});
$(".overlay-sidebar").on('click', function () {
  $(".sidenav").removeClass("show");
  $(".overlay-sidebar").removeClass("show");
  $('body').css({
    'overflow': 'auto'
  });
});

/*=====================
    Slick slider start
==========================*/

$('.home-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,  
  dots: false,
  arrows: false,
});