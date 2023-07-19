let shop;

async function getProducts() {
    try {
        let result = await fetch('./shops.json');
        let data = await result.json();

        //destructuring
       
       shop = data.shops;
       console.log(shop[0]);
    }
    catch (error) {
        console.log(error);
    }
}
getProducts();
// console.log(shop[0]);
// shop.forEach(element => {
//     console.log(element);
// });