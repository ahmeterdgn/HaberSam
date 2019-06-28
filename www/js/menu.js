     (function () {
  'use strict';
  
  function buttonClickListener(evt) {
    let menu = evt.target.parentElement;
    let menuCssClass = menu.getAttribute('class');
    menu.setAttribute('class', menuCssClass.indexOf('open') >= 0 ? menuCssClass.replace('open', '') : (menuCssClass + ' open'));
  }
  
  window.addEventListener( "load", function () {
    let menus = document.querySelectorAll('.hamburger-menu');
    for (let i = 0; i < menus.length; i++) {
      let menu = menus[i];
      menu.querySelector('.hamburger-button').addEventListener('click', buttonClickListener);
    }
  }, false );
  
}());
