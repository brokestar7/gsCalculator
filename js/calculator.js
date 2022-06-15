document.getElementById("type").addEventListener('change' , type);
// document.getElementById("send").addEventListener("click", calculate);
// document.getElementById("reset").addEventListener('click', reset);


let stats = [];

let atk_flat = document.querySelector("atk_flat");
let hp_flat = document.querySelector("hp_flat");
let def_flat = document.querySelector("def_flat");

let atk = document.querySelector("atk");
let hp = document.querySelector("hp");
let def = document.querySelector("def");
let cc = document.querySelector("cc");
let cdmg = document.querySelector("cdmg");
let spd = document.querySelector("spd");
let eff = document.querySelector("eff");
let res = document.querySelector("res");

function type() {
    let value = document.getElementById("type").value;
    if(value > 0){
        console.log("funciona el type", value );
    }
    else{
        return false;
    }
}




// calculate() {

// }