$(".open-btn").click(() => {
    $(".sidebar").animate({marginLeft: "0"});
});
$(".close-btn").click(() => {
    $(".sidebar").animate({marginLeft: "-100%"});
});