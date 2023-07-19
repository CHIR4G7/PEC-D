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


(async function () {
    try {
        const shopsarray = await getProducts();
        // console.log(ids);
        // for (let i = 0; i < ids.length(); i++) {
        //     let obj ={
        //         "id" : ids[i],
        //         "name" : names[i]
        //     }
        //     named.push(obj);
        // }
        console.log(shopsarray);
    }
    catch (error) {
        console.log(error);
    }
})();

// console.log(named);