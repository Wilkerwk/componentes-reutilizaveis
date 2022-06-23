(function (){
    'use strict';
  
    var btnSetItem = document.querySelector('.btnSetItem')
    var btnGetItem = document.querySelector('.btnGetItem')
    var btnRemoveItem = document.querySelector('.btnRemoveItem')
  
    function setLocalStorage(){
      btnSetItem.addEventListener('click', () => {
        localStorage.setItem('nome','Jack Sparrow')
      })
    }
  
    function getLocalStorage(){
      btnGetItem.addEventListener('click', () => {
        console.log( localStorage.getItem('nome') )
      })
    }
  
    function removeLocalStorage(){
      btnRemoveItem.addEventListener('click', () => {
        localStorage.removeItem('nome')
      })
    }
  
    setLocalStorage();
    getLocalStorage();
    removeLocalStorage();
  
  }());