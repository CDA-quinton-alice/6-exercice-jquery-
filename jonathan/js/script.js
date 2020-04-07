var df1 = "#drapeauF1";
var df2 = "#drapeauF2";
var df3 = "#drapeauF3";

var db1 = "#drapeauB1";
var db2 = "#drapeauB2";
var db3 = "#drapeauB3";

var di1 = "#drapeauI1";
var di2 = "#drapeauI2";
var di3 = "#drapeauI3";

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

    changeColorF(df1);
    changeColorF(df2);
    changeColorF(df3);
    changeColorB(db1);
    changeColorB(db2);
    changeColorB(db3);

});

function changeColorF(zone){
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
}

$("#verif").click(function(){
    
    if($(df1).hasClass("bleu") && $(df2).hasClass("blanc") && $(df3).hasClass("rouge")){
        if($(".milieu2").css("display") == "flex"){
            if($(db1).hasClass("noir") && $(db2).hasClass("jaune") && $(db3).hasClass("rouge")){
                alert("ok");
            }else{
                
                alert("ko");
            }
        }else{
<<<<<<< HEAD
            $(".milieu2").css("display","inline");
=======
            $(".milieu2").css("display","block");
            $("html").css({height: "100%"});
>>>>>>> fdbcfbb9f4c25c290441171dea66e88991cc592f
        }
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

// padding chrono
function ajouteUnZero(nombre) {
	if (nombre < 10) {
		return "0" + nombre;
	} else {
		return nombre;
	}
}
