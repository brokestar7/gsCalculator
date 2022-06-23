document.getElementById("type").addEventListener('change' , type);
// document.getElementById("send").addEventListener("click", calculate);
// document.getElementById("reset").addEventListener('click', reset);


let stats_names = ["atk_flat","atk","hp_flat","hp","def_flat","def","spd","cc","cdmg","res","eff"];

/*  

let value = document.getElementById("type").value;



function type() {
    
    if(value > 0){
        console.log("funciona el type", value );
    }
    else{
        return false;
    }
}*/

function generate_stats(){
    let stats = [];
    for(let i=0;i<4;i++){
        stats[i]= [stats_names[document.getElementById("stat"+(i+1)).selectedIndex-1], document.getElementById("value_stat"+(i+1)).value];
    }
    return stats
}

function load_card(gs,stats) {


    if(gs>=70){// BUENA PIEZA BRO
        document.getElementById("card").innerHTML= '<div class="d-flex justify-content-center"><div class="card text-white bg-secondary " style="margin-bottom: 150px; max-width: 60rem; margin-top: 80px;"> <div class="card-header fs-4">Resultado</div> <div class="card-body"> <h4 class="card-title fs-3">GearScore : <span id="gsResult"></span> - Buena Pieza Bro 😎 </h4> <ul class="list-group fs-5"><li class="list-group-item bg-secondary"><span id="namestat1"></span>: <span id="substat1"></span></li><li class="list-group-item bg-secondary"><span id="namestat2"></span>: <span id="substat2"></span></li><li class="list-group-item bg-secondary"><span id="namestat3"></span>: <span id="substat3"></span></li><li class="list-group-item bg-secondary"><span id="namestat4"></span>: <span id="substat4"></span></li></ul><p class="card-text fs-5">Esta pieza es para insta-bloquearla. Puedes usarla para tus cazas 13 o tus mejores personajes de arena. Invierte en transmutadores y reforja sin miedo, valdra la pena.</p></div></div></div>'; 
    }

    else if(gs>=65){ // TA BIEN
        document.getElementById("card").innerHTML= '<div class="d-flex justify-content-center"><div class="card text-white bg-success " style="margin-bottom: 150px; max-width: 60rem; margin-top: 80px;"> <div class="card-header fs-4">Resultado</div> <div class="card-body"> <h4 class="card-title fs-3">GearScore : <span id="gsResult"></span> - Ta Bien 👍</h4> <ul class="list-group fs-5"><li class="list-group-item bg-success"><span id="namestat1"></span>: <span id="substat1"></span></li><li class="list-group-item bg-success"><span id="namestat2"></span>: <span id="substat2"></span></li><li class="list-group-item bg-success"><span id="namestat3"></span>: <span id="substat3"></span></li><li class="list-group-item bg-success"><span id="namestat4"></span>: <span id="substat4"></span></li></ul><p class="card-text fs-5">Felicidades! Esta es una buena pieza que puedes guardar sin problemas. Si te faltara algun stat para un personaje en concreto podrias intentar usar transmutadores. Queda bajo tu criterio.</p></div></div></div>'; 
    }
    else if(gs >= 60){ // USABLE
        document.getElementById("card").innerHTML= '<div class="d-flex justify-content-center"><div class="card text-white bg-warning" style="margin-bottom: 150px; max-width: 60rem; margin-top: 80px;""><div class="card-header fs-4">Resultado</div><div class="card-body"><h4 class="card-title fs-3">GearScore : <span id="gsResult"></span> - Usable 🙂</h4><ul class="list-group fs-5"><li class="list-group-item bg-warning"><span id="namestat1"></span>: <span id="substat1"></span></li><li class="list-group-item bg-warning"><span id="namestat2"></span>: <span id="substat2"></span></li><li class="list-group-item bg-warning"><span id="namestat3"></span>: <span id="substat3"></span></li><li class="list-group-item bg-warning"><span id="namestat4"></span>: <span id="substat4"></span></li></ul><p class="card-text fs-5">La pieza en si es util, es una base para tus personajes. Mira si tienes la opcion de reforjala para intentar sacarle mas gs. Si no fuere el caso, en cuanto saques una pieza mejor, mira de cambiarla. </p></div></div></div>';
    }
    else{ // VENDELA 
        document.getElementById("card").innerHTML= '<div class="d-flex justify-content-center"><div class="card text-white bg-danger" style="margin-bottom: 150px; max-width: 60rem; margin-top: 80px;""><div class="card-header fs-4">Resultado</div><div class="card-body"><h4 class="card-title fs-3">GearScore : <span id="gsResult"></span> - Vendela 🤢</h4><ul class="list-group fs-5"><li class="list-group-item bg-danger"><span id="namestat1"></span>: <span id="substat1"></span></li><li class="list-group-item bg-danger"><span id="namestat2"></span>: <span id="substat2"></span></li><li class="list-group-item bg-danger"><span id="namestat3"></span>: <span id="substat3"></span></li><li class="list-group-item bg-danger"><span id="namestat4"></span>: <span id="substat4"></span></li></ul><p class="card-text fs-5">Los stats son demasiado bajos... Si no pretendes hacer Wyverno 1 sera mejor que la extraigas o la uses para consegur talismanes en el santuario...</p></div></div></div>';
    }

    document.getElementById("gsResult").innerHTML = gs.toFixed(2);
    for (let i=0; i< stats.length;i++) {
        document.getElementById("namestat"+(i+1)).innerHTML = stats[i][0];
        document.getElementById("substat"+(i+1)).innerHTML = Number(stats[i][1]).toFixed(2);
    }

/* antiguo
    <div class="d-flex justify-content-center">   
        <div class="card text-white bg-secondary" style="margin-bottom: 200px; max-width: 60rem; margin-top: 100px;">
            <div class="card-header fs-4">Resultado</div>
                <div class="card-body">
                    <p class="card-title fs-3">GearScore : <span>gs</span> - Buena Pieza Bro </p>
                        <ul class="list-group fs-5">
                            <li class="list-group-item bg-secondary">Ej-stat: <span> 40 </span></li>
                            <li class="list-group-item bg-secondary">Ej-stat: <span> 10 </span></li>
                            <li class="list-group-item bg-secondary">Ej-stat: <span> 14 </span></li>
                            <li class="list-group-item bg-secondary">Ej-stat: <span> 8 </span></li>
                        </ul>
                    <p class="card-text fs-5">Esta pieza es para insta-bloquearla. Puedes usarla para tus cazas 13 o tus equipos de arena. Invierte en transmutadores y reforja sin miedo.</p>
                        </div>
                    </div>
                </div>
        </div>
    </div>";*/
}

function calculate() {

    stats = generate_stats();
    let gs = 0;
    for (let i=0; i< stats.length;i++) {

        if(stats[i][1] != ""){

            if(stats[i][0]=="spd")
            {
                gs += parseFloat(stats[i][1]*2);
                stats[i][1] = parseFloat(stats[i][1]*2)
            }
            else if(stats[i][0]=="cdmg")
            {
                gs += parseFloat(stats[i][1]*1.15);
                stats[i][1] = parseFloat(stats[i][1]*1.15)
            }
            else if(stats[i][0]=="cc")
            {
                gs += parseFloat(stats[i][1]*1.6);
                stats[i][1] = parseFloat(stats[i][1]*1.6)
            }
            else if(stats[i][0]=="atk_flat")
            {
                gs += parseFloat(stats[i][1]/10);
                stats[i][1] = parseFloat(stats[i][1]/10)
            }
            else if(stats[i][0]=="hp_flat")
            {
                gs += parseFloat(stats[i][1]/50);
                stats[i][1] = parseFloat(stats[i][1]/50)
            }
            else if(stats[i][0]=="def_flat")
            {
                gs += parseFloat(stats[i][1]/6);
                stats[i][1] = parseFloat(stats[i][1]/6)
            }
            else
            {
                gs += parseFloat(stats[i][1]);
            }
        }
    }
    load_card(gs,stats);
}