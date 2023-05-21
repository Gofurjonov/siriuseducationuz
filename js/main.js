(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        items: 1
    });
    
})(jQuery);

const Ismim =document.querySelector('#nameuz');
const Numberuz = document.querySelector('#number');
const Xabar = document.querySelector('#message');
function sendTelegram(){
    let text="<strong>Ismi: </strong>"+Ismim.value+"%0A<strong>Telefon: </strong>"+Numberuz.value+"%0A<strong>Xabar: </strong>"+Xabar.value;
      console.log(text);
    let theUrl ="https://api.telegram.org/bot6243475741:AAF0b8yfgB6yuxjtAjRyp_gbjpnSOi_f61E/sendMessage?chat_id=673381009&parse_mode=html&text=" + text;
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.open("GET", theUrl, false);
      xmlHttp.send( null );
    Ismi.value='';
    Email.value='';
    Xabar.value='';
    subject.value='';
  };
  const Ismi =document.querySelector('#nameuz');
const Numbere = document.querySelector('#number');
const Xabarlar = document.querySelector('#message');
function sendBot(){
    let text="<strong>Ismi: </strong>"+Ismi.value+"%0A<strong>Telefon: </strong>"+Numbere.value;
      console.log(text);
    let theUrl ="https://api.telegram.org/bot6243475741:AAF0b8yfgB6yuxjtAjRyp_gbjpnSOi_f61E/sendMessage?chat_id=673381009&parse_mode=html&text=" + text;
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.open("GET", theUrl, false);
      xmlHttp.send( null );
    Ismi.value='';
    Numbere.value='';
};
const Numberu = document.querySelector('#numberu');
function sendBota(){
    let text="%0A<strong>Telefon: </strong>"+Numberu.value;
      console.log(text);
    let theUrl ="https://api.telegram.org/bot6243475741:AAF0b8yfgB6yuxjtAjRyp_gbjpnSOi_f61E/sendMessage?chat_id=673381009&parse_mode=html&text=" + text;
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.open("GET", theUrl, false);
      xmlHttp.send( null );
    Numberu.value='';
};
