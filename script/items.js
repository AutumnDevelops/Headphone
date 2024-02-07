   $.ajax({
        url: 'json/store.json',
        dataType: 'json',
        success: function (data) {
            display_products(data.products);
        }
    })

    function display_products(products){
        let section = $(".section");
        
        products.forEach(function (product) {
            var HTML = `
                <div class="menu_box  ${product.class}">
                    <div class="top_box">
                        <img src="img/${product.img}" class="img">
                        <div class="star_side">
                            <i class="fa-regular fa-star empty_star"></i>
                            <i class="fa-solid fa-star full_star"></i>
                            <i class="fa-solid fa-star full_star"></i>
                            <i class="fa-solid fa-star full_star"></i>
                            <i class="fa-solid fa-star full_star"></i>
                        </div>
                    </div>
                    <div class="bottom_box">
                        <div class="right_bottom">
                            <span class="product">${product.name}</span>
                            <span>$<span class="price">${product.price}</span></span>
                        </div>
                        <button class="add">Add</button>
                    </div>
                </div>
            `;

            section.append(HTML);
        })
    }
