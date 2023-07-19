async function getProducts() {
    try {
        let result = await fetch('./shops.json');
        let data = await result.json();

        //destructuring
        let products = data.items;
        products = products.map(item => {
            
            const { id } = shops;
            const {name} = item.fields.image.fields.file.url;
            return { title, price, id, image };
        });
        return products;
    }
    catch (error) {
        console.log(error);
    }
}
getProducts();