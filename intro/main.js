var app = new Vue({
    el: '#app',
    data: {
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
        sale(){
            if(this.onSale){
                return this.brand + ' ' + this.product + ' are on sale!'
            }
                return this.brand + ' ' + this.product + ' are not on sale!'
            }
    }
        //, 
        // sizes: ["M","XS", "L", "XL", "S"]
})