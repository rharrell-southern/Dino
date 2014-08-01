//Set system wide variables
var thisDuration = 1000;
var hipInterval;
var hiIsRuning = false;
var exer1Correct = false;
var exer2Correct = false;
var exer3Correct = [0, 0, 0, 0]; /* used to keep track of which dinos have changed in exercise, last digit represents overall completion */
var m2exer1Correct = false;
var m2exer2Correct = [0, 0]; /* used to keep track of which dinos have gotten the right type of food */
var m3exer2Correct = [0, 0];
var consoleHeight = '830px'; /* Controls video player container height; Come back and use this instead to adjust */
var setVideoWidth;
var setVideoHeight;
var lockImgPath;

// Set module variables
var slides;
var zones;
var videoPath = new Array();
var exerInt;



switch(thisModule) {
	case 1:
		zones = 2;
		slides = 10;
        videoPath[1] = 'video/m1.1.mp4';
        videoPath[2] = 'video/m1.2.mp4';
		break;
	case 2:
		zones = 1;
		slides = 0;
        videoPath[1] = 'video/m2.1.mp4';
        exerInt = ['exer1', ['dino3', 'dino4']];

		break;
	case 3:
		zones = 1;
		slides = 0;
        videoPath[1] = 'video/m3.1.mp4';
        exerInt = ['exer1', ['dino1', 'dino3']];
		break;
	case 4:
		zones = 2;
		slides = 0;
        videoPath[1] = 'video/m4.1.mp4';
        videoPath[2] = 'video/m4.2.mp4';
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
			$('slide' + i).html("<img src='images/mod" + thisModule + "/slides/" + i + "-small.png'>");
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
			$('slide' + i).html("<img src='images/mod" + thisModule + "/slides/" + i + ".png'>");
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
    projekktor('player_a').setStop();
    $('#video_captions').html('');
    $('#subnav a').removeClass('active');
    console.log("Removed Active Class!");
    if (goTo == 'exhibit') {
        clearHipIntervals();
        $('div.blackout').fadeOut();
        $('div#subpages').fadeOut(function() {
            $('div#' + goTo).fadeIn();
            startHipFade();
        });
    } else {
        clearHipIntervals();
        $('#exhibit').fadeOut();
        $('div.blackout').fadeIn();
        $('div#subpages').fadeIn();
        $('div#subpages > div').hide(0);
        $('div#' + goTo).show(0);
    }
    if (goTo == 'video') {
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
        $('#subnav a[zone="' + (videoStart+1) + '"]').addClass("active");
    } else {
        $('#subnav a[href="' + goTo + '"]').addClass("active");
    }
    if (goTo == 'exer1') {
        if(thisModule == 1){
            $('#exer1 #text').fadeIn('fast');
            $('#exer1 #pond').animate({
                height: '320px',
                marginTop: '-195px',
                opacity: 1
            }, 300, function() {
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
    }
    if (goTo == 'exer2') {
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
        
    }
	if (goTo == 'exer3') {
        $('#exer3 #text').fadeIn('fast');
        $('#exer3 #drawer').animate({
            height: '150px',
            marginTop: '-34px'
        }, 400, function() {
            $('#exer3 #dinoImages').fadeIn('fast');
            $('#exer3 #selectHips').fadeIn('fast');
        });
    }
    if (goTo == 'unlocked') {
        $('#unlocked #text').fadeIn('fast', function() {
            $('#unlocked #lock').fadeIn('fast', function() {
                setTimeout(function() {
                    $('#unlocked #lock').css({
                        backgroundImage: lockImgPath
                    });
                }, 300);
            });
        });
    }

    if (goTo == 'identification') {
        $('#identification #text').fadeIn('fast', function() {
            setTimeout(function() {
                $('#identification #slider').fadeIn('fast');
            }, 500);
        });

    }
    if (goTo == 'threeDmodel') {
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

function checkCorrect() {
    if(thisModule == 1){
        if ($('#exer1 .drop-correct').length == 4) {
            exer1Correct = true;
            $("#exer1 #text h4").html('Good job!');
            $("#exer1 #text p").html('Have you thought about being a paleontologist?');
        }

        if ($('#exer2 .drop-correct').length == 3) {
            exer2Correct = true;
            $("#exer2 #text h4").html('Good job!');
            $("#exer2 #text p").html('Have you thought about being a paleontologist?');
        }
        if (exer3Correct[0] && exer3Correct[1] && exer3Correct[2]) {
            exer3Correct[3] = 1;
            console.log(exer3Correct);
        }
        if (exer1Correct && exer2Correct && exer3Correct[3]) {
            $('.locked').removeClass('locked');
            setTimeout(function() {
                toSection('unlocked');
            }, 300); /* Stops the unlocked screen from transitioning to the exer2 again if at 4000...somehow */
        }
    }else if(thisModule == 2 || thisModule == 3){
        if ($('#exer1 .success').length == 2) {
            m2exer1Correct = true;
            $("#exer1 #text h4").html('Good job!');
            $("#exer1 #text p").html('Have you thought about being a paleontologist?');
        }

        if (m2exer1Correct == true && m2exer2Correct[0] && m2exer2Correct[1]) {
            $('.locked').removeClass('locked');
            setTimeout(function() {
                toSection('unlocked');
            }, 300); /* Stops the unlocked screen from transitioning to the exer2 again if at 4000...somehow */
        }
    }
}


//If passed non-null data, this function takes in exer name, and an array of correct answers. When a correct option is selected, the success class is applied.
function clickInteraction(exerData){
    if(exerData){
        $('#' + exerData[0] + ' div:nth-child(1) div div').each(function(){
            $(this).on('click', function(event) {
                var id = $(this).attr('id');
                if(exerData[1].indexOf(id) != -1){
                    $(this).addClass("success");
                    checkCorrect();
                }
            });
        });
    }
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
            toSection('video', 1);
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
        $('#content').on('click', '.skip', function() {
			console.log($('#subnav a.active').attr('zone'));
            if ($('#subnav a.active').attr('zone') == '1') {
                    toSection('exer1');
            } else if ($('#subnav a.active').attr('zone') == '2') {
                toSection('exer3');
            }
        });

       // Exercise interactions
        $('#content').on('click', '.close-exer', function() {
            var thisExer = $(this).parent().parent().parent().attr('id').charAt('4');

            if(thisModule == 1){
                if(thisExer == 1){
                    $('#exer1 #text').fadeOut('fast');
                    $('#exer1 #options').fadeOut('fast');
                    $('#exer1 .selectWords').fadeOut('fast', function() {
                        $('#exer1 #pond').animate({
                            height: '0px',
                            marginTop: '0px',
                            opacity: 0
                        }, 300, function() {
                            toSection('exhibit');
                        });
                    });
                }else if(thisExer == 2){
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


        //Drag and drop listeners

        if(thisModule == 1){
            $("#word1, #word2, #word3").draggable({
                revert: true,
                helper: "original",
                cursor: "move",
                zIndex: 450
            });
    		
    		$("#hips1, #hips2").draggable({
    			revert: true,
    			helper: "original",
    			cursor: "move",
    			zIndex:450
    		});

            //Interactive One Options
            $("#exer1 #option1").droppable({
                accept: "#word2",
                hoverClass: "drop-hover",
                drop: function(event, ui) {
                    dropCorrect($(this), 'Lizard');
                }
            });
            $("#exer1 #option2").droppable({
                accept: "#word1",
                hoverClass: "drop-hover",
                drop: function(event, ui) {
                    dropCorrect($(this), 'Hip');
                }
            });
            $("#exer1 #option3").droppable({
                accept: "#word3",
                hoverClass: "drop-hover",
                drop: function(event, ui) {
                    dropCorrect($(this), 'Bird');
                }
            });
            $("#exer1 #option4").droppable({
                accept: "#word1",
                hoverClass: "drop-hover",
                drop: function(event, ui) {
                    dropCorrect($(this), 'Hip');
                }
            });

            // Interactive 2 Options
            $("#exer2 #option1").droppable({
                accept: "#word1",
                hoverClass: "drop-hover",
                drop: function(event, ui) {
                    dropCorrect($(this), 'Illium');
                }
            });
            $("#exer2 #option2").droppable({
                accept: "#word2",
                hoverClass: "drop-hover",
                drop: function(event, ui) {
                    dropCorrect($(this), 'Ishium');
                }
            });
            $("#exer2 #option3").droppable({
                accept: "#word3",
                hoverClass: "drop-hover",
                drop: function(event, ui) {
                    dropCorrect($(this), 'Pubis');
                }
            });
    		
    		// Interactive 3 Options
    		$("#exer3 #dino1").droppable({
    			accept:"#hips1",
    			drop: function (event, ui) {
    				$("#dino1").addClass("success");
    				exer3Correct[0] = 1;
    				console.log(exer3Correct);
    				checkCorrect();
    			}
    		});
    		$("#exer3 #dino2").droppable({
    			accept:"#hips2",
    			drop: function (event, ui) {
    				$("#dino2").addClass("success");
    				exer3Correct[1] = 1;
    				console.log(exer3Correct);
    				checkCorrect();
    			}
    		});
    		$("#exer3 #dino3").droppable({
    			accept:"#hips1",
    			drop: function (event, ui) {
    				$("#dino3").addClass("success");
    				exer3Correct[2] = 1;
    				console.log(exer3Correct);
    				checkCorrect();
    			}
    		});
        } else if(thisModule == 2){

            $("#meat-left, #meat-right, #leaf-left, #leaf-right").draggable({
                revert: true,
                helper: "original",
                cursor: "move",
                zIndex:450
            });

            $("body.module2 #exer2 #dino1").droppable({
                accept:"#leaf-left",
                drop: function (event, ui) {
                    $("body.module2 #exer2 #dino1").addClass("success");
                    m2exer2Correct[0] = 1;
                    console.log(m2exer2Correct);
                    checkCorrect();
                }
            });

            $("body.module2 #exer2 #dino2").droppable({
                accept:"#leaf-right",
                drop: function (event, ui) {
                    $("body.module2 #exer2 #dino2").addClass("success");
                    m2exer2Correct[1] = 1;
                    console.log(m2exer2Correct);
                    checkCorrect();
                }
            });
        } else if(thisModule == 3) {
            $("#meat-left, #meat-right, #leaf-left, #leaf-right").draggable({
                revert: true,
                helper: "original",
                cursor: "move",
                zIndex:450
            });

			$("body.module3 #exer2 #dino1").droppable({
                accept:"#meat-left",
                drop: function (event, ui) {
                    $("body.module3 #exer2 #dino1").addClass("success");
                    m2exer2Correct[0] = 1;
                    console.log(m2exer2Correct);
                    checkCorrect();
                }
            });

            $("body.module3 #exer2 #dino2").droppable({
                accept:"#meat-right",
                drop: function (event, ui) {
                    $("body.module3 #exer2 #dino2").addClass("success");
                    m2exer2Correct[1] = 1;
                    console.log(m2exer2Correct);
                    checkCorrect();
                }
			});
		}
		
		
    });