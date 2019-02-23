var app = new Vue({
    el: '#app',
    data: {
        product: "Socks",
        // description: "A pair of warm, fuzzy socks"
        image: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg',
        link:'https://vue.js.org', 
        inStock: true, 
        onSale: true, 
        details: ["80% cotton", "20% neutral", "Gender neutral"], 
        variants: [
            {
                variantId: 2234,
                variantColor: "green"
            },
            {
                variantId: 2235,
                variantColor: "blue"
            }
        ], 
        sizes: ["M","XS", "L", "XL", "S"]
    }
})