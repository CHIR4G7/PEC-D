let shop;


try {
    let result = await fetch('./shops.json');
    let data = await result.json();


}
catch (error) {
    console.log(error);
}


getProducts();
console.log(shop.shops);
