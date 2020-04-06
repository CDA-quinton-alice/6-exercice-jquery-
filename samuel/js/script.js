var df1 = "#drapeauF1";
var df2 = "#drapeauF2";
var df3 = "#drapeauF3";

var db1 = "#drapeauB1";
var db2 = "#drapeauB2";
var db3 = "#drapeauB3";

$(document).ready(function(){
    $(df1).addClass("blanc");
    $(df2).addClass("blanc");
    $(df3).addClass("blanc");
    $(db1).addClass("jaune");
    $(db2).addClass("jaune");
    $(db3).addClass("jaune");

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




$("#verif").click(function(){
    if($(df1).hasClass("bleu") && $(df2).hasClass("blanc") && $(df3).hasClass("rouge")){
        if($(".milieu2").css("display") == "flex"){
            if($(db1).hasClass("noir") && $(db2).hasClass("jaune") && $(db3).hasClass("rouge")){
                alert("ok");
            }else{
                alert("ko");
            }
        }else{
            $(".milieu2").css("display","flex");
        }
    }

});
