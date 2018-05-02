/*!
 * gulp-boilerplate v1.0.0: My Test Project for UpTrader
 * (c) 2018 Alexander Senchenko
 * MIT License
 * 
 */

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
    console.log("Ну вот и декстопчик > 480");
  }
  
});