window.addEventListener('DOMContentLoaded', function(){ //call function when window is loaded

	attachEvents();
	
	// var sideNav = document.getElementById("mySideNav");
	// addLinks(sideNav);

	// // addLinks($("#mySideNav"));

	var navOffset = $('nav').offset().top; //-distance between navbar and top

		//console.log(navOffset);

		$(".projectOne").mouseenter(function(){
			projectShow($(".projectOneTitle"),$(".projectOnePic"),$(".projectOneIntro"));
			console.log("mouseenter");
		})

		$(".projectOne").mouseleave(function(){
			projectClose($(".projectOneTitle"),$(".projectOnePic"),$(".projectOneIntro"));
			console.log("mouseleave");
		})


		$(window).scroll(function(){
			var scrollPos = $(window).scrollTop();

			// console.log(scrollPos);


			// var stickNav = $("nav");
			// stickyMenu(stickNav);

			var stickMenu = $(".menubar");//-make manubar sticks
			stickyMenu(stickMenu);


			function stickyMenu(stick){
				if(scrollPos>= navOffset){
						stick.addClass("fixed");
					}
				
				else{
					stick.removeClass("fixed");
				}

			}	

		//THis is for change the color of the links in my navigation.
		var links = [$(".link1"),$(".link2"),$(".link3")];

		var linkOne = $("#linkOne").offset().top-30;
		var linkTwo = $("#linkTwo").offset().top-30;
		var linkThree = $("#linkThree").offset().top-30;



		//First Section
			if(scrollPos >= linkOne){
				links[0].addClass('bold');
				$(".t1").addClass('appear');
			}else{
				links[0].removeClass('bold');
				$(".t1").removeClass('appear');
			}

		//Second Section
			if(scrollPos >= linkTwo){
				links[0].removeClass('bold');
				links[1].addClass('bold');

				$(".t2").addClass('appear');
				
			}else{
				links[1].removeClass('bold');

				$(".t2").removeClass('appear');
			}

		//Thrind Section
			if(scrollPos >= linkThree){
				links[1].removeClass('bold');
				links[2].addClass('bold');

				$(".t3").addClass('appear');
				
			}else{
				links[2].removeClass('bold');

				$(".t3").removeClass('appear');
			}



		


		});




 });


  	function attachEvents(){

  		$('a').click(function() { //???
	

	     	var myTarget = $(this.hash);
	     	myTarget = myTarget.length && myTarget
	      			
	        var targetOffset = myTarget.offset().top;
	       	$('html,body').animate({scrollTop: targetOffset}, 1000);
	
	     });

  	}




	// var mySideNav = document.getElementById("mySideNav");

function openNav(){
	// mySideNav.style.width="30vw";
	
	$("#mySideNav").addClass("openMenu");

}

function closeNav(){
	// mySideNav.style.width="0";
	$("#mySideNav").removeClass("openMenu");
}



//document.addEventListener('DOMContentLoaded', function(){ //since we don't have anything to triger the action of pushing all the links
														  //inside the HTML, we need to use this statement
														  //the meaning of this statement is when the you load the DOM, load as well the 
														  //function that contains all the information inside...

//There are two ways to do this. THis is the longer, but easier to understand

// 	var topNav = document.getElementById("myTopNav"); 
// 	topNav.innerHTML += "<a href = 'index.html'>HOME</a>"; 
// 	topNav.innerHTML += "<a href = 'about.html'>ABOUT</a>";
// 	topNav.innerHTML += "<a href = 'work.html'>WORK</a>";
// 	topNav.innerHTML += "<a href = 'more.html'>MORE</a>"; 
// 	topNav.innerHTML += "<a href = 'contact.html'>CONTACT</a>";

// 	var sideNav = document.getElementById("mySideNav");
// 	sideNav.innerHTML += "<a href = ''>LINK 1</a>"; 
// 	sideNav.innerHTML += "<a href = ''>LINK 2</a>";
// 	sideNav.innerHTML += "<a href = ''>LINK 3</a>";   

// });


//This is and optimized version 
function addLinks(parent){ //here I'm using an argument for my function
							// so I can astore all the information without repeating it

	parent.innerHTML += "<a href = '#home'>HOME</a>";
	parent.innerHTML += "<a href = '#linkOne'>LINK 1</a>"; 
	parent.innerHTML += "<a href = '#linkTwo'>LINK 2</a>";
	parent.innerHTML += "<a href = '#linkThree'>LINK 3</a>";

}

function projectShow(title, pic, text){
	title.addClass("titleBack");
	console.log(title);
	pic.addClass("picFront");
	text.addClass("textFront");
	// console.log(css('#projectOneTitle','z-index'));
}

function projectClose(title, pic, text){
	title.addClass("titleFront");
	pic.addClass("picBack");
	text.addClass("textBack");
}

function css(el, property) {
	return window.getComputedStyle(el)[property];
  }