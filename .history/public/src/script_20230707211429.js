let shops;

async function getProducts() {
    try {
        let result = await fetch('./shops.json');
        let data = await result.json();

        //destructuring
       console.log(typeof(data.shops))
    }
    catch (error) {
        console.log(error);
    }
}
getProducts();