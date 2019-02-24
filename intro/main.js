var app = new Vue({
    el: '#app',
    data: {
        product: "Socks",
        // description: "A pair of warm, fuzzy socks"
        image: './assets/vmSocks-green.jpg',
        link:'https://vue.js.org', 
        inStock: false, 
        /* onSale: true,  */
        details: ["80% cotton", "20% neutral", "Gender neutral"], 
        variants: [
            {
                variantId: 2234,
                variantColor: 'green', 
                variantImage: './assets/vmSocks-green.jpg'
            },
            {
                variantId: 2235,
                variantColor: 'blue',
                variantImage: './assets/vmSocks-blue.jpg'
            }
        ], 
        cart: 0
        }, 
        methods: {
            addToCart() {
                this.cart += 1
            },
            deleteFromCart(){
                this.cart -= 1
            },
            updateProduct(variantImage) {
                this.image = variantImage
            }
        //, 
        // sizes: ["M","XS", "L", "XL", "S"]
    }
})