"use strict";
class Image {
    constructor(id, src, alt) {
        this.id = id;
        this.src = src;
        this.alt = alt;
        
        //this.width = width;
        //this.height = height;
    }
}

class Slider {
    constructor () {
        this.images = [
            new Image ("monImage","imgs/simon.jpg", "images"),
            new Image ("monImage","imgs/simon_table.jpg", "images"),
            new Image ("monImage","imgs/couleur.jpg", "images")
        ];
        // this.compteur = compteur;
        this.i = 0;
    }

    changerADroite() {
        this.i++;
        if(this.i > this.images.length -1) {
            this.i = 0;
        }
        let imgElt = document.getElementById("monImage");
        imgElt.src = this.images[this.i].src;
    }

    changerAGauche() {
        this.i--;
        if(this.i < 0){ 
            this.i = this.images.length -1;
        }
        let imgElt = document.getElementById("monImage");
        imgElt.src = this.images[this.i].src;
    }
}


let s = new Slider();
    document.addEventListener("keyup", (e) => {
    if(e.keyCode === 39){
    s.changerADroite();
    }
    else if (e.keyCode === 37){
        s.changerAGauche();
    }
}); 

class Simon{
    constructor(){
        this.i= 0;
        this.bt = [];
    }

    retourClic(){
        for(this.i = 0; this.i< bt.length; this.i++) {
            this.i = this.bt.length
        }

        let stockElt = document.getElementById("boutonrouge");
        stockElt.id = this.bt[this.i].id;
}
}
let n = new Simon(); 
document.addEventListener("click",() =>{
        alert();
});
