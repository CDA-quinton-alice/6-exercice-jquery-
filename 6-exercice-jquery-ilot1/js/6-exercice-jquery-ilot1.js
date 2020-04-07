var df1 = "#drapeauF1";
var df2 = "#drapeauF2";
var df3 = "#drapeauF3";

var db1 = "#drapeauB1";
var db2 = "#drapeauB2";
var db3 = "#drapeauB3";

var di1 = "#drapeauI1";
var di2 = "#drapeauI2";
var di3 = "#drapeauI3";

var nbDrapeauTrouve = "#countEssaie";
var drapeaux = ".container-drapeau";

var tempsEcoule = 0;

$(document).ready(function(){
    $(df1).addClass("blanc");
    $(df2).addClass("blanc");
    $(df3).addClass("blanc");
    $(db1).addClass("jaune");
    $(db2).addClass("jaune");
    $(db3).addClass("jaune");
    $(di1).addClass("blanc");
    $(di2).addClass("blanc");
    $(di3).addClass("blanc");

    changeColor(df1,"blanc","rouge","bleu");
    changeColor(df2,"blanc","rouge","bleu");
    changeColor(df3,"blanc","rouge","bleu");
    changeColor(db1,"jaune","rouge","noir");
    changeColor(db2,"jaune","rouge","noir");
    changeColor(db3,"jaune","rouge","noir");
    changeColor(di1,"blanc","rouge","vert");
    changeColor(di2,"blanc","rouge","vert");
    changeColor(di3,"blanc","rouge","vert");
    getClick(drapeaux);

    $("body").one("click",chrono);


});

function getClick(zone){
    $(zone).click(function(){
        $("#cliqueCount").text(parseInt($("#cliqueCount").text())+1);
    });
}
function changeColor(zone,c1,c2,c3){
    //$("#drapeauF1")
    $(zone).click(function(){
        if($(zone).hasClass(c1)){
            $(this).removeClass(c1);
            $(this).addClass(c2);
        }else if($(zone).hasClass(c2)){
            $(this).removeClass(c2);
            $(this).addClass(c3);
        }else if($(zone).hasClass(c3)){
            $(this).removeClass(c3);
            $(this).addClass(c1);
        }
    })
}
/*function changeColorF(zone){
    $(zone).click(function(){
        if($(zone).hasClass('blanc')){
            $(this).removeClass('blanc');
            $(this).addClass('rouge');
        }else if($(zone).hasClass('rouge')){
            $(this).removeClass('rouge');
            $(this).addClass('bleu');
        }else if($(zone).hasClass('bleu')){
            $(this).removeClass('bleu');
            $(this).addClass('blanc');
        }
    })
}
function changeColorB(zone){
    $(zone).click(function(){
        if($(zone).hasClass('jaune')){
            $(this).removeClass('jaune');
            $(this).addClass('rouge');
        }else if($(zone).hasClass('rouge')){
            $(this).removeClass('rouge');
            $(this).addClass('noir');
        }else if($(zone).hasClass('noir')){
            $(this).removeClass('noir');
            $(this).addClass('jaune');
        }
    })
}
function changeColorI(zone){
    $(zone).click(function(){
        if($(zone).hasClass('blanc')){
            $(this).removeClass('blanc');
            $(this).addClass('rouge');
        }else if($(zone).hasClass('rouge')){
            $(this).removeClass('rouge');
            $(this).addClass('vert');
        }else if($(zone).hasClass('vert')){
            $(this).removeClass('vert');
            $(this).addClass('blanc');
        }
    })
}*/
function verifDrapeau(d1,d2,d3,c1,c2,c3){
    if($(d1).hasClass(c1) && $(d2).hasClass(c2) && $(d3).hasClass(c3)){
        return true;
    }else{
        return false;
    }
}
/*function verifFrance(){
    //test si le drapeau français possède les bonnes couleurs dans le bon ordre
    if($(df1).hasClass("bleu") && $(df2).hasClass("blanc") && $(df3).hasClass("rouge")){
        return true;
    }else{
        return false;
    }
}
function verifBelge(){
    //test si le drapeau belge possède les bonnes couleurs dans le bon ordre
    if($(db1).hasClass("noir") && $(db2).hasClass("jaune") && $(db3).hasClass("rouge")){
        return true;
    }else{
        return false;
    }
}

function verifItalien(){
    //test si le drapeau italien possède les bonnes couleurs dans le bon ordre
    if($(di1).hasClass("vert")&& $(di2).hasClass("blanc")&& $(di3).hasClass("rouge")){
        return true;
    }else{
        return false;
    }
}*/
$("#verif").click(function(){
    
    if(verifDrapeau(df1,df2,df3,"bleu","blanc","rouge")){
        //on verifie si le drapeau belge est affiché ou non
        if($(".milieu2").css("display") == "block"){
            if(verifDrapeau(db1,db2,db3,"noir","jaune","rouge")){
                //on verifie si le drapeau italien est affiché ou non
                if($(".milieu3").css("display") == "block"){
                    if(verifDrapeau(di1,di2,di3,"vert","blanc","rouge")){
                        $(nbDrapeauTrouve).text(parseInt($(nbDrapeauTrouve).text())+1);
                        clearInterval(decompte);
                        alert("ok");
                    }else{
                        alert("ko");
                    }

                }else{
                    $(nbDrapeauTrouve).text(parseInt($(nbDrapeauTrouve).text())+1);
                    //on affiche le drapeau italien
                    $(".milieu3").css("display","block");
                    $("html").css("height","100%");
                }
            }else{
               alert("ko");
            }
        }else{
            $(nbDrapeauTrouve).text(parseInt($(nbDrapeauTrouve).text())+1);
            //on affiche le drapeau belge
            $(".milieu2").css("display","block");
            $("html").css("height","100%");
        }
    }else{
        alert("ko");
    }

});

// chrono
function chrono() {
	var startTime = new Date();

	decompte = setInterval(function () {
		var seconds = Math.round(
			(new Date().getTime() - startTime.getTime()) / 1000
		);

		var hours = parseInt(seconds / 3600);
		seconds = seconds % 3600;

		var minutes = parseInt(seconds / 60);
		seconds = seconds % 60;

		$("#timer").html(
			ajouteUnZero(minutes) +
			" : " +
            ajouteUnZero(seconds));
            
		tempsEcoule += 1;
	}, 1000);
}
function stopCompteur(){
    clearInterval(decompte);
}
// padding chrono
function ajouteUnZero(nombre) {
	if (nombre < 10) {
		return "0" + nombre;
	} else {
		return nombre;
	}
}
