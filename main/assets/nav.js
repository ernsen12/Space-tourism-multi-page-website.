//mobile nav toggle
const navIcon = $(".nav_icon");

navIcon.on("click", () => {
    $(".nav_icon").toggleClass("hidden");
    $(".nav_list").toggleClass("hidden");
});

const navActive = $(".active_nav");
const navLink = $(".nav_link");
const navAnchor = $(".nav_text");

navAnchor.each(function(){
    if ($(this).prop('href') == window.location.href) {
        navActive.removeClass( "active_nav");
        $(this).parents('li').addClass('active_nav');
    }
});

