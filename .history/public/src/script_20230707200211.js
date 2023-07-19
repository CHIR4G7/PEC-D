//SELECTING AND ASSIGNNING ELEMNTS TO VARIABLES
console.log("aagya");

const cartBtn = document.querySelector('.cart-btn');//in navabr
const closeCartBtn = document.querySelector('.close-cart')//in the cart section
const clearCartBtn = document.querySelector('.clear-cart');//int he cart section
const cartDOM = document.querySelector('.cart');//in cart
const cartOverlay = document.querySelector('.cart-overlay');//in cart
const cartItems = document.querySelector('.cart-items');//in navbar
const cartTotal = document.querySelector('.cart-total');//in cart
const cartContent = document.querySelector('.cart-content');
const productsDOM = document.querySelector('.products-center');//in products


//NOW CREATING A CART ARRAY WHERE ELEMTNS WULD BE ADDED OR DELETED FROM
let cart = [];
//buttons
let buttonsDOM = [];



//getting the products
class Products {
    async getProducts() {
        try {
            let result = await fetch('public/products.json');
            let data = await result.json();

            //destructuring
            let products = data.items;
            products = products.map(item => {
                const { title, price } = item.fields;
                const { id } = item.sys;
                const image = item.fields.image.fields.file.url;
                return { title, price, id, image };
            });
            return products;
        }
        catch (error) {
            console.log(error);
        }
    }
}

//display products
class UI {
    displayProducts(products) {
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
        });
        productsDOM.innerHTML = result;
    }

    getBagButtons()
    {
        const buttons = [...document.querySelectorAll(".bag-btn")];
        buttonsDOM = buttons;
        buttons.forEach(button=>
            {
                let id = button.dataset.id;
                let inCart = cart.find(item=> item.id === id);
                if(inCart)
                {
                    button.innerText = "In Cart";
                    button.disabled = true;
                }
               
                    button.addEventListener('click',(event)=>
                    {
                        event.target.innerText = "In Cart";
                        event.target.disabled = true;

                        //get product from products 
                        let cartItem = {...Storage.getProduct(id),amount:1};
                        
                        //add prodcut to the cart
                        cart = [...cart,cartItem];
                        console.log(cart);

                        //save cart in local storage
                        Storage.saveCart(cart);

                        //set cart values
                        this.setCartValues(cart);
                        
                        //dispaly/add cart item
                        this.addCartItem(cartItem);

                        //show the cart
                        // this.showCart();
                    });
                
            })
    }
    setCartValues(cart)
    {
        let temptotal = 0;
        let itemstotal = 0;

        cart.map(item=>
            {
                temptotal += (item.price * item.amount);
                itemstotal += item.amount;
            })
            cartTotal.innerText = parseFloat(temptotal.toFixed(2));
            cartItems.innerText = itemstotal;
            // console.log(cartTotal,cartItems);
    }
    addCartItem(item)
    {
        const div = document.createElement('div');
        div.classList.add('cart-item');
        div.innerHTML = `<img src=${item.image} alt="product">
        <div>
            <h4>${item.title}</h4>
            <h5>$${item.price}</h5>
            <span class="remove-item" data-id=${item.id}>Remove</span>
        </div>
        <div>
            <i class="fa fa-chevron-up" data-id=${item.id}></i>
            <p class="item-amount">${item.amount}</p>
            <i class="fa fa-chevron-down" data-id=${item.id}></i>
        </div>
        `;
        cartContent.prepend(div);
        
    }

    showCart()
    {
        cartOverlay.classList.add('transparentBcg');
        cartDOM.classList.add('showCart');
    }
    hideCart()
    {
        cartOverlay.classList.remove('transparentBcg');
        cartDOM.classList.remove('showCart');
    }
    setupAPP()
    {
        cart = Storage.getCart();//upon reload either it will be empty or we would have added something.
        this.setCartValues(cart);
        this.populateCart(cart);
        cartBtn.addEventListener('click',this.showCart);
        closeCartBtn.addEventListener('click',this.hideCart);
    }
    populateCart(cart)
    {
        cart.forEach(item=>this.addCartItem(item));

    }
    cartLogic()
    {
        //clear cart
        clearCartBtn.addEventListener('click',()=>
        {
            this.clearcart();
        });
        //cart functionality
        cartContent.addEventListener('click',event=>
        {
            // console.log(event.target);
            if(event.target.classList.contains('remove-item'))
            {
                let r = event.target;
                let id = r.dataset.id;
                // console.log(r.parentElement.parentElement);
                cartContent.removeChild(r.parentElement.parentElement);
                this.removeitem(id);
            }
            else if(event.target.classList.contains('fa-chevron-up'))
            {
                let addAmount = event.target;
                let id = addAmount.dataset.id;
                let tempitem = cart.find(item=>item.id===id);
                tempitem.amount = tempitem.amount + 1;
                Storage.saveCart(cart);
                this.setCartValues(cart);
                addAmount.nextElementSibling.innerText = tempitem.amount;
            }
            else if(event.target.classList.contains('fa-chevron-down'))
            {
                let loweramount = event.target;
                let id = loweramount.dataset.id;
                let tempitem = cart.find(item=>item.id===id);
                tempitem.amount = tempitem.amount - 1;
                if(tempitem.amount>0)
                {
                    Storage.saveCart(cart);
                    this.setCartValues(cart);
                    loweramount.previousElementSibling.innerText = tempitem.amount;
                }
                else
                {
                    cartContent.removeChild(loweramount.parentElement.parentElement);
                    this.removeitem(id);
                }
            }
        })
    }
    clearcart()
    {
        let cartItems = cart.map(item=> item.id);
        cartItems.forEach(id=>this.removeitem(id));
        // console.log(cartContent.children);
        while(cartContent.children.length>1)//this is greater than 1 beause cart content me footer bhi included hai 0 kiya to vo bhi ud jayega
        {
            cartContent.removeChild(cartContent.children[0]);
        }
        this.hideCart();
    }
    removeitem(id)
    {
        cart = cart.filter(item=>item.id!==id);
        this.setCartValues(cart);
        Storage.saveCart(cart);
        let button = this.getSingleButton(id);
        button.disabled = false;
        button.innerHTML = `<i class="fa fa-shopping-cart"></i>Add to Bag.`;

    }
    getSingleButton(id)
    {
        return buttonsDOM.find(button=>button.dataset.id===id);
    }
}

//local storage
class Storage {
    static saveProducts(products) {
        localStorage.setItem("products", JSON.stringify(products));
    }
    static getProduct(id)
    {
        let products = JSON.parse(localStorage.getItem('products'));
        return products.find(product=>product.id===id);
    }
    static saveCart(cart)
    {
        localStorage.setItem("cart",JSON.stringify(cart));
    }
    static getCart()
    {
        if(localStorage.getItem('cart'))
        {
            return JSON.parse(localStorage.getItem('cart'));
        }
        else
        {
            return [];
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const ui = new UI();
    const products = new Products();

    //setup app;
    ui.setupAPP();

    //get all Products
    products.getProducts().then(products => {
        ui.displayProducts(products)
        Storage.saveProducts(products);
    }
    ).then(()=>
    {
        ui.getBagButtons();
        ui.cartLogic();
    });
});