// let shop;

async function getProducts() {
    try {
        let result = await fetch('./shops.json');
        let data = await result.json();

        //destructuring
        let ids = data.shops.map(shop=>shop.id);
        let names = data.shops.map(shop=>shop.name);

       return {ids,names};
    }
    catch (error) {
        console.log("r");
    }
}

let id = [];

(async function(){
    try{
        const {ids,names} = await getProducts();
        // console.log(ids);
        ids.forEach((e)=>
        {
            id.push(e);
        })
    }
    catch(error)
    {
        console.log(error);
    }
})();

console.log(id);