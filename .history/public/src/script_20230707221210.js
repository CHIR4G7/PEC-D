// let shop;

async function getProducts() {
    try {
        let result = await fetch('./shops.json');
        let data = await result.json();

        //destructuring
        let ids = data.shops.map(shop=>shop.id);
        let names = data.shops.map(shop=>shop.name);

       return {ids,names};
    }
    catch (error) {
        console.log("r");
    }
}
