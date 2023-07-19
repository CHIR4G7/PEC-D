// let shop;



async function getProducts() {
    try {
        let result = await fetch('./shops.json');
        let data = await result.json();

        //destructuring
        const shopsArray = data.shops.map(shop => ({ id: shop.id, name: shop.sname }));

        return shopsArray;
    }
    catch (error) {
        console.log("r");
    }
}

let shopsarray = [];
(async function () {
    try {
        const shopsarray = await getProducts();
       
    }
    catch (error) {
        console.log(error);
    }
})();

// console.log(named);