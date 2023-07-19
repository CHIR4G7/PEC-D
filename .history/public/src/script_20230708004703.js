

const productsDOM = document.querySelector('.products-center');

let shoparray = [];//ISME SAAARI KI SAARI DETAILS PADI HAIN PRODUCT K

class Shops{

    async getProducts() {
        try {
            let result = await fetch('./shops.json');
            let data = await result.json();
    
            //destructuring
            const shopsArray = data.shops.map(shop => ({ id: shop.id, name: shop.sname, image: shop.image}));
    
            return shopsArray;
        }
        catch (error) {
            console.log("r");
        }
    }

};

class display
{
    displayShops(shops)
    {
        let result = '';
       shops.forEach((shop)=>
       {
        result+=`${shop.id}`;
       })
    // productsDOM.innerHTML = "teri";
    }
};





//displaying the products

function displayProducts(shoparray) 
{
    let result = '';
    shoparray.forEach(product => {
        // result += `      <article class="product">
        // <div class="img-container">
        //     <img src="/images/product-1.jpeg" alt="product" class="product-img">
        //     <button class="bag-btn" data-id=${product.id}>
        //         <i class="fa fa-shopping-cart"></i>
        //         add to bag.
        //     </button>
        // </div>
        // <h3>${product.name}</h3>`;
        console.log(product);
    })
    productsDOM.innerHTML = result;
}


    // console.log(shoparray);

    // till here
    document.addEventListener("DOMContentLoaded", () => {
        //when dom loads get the product info stored in an array SHOPSARRAY
        // (async function () {
        //     try {
        //         const shopsarray = await getProducts();
        //         shopsarray.forEach((e) => {
        //             shoparray.push(e);
        //         })
        //     }
        //     catch (error) {
        //         console.log(error);
        //     }
        // })();
        // console.log(shoparray);
        // displayProducts(shoparray);
        const shops = new Shops();
        const displaying = new display();

        shops.getProducts().then(products=>
            {
                displaying.displayShops(products);
            })
        
    })