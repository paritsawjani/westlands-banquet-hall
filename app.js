const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const homeMenu = document.querySelector('#home-page');
  const aboutMenu = document.querySelector('#about-page');
  const servicesMenu = document.querySelector('#services-page');
  let scrollPos = window.scrollY;
  // console.log(scrollPos);

  // adds 'highlight' class to my menu items
  if (window.innerWidth > 960 && scrollPos < 600) {
    homeMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    aboutMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    servicesMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2345) {
    servicesMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  }

  if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);


var v = $("#booking-form").validate({
  rules: {
    bf_totalGuests: {
      required: true
    },
    bf_date: {
      required: true
    },
    bf_time: {
      required: true
    },
    bf_hours: {
      required: true
    },
    bf_fullname: {
      required: true
    },
    bf_email: {
      required: true,
      email: true
    }

  },
  errorElement: "span",
  errorClass: "error",
  errorPlacement: function(error, element) {
        error.insertBefore(element); 
  }
});

$(".next-btn1").click(function() {
if (v.form()) {
  $(".tab-pane").hide();
  $("#step2").fadeIn(1000);
  $('.progressbar-dots').removeClass('active');
  $('.progressbar-dots:nth-child(2)').addClass('active');
}
});
$(".next-btn2").click(function() {
if (v.form()) {
  $(".tab-pane").hide();
  $("#step3").fadeIn(1000);
  $('.progressbar-dots').removeClass('active');
  $('.progressbar-dots:nth-child(3)').addClass('active');
}
});

$(".submit-btn").click(function() {
if (v.form()) {
$("#loader").show();
 setTimeout(function(){
   $("#booking-form").html("<h2>Your message was sent successfully. Thanks! We'll be in touch as soon as we can!</h2>");
 }, 1000);
return false;
}
});