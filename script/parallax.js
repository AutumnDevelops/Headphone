$(".pick").click(function(){
    let category = $(this).text().toLowerCase();

    if(category === "show all"){
        $(".menu_box").show();
    }else{
        $(".menu_box").hide();
        $("." + category).show();
    }

});

const original_order = $(".section .menu_box").toArray();

$(".sort_select").on("change", function() {
    let sort = $(this).val();
    let products = $(".menu_box").toArray();

    if (sort === "reset") {
    $(".section").empty().append(original_order);
    } else {
      products.sort(function(a, b) {
        if (sort === "name") {
          let nameA = $(a).find(".product").text().toUpperCase();
          let nameB = $(b).find(".product").text().toUpperCase();
          return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
        } else if (sort === "price") {
          let priceA = parseFloat($(a).find(".price").text());
          let priceB = parseFloat($(b).find(".price").text());
          return priceA - priceB;
        }
      });

      $(".section").empty().append(products);
    }
    });


