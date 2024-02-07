$(document).ready(function(){
    function add_display(){
        $(".pop_up").removeClass("display_none");
    };

    $(".close_pop_up, .ten_percent").click(function(){
        $(".pop_up").toggleClass("display_none");
    });


    $(".open, .close_container").click(function(){
        $(".menu_container").toggleClass("display_none");
    })

    setTimeout(add_display, 4000);


    $(".toggle_light").click(function(){
        $(".bottom_box button, .bottom_box .right_bottom, .top_box .star_side, .menu_box, .ten_percent, body main ul li, .sorting_section .sort_select, body .sorting_section, body main ul, body header div, body header, .menu_container .box_area .button_box button, .menu_container .box_area .box_total, body nav .menu_container ul li, body nav .menu_container ul, body nav .menu_container .close_container, .menu_containe, body nav ul li, body nav, body .pop_up .pop .unlock button, body .pop_up .pop .unlock .email,  .pop_up .pop .close_pop_up, body .pop_up .pop, body, body nav .menu_container, .menu_item, .sorting_section, body header,   .img_pop").toggleClass("light_mode");
    })
});