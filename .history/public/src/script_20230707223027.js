// let shop;

import { name } from "tar/lib/types";

async function getProducts() {
    try {
        let result = await fetch('./shops.json');
        let data = await result.json();

        //destructuring
        let shopsarr = data.shops.map(shop=>{
            id:shop.id,
            name:shop.sname
        });

        return { ids, names };
    }
    catch (error) {
        console.log("r");
    }
}

let id = [];
let named = [];
(async function () {
    try {
        const { ids, names } = await getProducts();
        // console.log(ids);
        // for (let i = 0; i < ids.length(); i++) {
        //     let obj ={
        //         "id" : ids[i],
        //         "name" : names[i]
        //     }
        //     named.push(obj);
        // }
        console.log(typeof(ids));
    }
    catch (error) {
        console.log(error);
    }
})();

console.log(named);