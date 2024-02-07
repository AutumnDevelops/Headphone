$(document).ready(function(){
    let cart_items = [];

    function update_cart(){
        let total = 0;
        let cart_HTML = "";

        for(const item of cart_items){
            cart_HTML +=
            `
            <li class="menu_item">
                <div class="img_area">
                    <img src="${item.img_src}" class="menu_img">
                </div>
                <div class="menu_list">
                    <h4 class="menu_product">${item.product}</h4>
                    <h5>$<span class="menu_price">${item.price}</span></h5>
                </div>

                <div class="remove_item">
                    <i class="fa-solid fa-x"></i>
                </div>
            </li>
            `;
            total += parseFloat(item.price);
        };
        $(".menu_area").html(cart_HTML);
        $(".cart_total").text(total.toFixed(2));
        $(".menu_container").removeClass("display_none");
    };

    $(".section").on("click", ".add", function() {
        const menu_box = $(this).closest(".menu_box");
        const product = menu_box.find(".product").text();
        const price = menu_box.find(".price").text();
        const img_src = menu_box.find(".img").attr("src");
    
        cart_items.push({ product, price, img_src });
        update_cart();
      });

    $(".menu_area").on("click", ".remove_item", function(){
        const index = $(this).closest(".cart_item").index();
        cart_items.splice(index, 1);
        update_cart();
    })

    $(".clear_button").click(function(){
        cart_items = [];
        update_cart();
    })

    $(".ok_button").click(function(){
        alert("Checkout Complete!");
        cart_items = [];
        update_cart();
    })
});


