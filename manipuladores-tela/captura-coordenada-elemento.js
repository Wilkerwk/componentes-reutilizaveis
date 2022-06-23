var rect = document.querySelector("#container").getBoundingClientRect();
//O getBoundingClientRect()método retorna um objeto DOMRect com oito propriedades: 
//esquerda, superior, direita, inferior, x, y, largura, altura.

var offset = { 
                top: rect.top, 
                bottom: rect.bottom,
                left: rect.left, 
                right: rect.right,
                x: rect.x,
                y: rect.y,
                width: rect.width, 
                height: rect.height,
            };

console.log(offset);