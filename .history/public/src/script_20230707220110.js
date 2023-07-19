// let shop;

async function getProducts() {
    try {
        let result = await fetch('./shops.json');
        let data = await result.json();

        //destructuring
       
       let shop = data.shops;
       console.log(typeof(shop));
       return shop;
    }
    catch (error) {
        console.log("r");
    }
}
// getProducts();
document.addEventListener("DOMContentLoaded", () => {
    // const ui = new UI();
    // const products = new Products();

    // //setup app;
    // ui.setupAPP();

    //get all Products
    // products.getProducts().then(products => {
    //     console.log(products);
    // }
    // )
    // getProducts().forEach(shop=>
    //     {
    //         console.log(shop);
    //     })
    let entry = Object.entries(getProducts());
    console.log(entry.shop);
    // .then(()=>
    // {
    //     ui.getBagButtons();
    //     ui.cartLogic();
    // });
});

// console.log(shop[0]);
// shop.forEach(element => {
//     console.log(element);
// });