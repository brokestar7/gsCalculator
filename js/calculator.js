document.getElementById("type").addEventListener('change' , type);
// document.getElementById("send").addEventListener("click", calculate);
// document.getElementById("reset").addEventListener('click', reset);


let stats_names = ["atk_flat","atk","hp_flat","hp","def_flat","def","spd","cc","cdmg","res","eff"];

/*  jony's shit

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
/*
function load_card(gs){


}*/

function calculate() {

    stats = generate_stats();
    let gs = 0;
    for (let i=0; i< stats.length;i++) {

        if(stats[i][1] != ""){

            if(stats[i][0]=="spd")
            {
                gs += parseFloat(stats[i][1]*2);
            }
            else if(stats[i][0]=="cdmg")
            {
                gs += parseFloat(stats[i][1]*1.15);
            }
            else if(stats[i][0]=="cc")
            {
                gs += parseFloat(stats[i][1]*1.6);
            }
            else if(stats[i][0]=="atk_flat")
            {
                gs += parseFloat(stats[i][1]/10);
            }
            else if(stats[i][0]=="hp_flat")
            {
                gs += parseFloat(stats[i][1]/50);
            }
            else if(stats[i][0]=="def_flat")
            {
                gs += parseFloat(stats[i][1]/6);
            }
            else
            {
                gs += parseFloat(stats[i][1]);
            }
        }
    }
    document.getElementById("gsResult").innerHTML = gs.toFixed(2);

    //load_card(gs);
}