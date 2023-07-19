let shops;

async function getProducts() {
    try {
        let result = await fetch('./shops.json');
        let data = await result.json();

        //destructuring
       
       let object = data.shops;
       console.log(object)
    }
    catch (error) {
        console.log(error);
    }
}
getProducts();