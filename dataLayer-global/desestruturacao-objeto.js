//Adiciona fragmentos de uma URL ou endereço desejado 
var array = dataLayer;
function arrayUrl(array) {
    var obj = {};
    var newObj={};
    for (var i = 0; i < array.length; ++i){
        if (array[i].page ==undefined){
            obj[i] = false;
        }
        else{           
        
            if (array[i].event === `virtual-pageview`){                    
                    newObj[i]=array[i].page;                        
            }
        }
    }
    
    return newObj;
    
}
var newUrl = arrayUrl(array);
var array2 = Object.keys(newUrl);
var urlDirect = newUrl[array2[0]];
window.location.href = `URL`
