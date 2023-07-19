// to get the json files data in a array to display 

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



// console.log(shoparray);

// till here
document.addEventListener("DOMContentLoaded",()=>
{
    let shoparray = [];
(async function () {
    try {
        const shopsarray = await getProducts();
       shopsarray.forEach((e)=>
       {
        shoparray.push(e);
       })
    }
    catch (error) {
        console.log(error);
    }
})();
})