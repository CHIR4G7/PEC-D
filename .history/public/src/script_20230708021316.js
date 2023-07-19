//SECTION 1 - TO GET AND TARGET DOM ELEMETNS
const productsDOM = document.querySelector('.content-inner');

//SECTION 1 ENDS HERE




//SECTION 2 - ALL THE STORAGES THE ARAYS THE VARIABLES TO BE USED GLOBALLY ADDED HERE

let shoparray = [];//ISME SAAARI KI SAARI DETAILS PADI HAIN PRODUCT K

// SECTION2 ENDS HERE




//SECTION 3 - CLASSES CREATE FOR EACH FUNCTIONALITY AND FUNCTIONS ARE DIVIDE INTO EARCH CLASS

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
        console.log(shop.id);
        // result+=`${shop.id}`
        result+=` <li class="card">
        <article class="product">
            <div class="img-container">
                <img src="/images/product-1.jpeg" alt="product" class="product-img">
                <button class="bag-btn" data-id="1">
                    
                    VISIT
                </button>
            </div>
            <h3>${shop.name}</h3>
            
        </article>
    </li>`;
    
       })

    productsDOM.innerHTML = result;
    }
};

//THAT SECTION 3 ENDS HERE




   

//TSECTION 4 HIS IS THE MAIN DOM COMMANDS WHERE WE WILL EXECUTE FUNCTIONS CREATED ABOVE ACCORDING TO OUT NEED

    document.addEventListener("DOMContentLoaded", () => {
       
        const shops = new Shops();
        const displaying = new display();

        shops.getProducts().then(products=>
            {
                displaying.displayShops(products);
                // console.log(products);
            })
        
    })

//THAT ENDS SECTION 4 HERE.


