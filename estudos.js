let interval = window.setInterval(function(){
    let compl_CC426 = () => {
        if(window.location.pathname.indexOf("monte-sua-combinacao") > 0){
            var refreshIntervalIdx = window.setInterval(function(){
                if($("#loading-modal-content-waiting").length == 0){
                    try{CC426();} catch{}
                    clearInterval(refreshIntervalIdx);
                }
            }, 1);    
        }
    }
    
    let under_compl_CC426 = () => {
        setTimeout(function(){ compl_CC426(); }, 500);
        if(window.location.pathname.indexOf("checkout") > 0){
            $('app-net-loader').html('');
            clear_box_footer_cc246();
            clear_box_body_cc246();
        }
    }
    
    var oldURL = "";
    var currentURL = window.location.href;
    function checkURLchange(currentURL){
        if(currentURL != oldURL){
            if(document.querySelector('script[src="https://gitcdn.xyz/repo/rjales13/claro2/master/CC426/code.js"]') == undefined){
                var s = document.createElement("script");
                s.src = "https://gitcdn.xyz/repo/rjales13/claro2/master/CC426/code.js";
                s.onload = function(e){ 
                    under_compl_CC426();
                };
                document.head.appendChild(s);    
            }else{
                under_compl_CC426();
            }        
            oldURL = currentURL;
        }
    
        oldURL = window.location.href;
        setTimeout(function() {
            checkURLchange(window.location.href);
        }, 1000);
    }
    
    checkURLchange();
    
    $('body').click(function() {
        compl_CC426();
    });
      
      
    clearTimeout(timeout);
    
    }, 500);
    let timeout = window.setTimeout(function(){
    clearTimeout(timeout);
    //clearInterval(interval);
    }, 1000); 
    
    document.querySelectorAll(`.wrap-btn`)[0].style.display = "none";
    
    document.querySelectorAll(`.sectionComponent.cms-CardHorizontal.image-left`)[1].style.display = "none";
    
    
    
    // input
    var input = document.getElementById('input'), log = document.getElementById('log');
    
    ['compositionstart', 'compositionupdate', 'compositionend', 'keydown'].forEach(function (event) {
      input.addEventListener(event, function (ev) {
        log.textContent += event + ': ' + (ev.data || ev.keyCode) + '\n';
      }, true);
    });
    