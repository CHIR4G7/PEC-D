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
let shops = [];
getProducts().then(data=>{
    shops.push(data);
})