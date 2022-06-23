const observer = new MutationObserver(function () {
    if ((window.location.pathname.indexOf("monte-sua-combinacao") > 0) || (window.location.pathname.indexOf("checkout") > 0) || (window.location.pathname.indexOf("cep") > 0)) {
        var refreshIntervalId = window.setInterval(function () {
            if (document.querySelectorAll(`#cep`).length <= 0) {
                if (document.querySelectorAll(`header .mdn-Menu-container.mdn-Container div.mdn-Container`).length > 0) {
                    var navHeader = document.querySelector(`header .mdn-Menu-container.mdn-Container div.mdn-Container`);
                    document.querySelector(`header .mdn-Menu-top`).insertAdjacentElement(`beforeend`, navHeader);
                    document.querySelector(`header .mdn-Menu-container.mdn-Container`).style.display = "block";
                    document.querySelector(`header .mdn-Menu-top`).style.display = "block";
                    navHeader.classList.remove(`open`);
                    clearInterval(refreshIntervalId);
                };
            };
        }, 100);
    };
});
observer.observe(document.body, { childList: true, subtree: true });

// forma completa

let interval = window.setInterval(function(){
    var _path = path();
    
    if (( _path.pathName === 'www.claro.com.br' ) ){    
        confirmacao();
    }
    
    observer({
        callback: {
            confirmacao: confirmacao, 
        }
    });
    
    
    
    function confirmacao(){    
       console.log(`deu bommmm`)
    };
                      
    function path () {
        var pathName = location.href;
            pathName = location.pathname;  
            pathName = pathName.split(`/`); 
            pathName = pathName[pathName.length-1]; 
    
        return { pathName } 
    }
    
    function observer(cfg){
    
        let oldLocation = window.location.href;
    
        const observer = new MutationObserver(function() { 
           
            let newLocation = window.location.href;
            if( oldLocation != newLocation ){ 
                
                oldLocation = newLocation;
                
                var pathName = location.href; 
                var pathNameSplit = pathName.split(`/`); 
                var chaveFinal = pathNameSplit[pathNameSplit.length-1]; 
                
                const callback = cfg.callback[chaveFinal]  //chaveFinal]; 
                callback(); 
            };
    
            if( oldLocation == newLocation ){ 
                
                oldLocation = newLocation;
                
                var pathName = location.href; 
                var pathNameSplit = pathName.split(`/`); 
                var chaveFinal = pathNameSplit[pathNameSplit.length-1]; 
                
                const callback = cfg.callback[chaveFinal]  //chaveFinal]; 
                callback(); 
            };
        });
        observer.observe(document.body, { childList: true, subtree: true });
    };
    
    clearInterval(interval);
    clearTimeout(timeout);
    }, 200);
    
    let timeout = window.setTimeout(function(){
      clearTimeout(timeout);
      clearInterval(interval);
    }, 10000); 
    
    
// com redirecionamento


