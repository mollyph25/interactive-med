/*jQuery.fn.swap = function(b){ 
    // method from: http://blog.pengoworks.com/index.cfm/2008/9/24/A-quick-and-dirty-swap-method-for-jQuery
    b = jQuery(b)[0]; 
    var a = this[0]; 
    var t = a.parentNode.insertBefore(document.createTextNode(''), a); 
    b.parentNode.insertBefore(a, b); 
    t.parentNode.insertBefore(b, t); 
    t.parentNode.removeChild(t); 
    return this; 
};*/

for(var i = 0; i<50; i++){
	var random = Math.floor(Math.random() * 50);
	var index = i +1;
	$("#box"+index).css("order", random);
}; 


$( ".square" ).draggable({ /* this is referenced from https://jqueryui.com/draggable/#snap-to*/
      revert: "invalid",
      snap: ".dropSquare",
      snapMode: "inner",
      snapTolerance: 40
});

	/*$(".square").droppable({
        accept: $(".square"),

        drop: function (event, ui) {
            var draggable = ui.draggable;
            var droppable = $(this);
            var dragPos = draggable.position();
            var dropPos = droppable.position();

        draggable.css({
            left: dropPos.left+'px',
            top: dropPos.top+'px'
        });

        droppable.css({
            left: dragPos.left+'px',
            top: dragPos.top+'px'
        });
        draggable.swap(droppable);
        }
    });

});
/*
$(".dropSquare").droppable({
	drop: function (event, ui) {
            var draggable = ui.draggable;
            var droppable = $(this);
            var dragPos = draggable.position();
            var dropPos = droppable.position();

            draggable.css({
                left: dropPos.left + "px",
                top: dropPos.top + "px",
                "z-index": 20
            });

            droppable.css("z-index", 10).animate({
                left: dragPos.left,
                top: dragPos.top
            });
        }
})*/
/*
$("#dropbox1").droppable({ accept: "#box1" ,}); /*this is referenced from https://jqueryui.com/droppable/#accepted-elements
$("#dropbox2").droppable({ accept: "#box2" });
$("#dropbox3").droppable({ accept: "#box3" });
$("#dropbox4").droppable({ accept: "#box4" });
$("#dropbox5").droppable({ accept: "#box5" });
$("#dropbox6").droppable({ accept: "#box6" });
$("#dropbox7").droppable({ accept: "#box7" });
$("#dropbox8").droppable({ accept: "#box8" });
$("#dropbox9").droppable({ accept: "#box9" });
$("#dropbox10").droppable({ accept: "#box10" });
$("#dropbox11").droppable({ accept: "#box11" });
$("#dropbox12").droppable({ accept: "#box12" });
$("#dropbox13").droppable({ accept: "#box13" });
$("#dropbox14").droppable({ accept: "#box14" });
$("#dropbox15").droppable({ accept: "#box15" });
$("#dropbox16").droppable({ accept: "#box16" });
$("#dropbox17").droppable({ accept: "#box17" });
$("#dropbox18").droppable({ accept: "#box18" });
$("#dropbox19").droppable({ accept: "#box19" });
$("#dropbox20").droppable({ accept: "#box20" });
$("#dropbox21").droppable({ accept: "#box21" });
$("#dropbox22").droppable({ accept: "#box22" });
$("#dropbox23").droppable({ accept: "#box23" });
$("#dropbox24").droppable({ accept: "#box24" });
$("#dropbox25").droppable({ accept: "#box25" });
$("#dropbox26").droppable({ accept: "#box26" });
$("#dropbox27").droppable({ accept: "#box27" });
$("#dropbox28").droppable({ accept: "#box28" });
$("#dropbox29").droppable({ accept: "#box29" });
$("#dropbox30").droppable({ accept: "#box30" });
$("#dropbox31").droppable({ accept: "#box31" });
$("#dropbox32").droppable({ accept: "#box32" });
$("#dropbox33").droppable({ accept: "#box33" });
$("#dropbox34").droppable({ accept: "#box34" });
$("#dropbox35").droppable({ accept: "#box35" });
$("#dropbox36").droppable({ accept: "#box36" });
$("#dropbox37").droppable({ accept: "#box37" });
$("#dropbox38").droppable({ accept: "#box38" });
$("#dropbox39").droppable({ accept: "#box39" });
$("#dropbox40").droppable({ accept: "#box40" });
$("#dropbox41").droppable({ accept: "#box41" });
$("#dropbox42").droppable({ accept: "#box42" });
$("#dropbox43").droppable({ accept: "#box43" });
$("#dropbox44").droppable({ accept: "#box44" });
$("#dropbox45").droppable({ accept: "#box45" });
$("#dropbox46").droppable({ accept: "#box46" });
$("#dropbox47").droppable({ accept: "#box47" });
$("#dropbox48").droppable({ accept: "#box48" });
$("#dropbox49").droppable({ accept: "#box49" });
$("#dropbox50").droppable({ accept: "#box50" });*/

