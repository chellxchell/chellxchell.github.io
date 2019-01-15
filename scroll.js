var myFullpage = new fullpage('#fullpage', {
    anchors: ['landing', 'about', 'projects', 'design', 'contact'],
    sectionsColor: ['#f1f1f1','white', '#f1f1f1', 'white', '#f1f1f1'],
    css3: true,
    scrollOverflow: true,
    menu: '#header',
    responsiveHeight: 500, responsiveWidth: 500,
        afterResponsive: function(isResponsive){
        },
});

$(document).ready(function(){
    //fade page in on load------------------------------------------
    $('body').css('display', 'none');
    $('body').fadeIn(1000);
});

function myFunction() {
    var x = document.getElementById("header");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}
