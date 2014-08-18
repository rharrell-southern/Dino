//Set system wide variables
var thisDuration = 1000;
var hipInterval;
var hiIsRuning = false;
var exerCorrect
var consoleHeight = '830px'; /* Controls video player container height; Come back and use this instead to adjust */
var setVideoWidth;
var setVideoHeight;
var lockImgPath;

// Set module variables
var slides;
var zones;
var videoPath = new Array();
var exerInt = new Array(); //Order: [(string) exercise name, [(array) list of options, correct answers denoted by trailing '*'], (string/array) error messages] 

var draggableOptions = {
                revert: true,
                helper: "original",
                cursor: "move",
                zIndex:450
};
var droppableOptions= new Array();


switch(thisModule) {
    case 1:
        zones = 2;
        slides = 10;
        videoPath[1] = 'video/m1.1.mp4';
        videoPath[2] = 'video/m1.2.mp4';
        exerCorrect = [false, false, [0, 0, 0]];
        droppableOptions = [["#exer1 #option1", {
            //accept: "#word2",
            hoverClass: "drop-hover",
            drop: function (event, ui) {
                //Instead of using accept method, we evaluate within the drop function in order to provide the user with error reporting.
                var drop = ui.draggable[0].innerHTML;
                if (drop == 'Lizard') {
                    dropCorrect($(this), 'Lizard');
                } else {
                    //alert user as to why answer is incorrect, then revert back to original content
                    displayAlert("'" + drop + "' is incorrect. Think about what each word might mean.  If you need to review, go back and re-watch the video.");
                }
            }
        }], ["#exer1 #option2", { 
            hoverClass: "drop-hover",
            drop: function (event, ui) { 
                var drop = ui.draggable[0].innerHTML;
                if (drop == 'Hip') {
                    dropCorrect($(this), 'Hip');
                } else {
                    displayAlert("'" + drop + "' is incorrect. Think about what each word might mean.  If you need to review, go back and re-watch the video.");
                }
            }
        }], ["#exer1 #option3", {
            hoverClass: "drop-hover",
            drop: function (event, ui) {
                var drop = ui.draggable[0].innerHTML;
                if (drop == 'Bird') {
                    dropCorrect($(this), 'Bird');
                } else {
                    displayAlert("'" + drop + "' is incorrect. Think about what each word might mean.  If you need to review, go back and re-watch the video.");
                }
            }
        }], ["#exer1 #option4", {
            hoverClass: "drop-hover",
            drop: function (event, ui) {
                var drop = ui.draggable[0].innerHTML;
                if (drop == 'Hip') {
                    dropCorrect($(this), 'Hip');
                } else {
                    displayAlert("'" + drop + "' is incorrect.  Think about what each word might mean.  If you need to review, go back and re-watch the video.");
                }
            }
        }], ["#exer2 #option1", {
            hoverClass: "drop-hover",
            drop: function (event, ui) {
                var drop = ui.draggable[0].innerHTML;
                if (drop == 'Illium') {
                    dropCorrect($(this), 'Illium');
                } else {
                    displayAlert("'" + drop + "' is incorrect. Try to remember which bones have unique characterstics that make them easy to identify.  If you need to review, go back and re-watch the video.");
                }
            }
        }], ["#exer2 #option2", {
            hoverClass: "drop-hover",
            drop: function (event, ui) {
                var drop = ui.draggable[0].innerHTML;
                if (drop == 'Ischium') {
                    dropCorrect($(this), 'Ischium');
                } else {
                    displayAlert("'" + drop + "' is incorrect. Try to remember which bones have unique characterstics that make them easy to identify.  If you need to review, go back and re-watch the video.");
                }
            }
        }], ["#exer2 #option3", {
            hoverClass: "drop-hover",
            drop: function (event, ui) {
                var drop = ui.draggable[0].innerHTML;
                if (drop == 'Pubis') {
                    dropCorrect($(this), 'Pubis');
                } else {
                    displayAlert("'" + drop + "' is incorrect. Try to remember which bones have unique characterstics that make them easy to identify.  If you need to review, go back and re-watch the video.");
                }
            }
        }], ["#exer3 #dino1", {
            drop: function (event, ui) {
                var drop = $(ui.draggable[0]).attr('id');
                console.log(drop);
                if (drop == 'hips1') {
                    $("#dino1").addClass("success");
                   exerCorrect[2][0] = 1;
                    checkCorrect();
                } else {
                    displayAlert("That hip doesn't match this dinosaur.  Try to remember the unique characterstics of each type of dinosaur.  If you need to review, go back and re-watch the video.");
                    $("#dino1").removeClass("success");
                    exerCorrect[2][0] = 0;
                }
            }
        }], ["#exer3 #dino2", {
            drop: function (event, ui) {
                var drop = $(ui.draggable[0]).attr('id');
                if (drop == 'hips2') {
                    $("#dino2").addClass("success");
                    exerCorrect[2][1] = 1;
                    checkCorrect();
                } else {
                    displayAlert("That hip doesn't match this dinosaur.  Try to remember the unique characterstics of each type of dinosaur.  If you need to review, go back and re-watch the video.");
                    $("#dino2").removeClass("success");
                    exerCorrect[2][1] = 0;
                }
            }
        }], ["#exer3 #dino3", {
            drop: function (event, ui) {
                var drop = $(ui.draggable[0]).attr('id');
                if (drop == 'hips1') {
                    $("#dino3").addClass("success");
                    exerCorrect[2][2] = 1;
                    checkCorrect();
                } else {
                    displayAlert("That hip doesn't match this dinosaur.  Try to remember the unique characterstics of each type of dinosaur.  If you need to review, go back and re-watch the video.");
                    $("#dino3").removeClass("success");
                    exerCorrect[2][2] = 0;
                }
            }
        }]];
        break;
    case 2:
        zones = 1;
        slides = 0;
        videoPath[1] = 'video/m2.1.mp4';
        exerCorrect = [false, [0, 0]];
        exerInt = ['exer1', ['dino1', 'dino2', 'dino3*', 'dino4*'], ["This dinosaur is not a Sauropod.  Try to remember the unique characterstics of Sauropods.  If you need to review, go back and re-watch the video.", 
                                                                     "This dinosaur is not a Sauropod.  Try to remember the unique characterstics of Sauropods.  If you need to review, go back and re-watch the video.", null, null]];
        droppableOptions = [["body.module2 #exer2 #dino1", {
            drop: function (event, ui) {
                var drop = $(ui.draggable[0]).attr('id');
                if (drop == 'leaf-left' || drop == 'leaf-right') {
                    $("body.module2 #exer2 #dino1").addClass("success");
                    exerCorrect[1][0] = 1;
                    checkCorrect();
                } else {
                    displayAlert("That is not the type of food this dinosaur eats! Go back and watch the video if you need to review.");
                    $("body.module2 #exer2 #dino1").removeClass("success");
                    exerCorrect[1][0] = 0;
                }
            }
        }], ["body.module2 #exer2 #dino2", {
            drop: function (event, ui) {
                var drop = $(ui.draggable[0]).attr('id');
                if (drop == 'leaf-left' || drop == 'leaf-right') {
                    $("body.module2 #exer2 #dino2").addClass("success");
                    exerCorrect[1][1] = 1;
                    checkCorrect();
                } else {
                    displayAlert("That is not the type of food this dinosaur eats! Go back and watch the video if you need to review.");
                    $("body.module2 #exer2 #dino2").removeClass("success");
                    exerCorrect[1][1] = 0;
                }
            }
        }]];

        break;
    case 3:
        zones = 1;
        slides = 0;
        videoPath[1] = 'video/m3.1.mp4';
        exerCorrect = [false, [0, 0]];
        exerInt = ['exer1', ['dino1*', 'dino2', 'dino3*', 'dino4'], [null, "This dinosaur is not a Theropod.  Try to remember the unique characterstics of Theropods.  If you need to review, go back and re-watch the video.", 
                                                                     null, "This dinosaur is not a Theropod.  Try to remember the unique characterstics of Theropods.  If you need to review, go back and re-watch the video."]];
        droppableOptions = [["body.module3 #exer2 #dino1", {
            drop: function (event, ui) {
                var drop = $(ui.draggable[0]).attr('id');
                if (drop == 'meat-left' || drop == 'meat-right') {
                    $("body.module3 #exer2 #dino1").addClass("success");
                    exerCorrect[1][0] = 1;
                    checkCorrect();
                } else {
                    displayAlert("That is not the type of food this dinosaur eats! Go back and watch the video if you need to review.");
                    $("body.module3 #exer2 #dino1").removeClass("success");
                   exerCorrect[1][0] = 0;
                }
            }
        }], ["body.module3 #exer2 #dino2", {
            drop: function (event, ui) {
                var drop = $(ui.draggable[0]).attr('id');
                if (drop == 'meat-left' || drop == 'meat-right') {
                    $("body.module3 #exer2 #dino2").addClass("success");
                    exerCorrect[1][1] = 1;
                    checkCorrect();
                } else {
                    displayAlert("That is not the type of food this dinosaur eats! Go back and watch the video if you need to review.");
                    $("body.module3 #exer2 #dino2").removeClass("success");
                    exerCorrect[1][1] = 0;
                }
            }
        }]];

        break;
    case 4:
        zones = 2;
        slides = 0;
        videoPath[1] = 'video/m4.1.mp4';
        videoPath[2] = 'video/m4.2.mp4';
        exerCorrect = [[0, 0, 0], [0, 0]];
        droppableOptions = [["#exer1 #dino1", {
            hoverClass: "drop-hover",
            drop: function (event, ui) {
                var drop = ui.draggable[0].innerHTML;
                if (drop == 'Ornithipod') {
                    $("#exer1 #dino1").addClass("success");
                    exerCorrect[0][0] = 1;
                    checkCorrect();
                } else {
                    displayAlert("'" + drop + "' is not the correct type of dinosaur. Go back and watch the video again if you need to review.");
                    exerCorrect[0][0] = 0;
                    $("#exer1 #dino1").removeClass("success");
                }
            }
        }], ["#exer1 #dino2", {
            hoverClass: "drop-hover",
            drop: function (event, ui) {
                var drop = ui.draggable[0].innerHTML;
                if (drop == 'Pachycephalosaur') {
                    $("#exer1 #dino2").addClass("success");
                    exerCorrect[0][1] = 1;
                    checkCorrect();
                } else {
                    displayAlert("'" + drop + "' is not the correct type of dinosaur. Go back and watch the video again if you need to review.");
                    exerCorrect[0][1] = 0;
                    $("#exer1 #dino2").removeClass("success");
                }
            }
        }], ["#exer1 #dino3", {
            hoverClass: "drop-hover",
            drop: function (event, ui) {
                var drop = ui.draggable[0].innerHTML;
                if (drop == 'Ceratopsian') {
                    $("#exer1 #dino3").addClass("success");
                    exerCorrect[0][2] = 1;
                    checkCorrect();
                } else {
                    displayAlert("'" + drop + "' is not the correct type of dinosaur. Go back and watch the video again if you need to review.");
                    exerCorrect[0][2] = 0;
                    $("#exer1 #dino3").removeClass("success");
                }
            }
        }], ["#exer2 #dino1", {
            hoverClass: "drop-hover",
            drop: function (event, ui) {
                var drop = ui.draggable[0].innerHTML;
                if (drop == 'Stegosaur') {
                    $("#exer2 #dino1").addClass("success");
                    exerCorrect[1][0] = 1;
                    checkCorrect();
                } else {
                    displayAlert("'" + drop + "' is not the correct type of dinosaur. Go back and watch the video again if you need to review.");
                    exerCorrect[1][0] = 0;
                    $("#exer2 #dino1").removeClass("success");
                }
            }
        }], ["#exer2 #dino2", {
            hoverClass: "drop-hover",
            drop: function (event, ui) {
                var drop = ui.draggable[0].innerHTML;
                if (drop == 'Ankylosaur') {
                    $("#exer2 #dino2").addClass("success");
                    exerCorrect[1][1] = 1;
                    checkCorrect();
                } else {
                    displayAlert("'" + drop + "' is not the correct type of dinosaur. Go back and watch the video again if you need to review.");
                    exerCorrect[1][1] = 0;
                    $("#exer2 #dino2").removeClass("success");
                }
            }
        }]];
        break;
    
    default:
        break;
}

function imageResize() {
    var mediaWidth = document.body.clientWidth;
    var mediaHeight = document.body.clientHeight;
    if (mediaWidth <= 1200 || mediaHeight <= 850) {
        for (i=0; i<=zones; i++) {
            $('#zone' + i).html("<img src='images/mod" + thisModule + "/zone" + i + "-small.png'>");
        }
        for (i=0; i<=slides; i++) {
            $('#slide' + i).html("<img src='images/mod" + thisModule + "/slides/" + i + "-small.png'>");
        }
        $('#meat-left').html("<img src='images/meat-small.png'>");
        $('#meat-right').html("<img src='images/meat-small.png'>");
        $('#leaf-left').html("<img src='images/vegetation-small.png'>");
        $('#leaf-right').html("<img src='images/vegetation-small.png'>");
        lockImgPath = 'url("images/unlocked-small.png")';
        setVideoWidth = 678;
        setVideoHeight = 379;
        consoleHeight = '650px';
    } else if (mediaWidth > 1200 || mediaHeight > 850) {
        for (i=0; i<=zones; i++) {
            $('#zone' + i).html("<img src='images/mod" + thisModule + "/zone" + i + ".png'>");
        }
        for (i=0; i<=slides; i++) {
            $('#slide' + i).html("<img src='images/mod" + thisModule + "/slides/" + i + ".png'>");
        }
        $('#meat-left').html("<img src='images/meat.png'>");
        $('#meat-right').html("<img src='images/meat.png'>");
        $('#leaf-left').html("<img src='images/vegetation.png'>");
        $('#leaf-right').html("<img src='images/vegetation.png'>");
        lockImgPath = 'url("images/unlocked.png")';
        setVideoWidth = 918;
        setVideoHeight = 513;
        consoleHeight = '830px';
    }
    projekktor('player_a').setSize({
        width: setVideoWidth,
        height: setVideoHeight
    });
    if($('#video_console').height() > 0) {
        $('#video_console').height(consoleHeight); 
    }
    if($('#threeDmodel #console').height() > 0) {
        $('#threeDmodel #console').height(consoleHeight); 
    }
    if($('#unlocked').is(':visible')){
        $('#unlocked #lock').css({
            backgroundImage: lockImgPath
        });
    }
}


//Switch hip images on resize
$(window).resize(function() {
    imageResize();
});

// Control intervals of glow/fade animation
function startHipFade() {
    for(i=1; i<=zones; i++) {
        $('#zone' + i).animate({
            opacity: 1
        }, thisDuration, function() {
            $(this).animate({
                opacity: 0
            }, thisDuration);
        });
    }

    // Fading hilights
    if (!hiIsRuning) {
        hiIsRuning = true;
        hipInterval = setInterval(function() {
            for(i=1; i<=zones; i++) {
                $('#zone' + i).delay((i - 1)*500).animate({
                    opacity: 1
                }, thisDuration, function() {
                    $(this).animate({
                        opacity: 0
                    }, thisDuration);
                });
            }
        }, (i * 500) + 4000);
    }
}

function clearHipIntervals() {
    clearInterval(hipInterval);
    hiIsRuning = false;
}


// Jump to a section of the website
function toSection(goTo, videoStart) {

	$('#leftnav a').removeClass("active");
	$('#leftnav a.'+goTo).addClass("active");

    projekktor('player_a').setStop();
    $('#video_captions').html('');
    $('#subnav a').removeClass('active');

    if (goTo == 'video') {
        $('#leftnav span').slideUp(0);
        setTimeout(function() {
            if (!videoStart) {
                videoStart = 0;
            }
            videoStart = parseFloat(videoStart);
            $('#video_console').animate({
                height: consoleHeight
            }, 600, function() {
                projekktor('player_a').setActiveItem(videoStart);
                projekktor('player_a').setPlay();
                $('#video_content').fadeIn('fast');
            });
        }, 200);
        $('#subnav a[zone="' + (videoStart+1) + '"]').addClass("active visited");
    } else {
        $('#subnav a[href="' + goTo + '"]').addClass("active visited");
        $('#leftnav span').slideDown(0);
    }

    if (goTo == 'exhibit') {
        clearHipIntervals();
        $('#leftnav span').slideUp(0);
        $('div.blackout').fadeOut();
        $('div#subpages').fadeOut(function() {
            $('div#' + goTo).fadeIn();
            startHipFade();
        });
    } else {
        clearHipIntervals();
        $('#exhibit').fadeOut(0);
        $('div.blackout').fadeIn();
        $('div#subpages').fadeIn();
        $('div#subpages > div').hide(0);
        $('div#' + goTo).show(0);
    }

    if (goTo == 'exer1') {
        if(thisModule == 1){
            $('#exer1 #text').fadeIn('fast');
            $('#exer1 #drawer').animate({
                height: '150px',
                marginTop: '-34px'
            }, 400, function() {
                $('#exer1 #options').fadeIn('fast');
                $('#exer1 .selectWords').fadeIn('fast');
            });
        }else if(thisModule == 2 || thisModule == 3){
                $('#exer1 #text').fadeIn('fast');
                $('#exer1 #dinoImages').fadeIn('fast');
        }else if(thisModule == 4){
            $('#exer1 #text').fadeIn('fast');
            $('#exer1 #drawer').animate({
                height: '150px',
                marginTop: '-34px'
            }, 400, function() {
                $('#exer1 #dinoImages').fadeIn('fast');
                $('#exer1 #selectWords').fadeIn('fast');
            });
        }
    } else if (goTo == 'exer2') {
        if(thisModule == 1){
            $('#exer2 #text').fadeIn('fast');
            $('#exer2 #drawer').animate({
                height: '250px'
            }, 400, function() {
                $('#exer2 #options').fadeIn('fast');
                $('#exer2 .selectWords').fadeIn('fast');
            });
        }else if(thisModule == 2 || thisModule == 3){
            $('#exer2 #text').fadeIn('fast');
            $('#exer2 #table').fadeIn(500, function() {
                $('#exer2 #dino1').fadeIn('fast');
                $('#exer2 #dino2').fadeIn('fast');
            });
        }else if(thisModule == 4) {
             $('#exer2 #text').fadeIn('fast');
             $('#exer2 #drawer').animate({
                height: '150px',
                marginTop: '-34px'
             }, 400, function() {
                $('#exer2 #dinoImages').fadeIn('fast');
                $('#exer2 #selectHips').fadeIn('fast');
             });
        }
        
    } else if (goTo == 'exer3') {
        $('#exer3 #text').fadeIn('fast');
        $('#exer3 #drawer').animate({
            height: '150px',
            marginTop: '-34px'
        }, 400, function() {
            $('#exer3 #dinoImages').fadeIn('fast');
            $('#exer3 #selectHips').fadeIn('fast');
        });
    } else if (goTo == 'unlocked') {
        $('#unlocked #text').fadeIn('fast', function() {
            $('#unlocked #lock').fadeIn('fast', function() {
                setTimeout(function() {
                    $('#unlocked #lock').css({
                        backgroundImage: lockImgPath
                    });
                    setTimeout(function() {
                        $('#download').fadeIn(500);
                    }, 500);
                }, 300);
            });
        });
    } else if (goTo == 'identification') {
        $('#identification #text').fadeIn('fast', function() {
            setTimeout(function() {
                $('#identification #slider').fadeIn('fast');
            }, 500);
        });

    } else if (goTo == 'threeDmodel') {
        $('#threeDmodel #console').animate({
            height: consoleHeight
        }, 600, function() {
            $('#threeDmodel #text').fadeIn('fast', function() {
                setTimeout(function() {
                    $('#threeDmodel #hips').fadeIn('fast');
                    $('#threeDmodel #threeDclose').fadeIn('fast');
                }, 200);
            });
        });
    }

}

function dropCorrect(thisItem, answer) {
    console.log('Item: ', thisItem);
    console.log('Answer: ' + answer);
    thisItem
        .addClass("drop-correct")
        .html(answer)
        .css({
            boxShadow: "0px 0px 25px #FFF3C2"
        });

    setTimeout(function() {
        thisItem.css({
            boxShadow: 'none'
        });
    }, 500);
    checkCorrect();
}

//Function that tracks correct answers mainly for checking if all exercises are complete
function checkCorrect() {

    $(".customAlert").hide('drop', { direction: "up" }, function(){ 
        isAlertOut = false; 
    });

    if(thisModule == 1){
        if ($('#exer1 .drop-correct').length == 4) {
            exerCorrect[0] = true;
            $("#exer1 #text h4").html('Correct!');
			$("#exer1 #text p").html('Want to practice some more? <span class="exerReset">Click here</span> to reset this exercise.');
			$("#leftnav a.exer1").addClass('correct');
        }

        if ($('#exer2 .drop-correct').length == 3) {
            exerCorrect[1] = true;
            $("#exer2 #text h4").html('Correct!');
			$("#exer2 #text p").html('Want to practice some more? <span class="exerReset">Click here</span> to reset this exercise.');
			$("#leftnav a.exer2").addClass('correct');
        }
        if (exerCorrect[2][0] && exerCorrect[2][1] && exerCorrect[2][2]) {
            $("#exer3 #text h4").html('Correct!');
            $("#exer3 #text p").html('Want to practice some more? <span class="exerReset">Click here</span> to reset this exercise.');
			$("#leftnav a.exer3").addClass('correct');
        }
        if (exerCorrect[0] && exerCorrect[1] && exerCorrect[2].indexOf(0) == -1) {
            $('.locked').removeAttr('title');
            $('.locked').removeClass('locked');
            /*setTimeout(function() {
                toSection('unlocked');
            }, 300); /* Stops the unlocked screen from transitioning to the exer2 again if at 4000...somehow */
        }
    }else if(thisModule == 2 || thisModule == 3){
        if ($('#exer1 .success').length == 2) {
            exerCorrect[0] = true;
            $("#exer1 #text h4").html('Correct!');
			$("#exer1 #text p").html('Want to practice some more? <span class="exerReset">Click here</span> to reset this exercise.');
			$("#leftnav a.exer1").addClass('correct');
        }
		if ($('#exer2 .success').length == 2) {
            $("#exer2 #text h4").html('Correct!');
			$("#exer2 #text p").html('Want to practice some more? <span class="exerReset">Click here</span> to reset this exercise.');
			$("#leftnav a.exer2").addClass('correct');
        }

        if (exerCorrect[0] == true && exerCorrect[1][0] && exerCorrect[1][1]) {
            $('.locked').removeAttr('title');
            $('.locked').removeClass('locked');
            /*setTimeout(function() {
                toSection('unlocked');
            }, 300); /* Stops the unlocked screen from transitioning to the exer2 again if at 4000...somehow */
        }
    } else {//if(thisModule == 4){ unecessary check since this is the only other module at this time.
        if ($('#exer1 .success').length == 3) {
            $("#exer1 #text h4").html('Correct!');
			$("#exer1 #text p").html('Want to practice some more? <span class="exerReset">Click here</span> to reset this exercise.');
			$("#leftnav a.exer1").addClass('correct');
        }
		if ($('#exer2 .success').length == 2) {
            $("#exer2 #text h4").html('Correct!');
			$("#exer2 #text p").html('Want to practice some more? <span class="exerReset">Click here</span> to reset this exercise.');
			$("#leftnav a.exer2").addClass('correct');
        }


        //if array does not include a 0, all exers are correctly answered
        if (exerCorrect[0].indexOf(0) == -1 && exerCorrect[1].indexOf(0) == -1) {
            $('.locked').removeAttr('title');
            $('.locked').removeClass('locked');
            /*setTimeout(function () {
                toSection('unlocked');
            }, 300); /* Stops the unlocked screen from transitioning to the exer2 again if at 4000...somehow */
        }
    }
    console.log(exerCorrect);
}


//If passed non-null data, this function takes in exer name, and an array of correct answers. When a correct option is selected, the success class is applied.
function clickInteraction(exerInputData){
    if(exerInputData){
        $('#' + exerInputData[0] + ' div:nth-child(1) div div').each(function(i){
            $(this).on('click', function(event) {
                var id = $(this).attr('id');
                if (exerInputData[1].indexOf(id + "*") != -1) {//id appeneded with star (* denoting correct answer) exists
                    $(this).addClass("success");
                    checkCorrect();
                } else {//Isn't appened with star, so it is an incorrect id
                    var index = exerInputData[1].indexOf(id);
                    displayAlert(exerInputData[2][index]);
                }
            });
        });
    }
}

//Resets current exercise. Should reset 
function exerReset(context){
    var parent = context.parent().parent().parent().parent().attr('id');
    console.log(parent);

    //if forest, it's dragging an image, else it's options which is dragging words
    if($('#' + parent + ' div:nth-child(1)').attr('id') == 'forest' || $('#' + parent + ' div:nth-child(1)').attr('id') == 'forest-raised'){
        $('#' + parent + ' div:nth-child(1) div div').each(function(){
            $(this).removeClass("success");
        });

    }else if($('#' + parent + ' div:nth-child(1)').attr('id') == 'options'){
        if($('#' + parent + ' div:nth-child(1) div').attr('id') == 'section1'){
            $('#' + parent + ' div:nth-child(1) div div').each(function(){
                if($(this).attr('id')){
                    $(this).removeClass("drop-correct");
                    $(this).html("");
                }
            });
        }else{
            $('#' + parent + ' div:nth-child(1) div').each(function(){
                if($(this).attr('id')){
                    $(this).removeClass("drop-correct");
                    $(this).html("");
                }
            });
        }
        

    }else{
        $('#' + parent + ' div:nth-child(1) div').each(function(){
            $(this).removeClass("success");
        });
    }

    //check to see if array or not. If so, reset. Else set false.
    if(exerCorrect[parent.charAt(4)] instanceof Array){
        exerCorrect[parent.charAt(4)] = new Array();
    }else{
        exerCorrect[parent.charAt(4)] = false;
    }

    $("#leftnav a." + parent).removeClass('correct');
    checkCorrect();
}

var timeout;
var isAlertOut = false;
//Displays a div to alert the user about whatever. Accepts a message to be displayed.
function displayAlert(message) {
    $('.customAlert').html(message);
    if(isAlertOut) {
        //if timeout, clear it before starting new timeout
        if(timeout){
            clearTimeout(timeout);
        }
    } else {

        isAlertOut = true;

        //display
        $(".customAlert").show('drop', { direction: "up" });

    }
    //For every 20 characters, add 200ms
    var msgTime = 2000 + ((message.length / 20) * 500);
    timeout = setTimeout(function () {
        $(".customAlert").hide('drop', { direction: "up" }, function(){ 
            isAlertOut = false; 
        });
    }, msgTime);
}

    // Start listeners for interactions
    $(function() {
        var videoPlaylist = new Array();
        for (i=1; i<=videoPath.length; i++) {
            videoPlaylist[i] = {
                0: {
                    src: videoPath[i],
                    type: 'video/mp4'
                },
                cuepoints: subs[thisModule][i]
            };
        }

        // Video Player initialization
        projekktor('#player_a', {
            title: "Module 1.1",
            //debug: true,
            poster: 'video/poster.png',
            playerFlashMP4: 'projekktor/swf/StrobeMediaPlayback/StrobeMediaPlayback.swf',
            playerFlashMP3: 'projekktor/swf/StrobeMediaPlayback/StrobeMediaPlayback.swf',
            ratio: 16 / 9,
            plugin_controlbar: {
                showCuePoints: true
            },
            controls: true,
            playlist: videoPlaylist
        });


        imageResize();
        clickInteraction(exerInt);

        var options = {
            $DragOrientation: 3, //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $DisplayPieces is greater than 1, or parking position is not 0)
            $ArrowNavigatorOptions: { //[Optional] Options to specify and enable arrow navigator or not
                $Class: $JssorArrowNavigator$, //[Requried] Class to create arrow navigator instance
                $ChanceToShow: 2, //[Required] 0 Never, 1 Mouse Over, 2 Always
                $AutoCenter: 0, //[Optional] Auto center arrows in parent container, 0 No, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
                $Steps: 1 //[Optional] Steps to go for each navigation request, default value is 1
            }
        };

        if (slides > 0)
            {
                var jssor_slider1 = new $JssorSlider$("slider", options);
            }

        //Begin interactive fade pattern
        startHipFade();


        // Subnavigation interactions
        $('#subnav').on('click', 'a', function(event) {
            event.preventDefault();
            var goTo = $(this).attr('href');
            if (!$(this).hasClass('locked')) {
                if (goTo == 'video') {
                    var startAt = $(this).attr('zone') - 1;
                    toSection(goTo, startAt);
                } else {
                    toSection(goTo);
                }
            }
        });

        // Video console interactions
        $('#content').on('click', '#video_close', function() {
            toSection('exhibit');
        });

        $('#content').on('click', '#exer1 .next', function() {
            toSection('exer2');
        });
        $('#content').on('click', '#exer2 .next', function() {
            if(thisModule == 1) {
                toSection('video', 1);
            } else {
                toSection('threeDmodel');
            }
        });
		$('#content').on('click', '#exer3 .next', function() {
            toSection('identification');
        });
		$('#content').on('click', '#identification .next', function() {
            toSection('threeDmodel');
        });
		$('#content').on('click', '#unlocked .next', function() {
            toSection('identification');
        });
		$('#content').on('click', '#threeDmodel .next', function() {
            if(!$(this).hasClass('locked')) {
                toSection('unlocked');
            }
        });
        $('#content').on('click', '#exer1 .rewatch', function() {
            toSection('video', 0);
        });
        $('#content').on('click', '#exer2 .rewatch', function() {
            toSection('exer1');
        });
        $('#content').on('click', '#exer3 .rewatch', function() {
            toSection('video', 1);
        });
		$('#content').on('click', '#identification .rewatch', function() {
            toSection('exer3');
        });
		$('#content').on('click', '#threeDmodel .rewatch', function() {
            if(thisModule == 1) {
                toSection('identification');
            } else {
                toSection('exer2');
            }
        });

        $('#content').on('click', '.skip', function() {
            console.log($('#subnav a.active').attr('zone'));
            if ($('#subnav a.active').attr('zone') == '1') {
                    toSection('exer1');
            } else if ($('#subnav a.active').attr('zone') == '2') {
                toSection('exer3');
            }
        });

        $('#content').on('click', '.exerReset', function(){
            exerReset($(this));
        });

       // Exercise interactions
        $('#content').on('click', '.close-exer', function() {
            var thisExer = $(this).parent().parent().parent().attr('id').charAt('4');

            if(thisModule == 1){
                if(thisExer == 1 || thisExer == 2){
                    $('#exer2 #options').fadeOut('fast');
                    $('#exer2 #text').fadeOut('fast');
                    $('#exer2 .selectWords').fadeOut('fast', function() {
                        $('#drawer').animate({
                            height: '0px',
                            marginTop: '115px'
                        }, 300, function() {
                            toSection('exhibit');
                        });
                    });
                }else if(thisExer == 3){
                    $('#exer3 #dinoImages').fadeOut('fast');
                    $('#exer3 #selectHips').fadeOut('fast');
                    $('#exer3 #text').fadeOut('fast', function() {
                        $('#drawer').animate({
                            height: '0px',
                            marginTop: '115px'
                        }, 300, function() {
                            toSection('exhibit');
                        });
                    });
                } else if ($(this).parent().parent().parent().attr('id') == "identification") {
                    $("#slider").fadeOut('fast');
                    $("#identification #console #text").fadeOut('fast', function () {
                        $("#identification").fadeOut('fast');
                        toSection('exhibit');
                    });

                }
            }
            if(thisModule == 2 || thisModule == 3){
                if(thisExer == 1){
                    $('#exer1 #text').fadeOut('fast');
                    $('#exer1 #dinoImages').fadeOut(500, function() {
                        toSection('exhibit');
                    });
                }else if(thisExer == 2){
                    $('#exer2 #text').fadeOut('fast');
                    $('#exer2 #dino1').fadeOut(500);
                    $('#exer2 #dino2').fadeOut(500, function() {
                        $('#exer2 #table').fadeOut(200, function() {
                            toSection('exhibit');
                        });
                    });
                }
            } 
            if(thisModule == 4){
                if(thisExer == 1){
                    $('#exer1 #dinoImages').fadeOut('fast');
                    $('#exer1 #selectWords').fadeOut('fast');
                    $('#exer1 #text').fadeOut('fast', function() {
                        $('#drawer').animate({
                            height: '0px',
                            marginTop: '115px'
                        }, 300, function() {
                            toSection('exhibit'); 
                        });
                    });
                }else if(thisExer == 2) {
                    $('#exer2 #dinoImages').fadeOut('fast');
                    $('#exer2 #selectHips').fadeOut('fast');
                    $('#exer2 #text').fadeOut('fast', function() {
                        $('#drawer').animate({
                            height: '0px',
                            marginTop: '115px'
                        }, 300, function() {
                            toSection('exhibit');
                        });
                    });
                }
            }
        });

        // Unlock interactions
        $('#content').on('click', '#unlocked_close', function() {
            toSection('exhibit');
        });


        //Identification interactions
        $('#content').on('click', '#identify_close', function() {
            toSection('exhibit');
        });


        // 3D Explorer interations
        $('#content').on('click', '#threeDclose', function() {
            toSection('exhibit');
        });



        // Zone interactions

        for(i=1;i<=zones;i++) {
            $('#content, #subnav_content').on('mouseenter mouseleave click', '#zone'+i+', a.zone'+i, function(event) {

                clearHipIntervals();
                
                var currentZone = $(this).attr('zone');

                if (event.type == 'mouseenter') {
                    for(j=1;j<=zones;j++) {
                        if(j == currentZone) {
                            $('#zone'+j).clearQueue().stop().animate({
                                opacity: 1
                            }, 300);
                            $('#zone'+j+'Hover').clearQueue().delay(210).fadeIn(0);
                        } else {
                            $('#zone'+j).clearQueue().stop().animate({
                                opacity: 0
                            }, 100);
                            $('#zone'+j+'Hover').clearQueue().fadeOut('fast');
                        }
                    }
                } else {
                    $('#zone'+currentZone+'Hover').clearQueue().fadeOut('fast');
                    if (event.type != 'click') {
                        $('#zone'+currentZone).animate({
                            opacity: 0
                        }, 300);
                        startHipFade();
                    } else {
                        console.log('This video: ',currentZone - 1);
                        toSection('video', currentZone - 1);
                    }
                }
            });

        }

        // Footer interactions
        $('#footer').on('click', '#show', function() {
            if ($(this).hasClass('up')) {
                $(this).parent().children('#more_info').fadeOut('fast', function() {
                    $(this).parent().animate({
                        height: '14px'
                    }, 'fast', function() {
                        $(this).children('#show').html('more');
                        $(this).children('#show').removeClass('up');
                    });
                });
            } else {
                $(this).parent().animate({
                    height: '100px'
                }, 'fast', function() {
                    $(this).children('#show').html('less');
                    $(this).children('#show').addClass('up');
                    $(this).children('#more_info').fadeIn('fast');
                });
            }
        });

        


        //Register draggable listeners.
        if(thisModule == 1){
            $("#word1, #word2, #word3, #word4, #hips1, #hips2").draggable(draggableOptions);
        } else if(thisModule == 2){
            $("#meat-left, #meat-right, #leaf-left, #leaf-right").draggable(draggableOptions);
        } else if(thisModule == 3) {
            $("#meat-left, #meat-right, #leaf-left, #leaf-right").draggable(draggableOptions);
        } else if(thisModule == 4) {
            $("#exer1 #word1, #exer1 #word2, #exer1 #word3, #exer2 #word1, #exer2 #word2").draggable(draggableOptions);
        }

        //Create and register droppable listeners.
        for (var i = 0; i < droppableOptions.length ; i++) {
            $(droppableOptions[i][0]).droppable(droppableOptions[i][1]);
        }
        
        
    });