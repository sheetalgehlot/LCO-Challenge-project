$(document).ready(function(){
    $(".hamburger").click(function(){
        $(".background-basketball").slideToggle();
        $(".menu-img").slideToggle();
        $("ul").slideToggle();
        $(".btn").fadeToggle(500);
        $(".play-href").fadeToggle(500);
    });   
});
