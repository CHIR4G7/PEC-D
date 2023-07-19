async function getProducts() {
    try {
        let result = await fetch('./shops.json');
        let data = await result.json();

        //destructuring
        let products = data.shops;
        // products = products.map(item => {
        //     const { title, price } = item.fields;
        //     const { id } = item.sys;
        //     const image = item.fields.image.fields.file.url;
        //     return { title, price, id, image };
        // });
        return products;
        // console.log(products);
    }
    catch (error) {
        console.log(error);
    }
}

