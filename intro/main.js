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
            <ul>
                <li v-for="detail in details" >{{ detail }}</li>
            </ul>

                <div v-for="(variant, index) in variants" :key="variant.variantId"
                    class="color-box"
                    :style="{ backgroundColor: variant.variantColor}" @mouseover="updateProduct(index)">
                </div>
                <button v-on:click="addToCart" :disabled="!inStock"
                    :class="{ disabledButton: !inStock }">Add to Cart</button>
                <!--<button @click="deleteFromCart">Remove from Cart</button>-->
            </div>
            <div>
                <h2>Reviews</h2>
                <p v-if="!reviews.length">There are no reviews yet.</p>
                <ul>
                    <li v-for="review in reviews">
                        <p>{{ review.name }}</p>
                        <p>Rating: {{ review.rating }}</p>
                        <p>{{ review.review}}</p>
                    </li>
                </ul>
            </div>
            <product-review @review-submitted="addReview"></product-review>
        </div>
    `,
    data() {
        return {
            product: 'Socks',
            brand: 'Vue Mastery',
            // description: "A pair of warm, fuzzy socks"
            selectedVariant: 0,
            link: 'https://vue.js.org',
            /* onSale: true,  */
            details: ["80% cotton", "20% neutral", "Gender neutral"],
            variants: [{
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
            // onSale: true
            reviews: []
        }
    },
    methods: {
        addToCart() {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
        },
        /* deleteFromCart(){
            this.$emit('remove-from-cart', this.variants[this.selectedVariant].variantId)
        }, */
        updateProduct(index) {
            this.selectedVariant = index
            console.log(index)
        },
        addReview(productReview) {
            this.reviews.push(productReview)
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity
        },
        /*sale(){
            if(this.onSale){
                return this.brand + ' ' + this.product + ' are on sale!'
            }
                return this.brand + ' ' + this.product + ' are not on sale!'
        }*/
        shipping() {
            if (this.premium) {
                return "Free"
            }
            return 2.99
        }
    }

})

Vue.component('product-review', {
    template: `
    <form class="review-form" @submit.prevent="onSubmit">
        <p class="error" v-if="errors.length">
            <b>Please correct the following error(s) :</b>
            <ul>
            <li v-for="error in errors">{{ error }}</li>
            </ul>
        </p>
        <p>
            <label for="name">Name:</label>
            <input class="name" v-model="name" >
        </p>

        <p>
            <label for="review">Review:</label>
            <textarea id="review" v-model="review" ></textarea>
        </p>

        <p>
            <label for="rating">Rating:</label>
            <select id="rating" v-model.number="rating" >
                <option>5</option>
                <option>4</option>
                <option>3</option>
                <option>2</option>
                <option>1</option>
            </select>
        </p>

        <p>
            <label>Would you recommend this product ?</label>
            <input type="radio" value="Yes" v-model="recommend">
                <label for="Yes">Yes</label>
            <input type="radio"  value="No" v-model="recommend">
            <label for="No">No</label>
        </p>
        <p>
            <input type="submit" value="Submit">
        </p>
    </form>
    `,
    data() {
        return {
            name: null,
            review: null,
            rating: null,
            recommend: null,
            errors: []
        }
    },
    methods: {
        onSubmit() {
            this.errors = []
            if (this.name && this.review && this.rating && this.recommend) {
                let productReview = {
                    name: this.name,
                    review: this.review,
                    rating: this.rating,
                    recommend: this.recommend
                }
                this.$emit('review-submitted', productReview)
                this.name = null,
                    this.review = null,
                    this.rating = null,
                    this.recommend = null
            } else {
                if (!this.name) this.errors.push("Name required.")
                if (!this.review) this.errors.push("Review required")
                if (!this.rating) this.errors.push("Rating required.")
                if (!this.recommend) this.errors.push("Recommend required")
            }
        }
    }
})

var app = new Vue({
    el: '#app',
    data: {
        premium: false,
        cart: []
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
        }
    }
    //, 
    // sizes: ["M","XS", "L", "XL", "S"]
})