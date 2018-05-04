document.addEventListener('DOMContentLoaded', function() {
  function mediaQuery(x) {
    if (x.matches) {
      desktopAccordion();
    } else {
      mobileAccordion();
    }
  }
  
  var x = window.matchMedia("(min-width: 480px)");
  mediaQuery(x);
  x.addListener(mediaQuery);


  function mobileAccordion() {
    console.log("МОБАЙЛ ФЁРСТ, СУКА!");
  }

  function desktopAccordion() {
    // console.log("Ну вот и декстопчик > 480");

    var menuList = document.querySelectorAll(".toggle-menu__item");
    var body = document.querySelector("body");
    var header = document.querySelector(".header");
    // console.log(header);

    for (var i = 0; i < menuList.length; i++) {
      menuList[i].addEventListener("click", function(e) {
        e.preventDefault();
        menuList[i].classList.add("suka-blyat");
      }, true);
    };
    

    // body.classList.add('loh');
  }
  
});