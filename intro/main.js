Vue.component('product', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template: `
    <div class="product">
        <div class="product-image">
            <img :src="image"  />
        </div>
        <div class="product-info">
            <h1>{{ title }}</h1>
            <p v-if="inStock">In Stock</p>
            <p v-else>Out of Stock</p>
            <!--<p>{{ sale }}</p>-->
            <p>Shipping: {{ shipping }}</p>
                <product-details :details="details"></product-details>

                <div v-for="(variant, index) in variants" :key="variant.variantId"
                    class="color-box"
                    :style="{ backgroundColor: variant.variantColor}" @mouseover="updateProduct(index)">
                </div>
                <button v-on:click="addToCart" :disabled="!inStock"
                    :class="{ disabledButton: !inStock }">Add to Cart</button> 
                <div class="cart">
                    <p>Cart({{cart}})</p>
                </div>
            </div>
        </div>
    `, 
    data(){
        return {
            product: 'Socks',
        brand: 'Vue Mastery',
        // description: "A pair of warm, fuzzy socks"
        selectedVariant: 0,
        link:'https://vue.js.org', 
        /* onSale: true,  */
        details: ["80% cotton", "20% neutral", "Gender neutral"], 
    variants: [
        {
            variantId: 2234,
            variantColor: 'green', 
            variantImage: './assets/vmSocks-green.jpg',
            variantQuantity: 10
        },
        {
            variantId: 2235,
            variantColor: 'blue',
            variantImage: './assets/vmSocks-blue.jpg', 
            variantQuantity: 0
        }
        ], 
    cart: 0, 
    onSale: true
        }
    }, 
    methods: {
            addToCart() {
                this.cart += 1
            },
            deleteFromCart(){
                this.cart -= 1
            },
            updateProduct(index) {
                this.selectedVariant = index
                console.log(index)
            }
    },
    computed:{
        title() {
            return this.brand + ' ' + this.product
        },
        image(){
            return this.variants[this.selectedVariant].variantImage
        },
        inStock(){
            return this.variants[this.selectedVariant].variantQuantity
        },
        /*sale(){
            if(this.onSale){
                return this.brand + ' ' + this.product + ' are on sale!'
            }
                return this.brand + ' ' + this.product + ' are not on sale!'
        }*/
        shipping(){
            if(this.premium){
                return "Free"
            }
            return 2.99
        }
    }

})

Vue.component('product-details', {
    props: 
    {
        details:{
            type: Array,
            required: true
        }
    },
    template: `
                <ul>
                    <li v-for="detail in details" >{{ detail }}</li>
                </ul>
    `
})

var app = new Vue({
    el: '#app',
    data:{
        premium: false
    }
        //, 
        // sizes: ["M","XS", "L", "XL", "S"]
})