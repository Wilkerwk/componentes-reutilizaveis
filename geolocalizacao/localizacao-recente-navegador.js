function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
  
  function showPosition(position) {
    fetch(`https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/reverseGeocode?f=json&featureTypes=&location=${position.coords.longitude}%2C${position.coords.latitude}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        var cidade = data.address.Region;
        var estado = data.address.RegionAbbr;
        var slug = cidade.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase().replaceAll(' ', '-') + '-' + estado;
  
        fetch('https://www.claro.com.br/cities.json')
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            const filterCidade = data.filter(e => {
              return e.slug == slug;
            });
            const obj = { 'name': cidade, 'cityId': filterCidade[0].cityId, 'ddd': filterCidade[0].ddd, 'uf': filterCidade[0].uf, 'slug': filterCidade[0].slug, 'asnName': 'N/A', 'asnType': 'N/A' };
            return console.log(obj);
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  
    // $.getJSON(`https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/reverseGeocode?f=json&featureTypes=&location=${position.coords.longitude}%2C${position.coords.latitude}`, function(data) {
    //     var cidade = data['address']['Region'];        
    //     var estado = data['address']['RegionAbbr'];        
    //     console.log(cidade, estado);
    //     // $.getJSON("https://viacep.com.br/ws/"+ newCep +"/json/?callback=?", function(dados) {
    //     //     if(!("erro" in dados)) {
    //     //         sessionStorage.setItem('location_CC647', true);
    //     //         $.getJSON( "https://www.claro.com.br/api/cidades", function( data ) {
    //     //             $.each( data, function( key, val ) {
    //     //                 if(val.nome == dados.localidade){
    //     //                     $('#autocompleteCities').attr('data-select-prefixo', val.ddd);
    //     //                     $('#autocompleteCities').attr('data-select-estado', `${val.nome}/${val.estado}`);
    //     //                     $('#autocompleteCities').val(`${val.nome}/${val.estado}`);
    //     //                     $('#autocompleteCities').attr('data-select-id-cidade', val.id_cidade);
    //     //                     $('.alterar-cookie').click();                        
    //     //                 }
    //     //             });
    //     //         });                
    //     //     }
    //     // })        
    // });  
  }
  
  getLocation();
  