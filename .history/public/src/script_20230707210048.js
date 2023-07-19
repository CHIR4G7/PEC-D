let shop;

async function getProducts() {
    try {
        let result = await fetch('./shops.json');
        let data = await result.json();

        //destructuring
        shop = data;
        // products = products.map(item => {
        //     const { title, price } = item.fields;
        //     const { id } = item.sys;
        //     const image = item.fields.image.fields.file.url;
        //     return { title, price, id, image };
        // });
        // return products;
        // console.log(data);
    }
    catch (error) {
        console.log(error);
    }
}

getProducts();
console.log(shop);
