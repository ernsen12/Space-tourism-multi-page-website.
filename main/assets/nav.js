//mobile nav toggle
const navIcon = $(".nav_icon");

navIcon.on("click", () => {
    $(".nav_icon").toggleClass("hidden");
    $(".nav_list").toggleClass("hidden");
});

const navActive = $(".active_nav");
const navAnchor = $(".nav_text");

function navIndicator(element, index){
    element.each(function(){
        if ($(this).prop('href') == window.location.href){
            navActive.removeClass( "active_nav");
            $(navAnchor[index]).parents('li').addClass('active_nav');
        }
    });
};

navIndicator($(".planet_nav a"), 1);
navIndicator($(".crew_link"), 2);
navIndicator($(".tech_link"), 3);