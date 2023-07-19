async function getProducts() {
    try {
        let result = await fetch('./shops.json');
        let data = await result.json();

        //destructuring
        let products = data.items;
        products = products.map(item => {
            
            const { id } = shops.id;
            const {name} = shops.name;
            return { id,name };
        });
        return products;
    }
    catch (error) {
        console.log(error);
    }
}
getProducts();