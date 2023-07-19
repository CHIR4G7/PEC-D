// let shop;

async function getProducts() {
    try {
        let result = await fetch('./shops.json/');
        let data = await result.json();

        //destructuring
       
       let shop = data.shops;
       return shop;
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