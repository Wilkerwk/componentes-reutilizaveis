let interval = window.setInterval(function(){
    /** bloco de inicialização */
    //_path retornar ultimo valor depois da ultima barra da URL;
    var _path = path();
    
    //verifica se o retorno da função path é igual a monte-sua-combinacao e roda a função que altera a página de monte sua combinação.
    if ( _path.pathName === 'https://planos.claro.com.br/assine-empresas/cep' ) {
    
        //chama função que altera a página de monte sua combinação.
        monteSuaCombinacao();
    }
    
    /** bloco de inicialização */
    
    /**
     * Observer, explicação detalhada dentro da função.
     * funão recebe dentro da key callback valores que correspondem ao ultimo path da url após a ultima barra.
     */
    observer({
        callback: {
            "https://planos.claro.com.br/assine-empresas/cep": monteSuaCombinacao, //"monte-sua-combinacao" é a referência da ultima barra da url, como tem hífen preciso declara-la com aspas. 
            //agendamento: agendamento //"agendamento" é a referência da ultima barra da url, como não tem hífen e não tem caracter especial não preciso declar as aspas, e ainda poderia deixar no lugar de "agendamento: agendamento", apenas "agendamento" como os nomes são iguais o objeto, subentende que ele precisa buscar uma função ou variavel ou objeto que contenha o mesmo nome. 
        }
    });
    
    function agendamento(){
        //Scopo da função
        //código que será chamado dentro da página agendamento
        console.log(`--------------- agendamento -----------------`);
        //Codigo que ira rodar quando a SPA etiver no "agendamento"
    }
    
    function monteSuaCombinacao(){
        //Scopo da função
        //código que será chamado dentro da página monte sua combinação.
        console.log(`----------------- monte sua combinacao -----------------`);
        //Codigo que ira rodar quando a SPA etiver no "monte sua combinação"
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
        window.location.href = `https://prd-pme-app.clarobrasil.mobi${urlDirect}`
    };
    
    /**
     * Path retorna um objeto, com a key path().pathName com a ultimo path da url após a ultima barra.
     */
    function path () {
    
            var pathName = window.location.href;
        
        var pathName = location.pathname; // retorna todo o path da url, após o dominio, por exemplo: se url é igual a https://www.claro.com.br/planos/pos, retorno se dá apenas em "/planos/pos"
            pathName = pathName.split(`/`); // quebra todo o path por /, assim o split vai gerar um array, onde vc remove todas as barras, por exemplo se a URL é: https://www.claro.com.br/plano/pos, retorno se dá ['', 'plano', 'pos']
            pathName = pathName[pathName.length-1]; // nesse caso pegamos o pathName que nesse momento é um array, e retornamos o valor.length total do valor -1 assim sempre retornaremos o ultimo valor do array.
        
        return { pathName } // retorna um objeto, com a key pathName: ultimo valor do path da URL;
    }
    
    function observer(cfg){
    //cfg verificacao de obejo 
    //cfg callback;
    
        let oldLocation = window.location.href; // retorna URL, inteira do site e armazena na variavel oldLocation
    
        console.log('oldLocation', oldLocation)
        // cria uma nova instância de observador
        //MutationObserver fornece aos desenvolvedores uma maneira de reagir a mudanças em um DOM. Ele é concebido como eventos um nível para  
        //Mutation Events definido na especificação de DOM 3 (Fonte: https://developer.mozilla.org/pt-BR/docs/Web/API/MutationObserver)
        const observer = new MutationObserver(function() { 
    
            //console.log('mutation')
            let newLocation = window.location.href; // retorna URL, inteira do site e armazena na variavel newLocation
            console.log('newLocation', newLocation);
            //console.log('urls diferentes', oldLocation != newLocation);
            if( oldLocation != newLocation ){ // verifica se oldLocation é igual a newLocation
                
                console.log(`entrou if`)
                
                oldLocation = newLocation; // atrela newLocation a oldLocation
                
                var pathName = location.pathname; // retorna todo o path da url, após o dominio, por exemplo: se url é igual a https://www.claro.com.br/planos/pos, retorno se dá apenas em "/planos/pos"
                var pathNameSplit = pathName.split(`/`); // quebra todo o path por /, assim o split vai gerar um array, onde vc remove todas as barras, por exemplo se a URL é: https://www.claro.com.br/plano/pos, retorno se dá ['', 'plano', 'pos']
                var chaveFinal = pathNameSplit[pathNameSplit.length-1]; // nesse caso pegamos o pathName que nesse momento é um array, e retornamos o valor.length total do valor -1 assim sempre retornaremos o ultimo valor do array.
                
                const callback = cfg.callback[chaveFinal]; //cfg.callback tem um objeto que precisa conter o ultimo path da url como nome, assim ele se torna dinamico na chamada. 
                callback(); //chama como função o objeto dinamico.
            };
        });
    
        // passar o nó alvo, bem como as opções de observação
        observer.observe(document.body, { childList: true, subtree: true });
    };
    
    clearInterval(interval);
    clearTimeout(timeout);
    }, 400);
    
    let timeout = window.setTimeout(function(){
        clearTimeout(timeout);
        clearInterval(interval);
    }, 20000); 