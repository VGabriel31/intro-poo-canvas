const canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

//Obtiene las dimensiones de la pantalla actual
const window_height = window.innerHeight;
const window_width = window.innerWidth;

//Establece el tamaño del canvas
canvas.height = window_height;
canvas.width = window_width;

//establecemos el color de fondo
canvas.style.backgroundColor = '#C7B1DD';

class Circle {

    constructor(x, y, radius, color, text){
        this.posx = x;
        this.posy = y;
        this.radius = radius;
        this.color = color;
        this.text = text;

    }
    draw(context){
        context.beginPath();

        context.strokeStyle = this.color;

        context.textAlign= "center"
        context.textBaseline="middle"
        context.font = "20px Arial"
        context.fillText(this.text,this.posx, this.posy)

        context.lineWidth=2;
        context.arc(this.posx, this.posy, this.radius, 0, Math.PI*2);
        context.stroke();
        context.closePath();

    }
}

let arrayCircle=[];

for (let i=0; i<10; i++){

    let randomX = Math.random()* window_width;
    let randomY = Math.random()* window_height;
    let randomR = Math.random()* Math.floor(Math.random()* 100 + 40);


    let miCirculo = new Circle (randomX,randomY, randomR,"blue", i+1);

    //agrega el objeto al array
    arrayCircle.push(miCirculo);

    arrayCircle[i].draw(ctx);
    
}

/* let miCirculo = new Circle (100,100,50,"blue", 'Tec');
miCirculo.draw(ctx);

let miCirculo2 = new Circle (300,300,50,"red", 'pachuca');
miCirculo2.draw(ctx); */