
$("document").ready(function () {

    $("div.kuda").mouseover(function () {
        $(this).css({
            background: "url('images/kuda.jpg')"
        });

 	  	$("div.kuda").click(function () {
            const rollSound = new Audio("audio/kuda.mp3");
            rollSound.play();
        });

    });

    $("div.kuda").mouseout(function () {
        $(this).css({
            background: "grey"
        });
    });

    $("div.kambing").mouseover(function () {
        $(this).css({
            background: "url('images/kambing.jpg')"
        });

        $("div.kambing").click(function () {
            const rollSound = new Audio("audio/kambing.mp3");
            rollSound.play()
        });
    });

    $("div.kambing").mouseout(function () {
        $(this).css({
            background: "grey"
        });
    });

    $("div.kucing").mouseover(function () {
        $(this).css({
            background: "url('images/kucing.jpg')"
        });

        $("div.kucing").click(function () {
            const rollSound = new Audio("audio/kucing.mp3");
            rollSound.play()
        });
    });

    $("div.kucing").mouseout(function () {
        $(this).css({
            background: "grey"
        });
    });
    $("div.monyet").mouseover(function () {
        $(this).css({
            background: "url('images/monyet.jpg')"
        });

        $("div.monyet").click(function () {
            const rollSound = new Audio("audio/monyet.mp3");
            rollSound.play()
        });
    });
    $("div.monyet").mouseout(function () {
        $(this).css({
            background: "grey"
        });
    });

    $("#button1").click(function(){
	    $(".slide1 > p").slideToggle();
	});
	$("#button2").click(function(){
	    $(".slide2 > p").slideToggle();
	    $(".slide2 > h4").slideToggle();
	});
	$("#button3").click(function(){
	    $(".slide3 > p").slideToggle();
	    $(".slide3 > ul").slideToggle();
	});

	$('.slide1 > p').slideUp();
	$('.slide2 > p').slideUp();
	$('.slide2 > h4').slideUp();
	$('.slide3 > p').slideUp();
	$('.slide3 > ul').slideUp();





});




