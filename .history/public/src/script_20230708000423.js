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
let shoparray = [];//ISME SAAARI KI SAARI DETAILS PADI HAIN PRODUCT K

//displaying the products

displayProducts(products) 
{
    let result = '';
    products.forEach(product => {
        result += `
            <article class="product">
            <div class="img-container">
                <img src=${product.image}
                 alt="product" class="product-img">
                <button class="bag-btn" data-id=${product.id}>
                    <i class="fa fa-shopping-cart"></i>
                    add to bag.
                </button>
            </div>
            <h3>${product.title}</h3>
            <h4>$${product.price}</h4>
        </article>
            `;
    })
    productsDOM.innerHTML = result;
}


    // console.log(shoparray);

    // till here
    document.addEventListener("DOMContentLoaded", () => {
        //when dom loads get the product info stored in an array SHOPSARRAY
        (async function () {
            try {
                const shopsarray = await getProducts();
                shopsarray.forEach((e) => {
                    shoparray.push(e);
                })
            }
            catch (error) {
                console.log(error);
            }
        })();




    })