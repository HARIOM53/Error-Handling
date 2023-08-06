function filterProduct(products){
    return function(category){
        return products.filter(function
            (product){
                return product.category  === category;
            });
    };
}

// Example

var  products =  [
    {name: "Shirt", category: "Clothing"},
    {name: "Pants", category: "Clothing"},
    {name: "Hat", category: "Accessories"},
    {name: "Sunglasses", category: "Accessories"},
];

var clothingProduct = filterProduct(products)("Clothing");
console.log(clothingProduct);