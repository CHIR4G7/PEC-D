async function getProducts() {
    try {
        let result = await fetch('/Users/chirag/Desktop/PEC D/public/shops.json');
        let data = await result.json();

        //destructuring
        // let products = data.shops;
        // products = products.map(item => {
        //     const { title, price } = item.fields;
        //     const { id } = item.sys;
        //     const image = item.fields.image.fields.file.url;
        //     return { title, price, id, image };
        // });
        // return products;
        console.log("suc");
    }
    catch (error) {
        console.log(error);
    }
}
console.log("hello");
