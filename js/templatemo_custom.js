jQuery(document).ready(function($) {

	$(".main-menu a").click(function(){
		var id =  $(this).attr('class');
		id = id.split('-');
		$('a.active').removeClass('active');
    	$(this).addClass('active');
		$("#menu-container .content").slideUp('slow');
		$("#menu-container #menu-"+id[1]).slideDown('slow');
		$("#menu-container .homepage").slideUp('slow');
		return false;
	});


	$(".main-menu a.homebutton").click(function(){
		$("#menu-container .content").slideUp('slow');
		$("#menu-container .homepage").slideDown('slow');
		return false;
	});

	$(".main-menu a.aboutbutton").click(function(){
		$("#menu-container .content").slideUp('slow');
		$("#menu-container .about-section").slideDown('slow');
		return false;
	});

	$(".main-menu a.experiencebutton").click(function(){
		$("#menu-container .content").slideUp('slow');
		$("#menu-container .experience-section").slideDown('slow');
		return false;
	});

	$(".main-menu a.projectbutton").click(function(){
		$("#menu-container .content").slideUp('slow');
		$("#menu-container .project-section").slideDown('slow');
		return false;
	});

	$(".main-menu a.schoolprojectsbutton").click(function(){
		$("#menu-container .content").slideUp('slow');
		$("#menu-container .schoolprojects-section").slideDown('slow');
		return false;
	});

	$(".main-menu a.personalprojectsbutton").click(function(){
		$("#menu-container .content").slideUp('slow');
		$("#menu-container .personalprojects-section").slideDown('slow');
		return false;
	});

	$(".main-menu a.blogbutton").click(function(){
		$("#menu-container .content").slideUp('slow');
		$("#menu-container .blog-section").slideDown('slow');
		return false;
	});

	$(".main-menu a.contactbutton").click(function(){
		console.log("clicked contact!");
		$("#menu-container .content").fadeOut();
		$("#menu-container .contact-section").slideDown('slow');
		loadScript();
		return false;
	});

	$("#project-1 div.project-card").click(function(){
		var modal = document.getElementById('modal-1');
		modal.style.display="block";
		loadScript();
		return false;
	});

	$("#modal-1 span.close").click(function(){
		var modal = document.getElementById('modal-1');
		modal.style.display="none";
		loadScript();
		return false;
	})

	$("#project-2 div.project-card").click(function(){
		var modal = document.getElementById('modal-2');
		modal.style.display="block";
		loadScript();
		return false;
	});

	$("#modal-2 span.close").click(function(){
		var modal = document.getElementById('modal-2');
		modal.style.display="none";
		loadScript();
		return false;
	})

	$("#project-3 div.project-card").click(function(){
		var modal = document.getElementById('modal-3');
		modal.style.display="block";
		loadScript();
		return false;
	});

	$("#modal-3 span.close").click(function(){
		var modal = document.getElementById('modal-3');
		modal.style.display="none";
		loadScript();
		return false;
	})
	$("#project-4 div.project-card").click(function(){
		var modal = document.getElementById('modal-4');
		modal.style.display="block";
		loadScript();
		return false;
	});

	$("#modal-4 span.close").click(function(){
		var modal = document.getElementById('modal-4');
		modal.style.display="none";
		loadScript();
		return false;
	})

	$("#project-5 div.project-card").click(function(){
		var modal = document.getElementById('modal-5');
		modal.style.display="block";
		loadScript();
		return false;
	});

	$("#modal-5 span.close").click(function(){
		var modal = document.getElementById('modal-5');
		modal.style.display="none";
		loadScript();
		return false;
	})

	$("#project-6 div.project-card").click(function(){
		var modal = document.getElementById('modal-6');
		modal.style.display="block";
		loadScript();
		return false;
	});

	$("#modal-6 span.close").click(function(){
		var modal = document.getElementById('modal-6');
		modal.style.display="none";
		loadScript();
		return false;
	})

	$("#project-7 div.project-card").click(function(){
		var modal = document.getElementById('modal-7');
		modal.style.display="block";
		loadScript();
		return false;
	});

	$("#modal-7 span.close").click(function(){
		var modal = document.getElementById('modal-7');
		modal.style.display="none";
		loadScript();
		return false;
	})

	$("#project-8 div.project-card").click(function(){
		var modal = document.getElementById('modal-8');
		modal.style.display="block";
		loadScript();
		return false;
	});

	$("#modal-8 span.close").click(function(){
		var modal = document.getElementById('modal-8');
		modal.style.display="none";
		loadScript();
		return false;
	})

	$('a.toggle-nav').click(function(){
		$('.menu-responsive').slideToggle();
	});

	$('.menu-responsive a').click(function() {
		$('.menu-responsive').slideToggle().hide();
	});




});


function loadScript() {
	  var script = document.createElement('script');
	  script.type = 'text/javascript';
	  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
	      'callback=initialize';
	  document.body.appendChild(script);
	}

	function initialize() {
	    var mapOptions = {
	      zoom: 15,
	      center: new google.maps.LatLng(16.8496189,96.1288854)
	    };
	    var map = new google.maps.Map(document.getElementById('map_canvas'),  mapOptions);
	}
