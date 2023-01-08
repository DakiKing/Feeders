const products = [
	{id: 1,title: 'KFC', price: 1000.00, qty: 1, image: 'https://korpa.mk/uploads/lMbkiDiZxWuKQ43kIkfRGaJwkGI4RBhj.png'},
	{id: 2,title: 'Burger King',price: 2500.00, qty: 1,image: 'https://korpa.mk/uploads/GkhdUFyLrAgsPGMVnsvv9tsxrewpB0kx.png'},
	{id: 3,title: 'Fat Kitchen',price: 150.00,qty: 1,image: 'https://korpa.mk/uploads/k2t8WkZklaR8kQoRwXfEEaJGnwwqlXoj.png'},
	{id: 4,title: 'Teteks',price: 10, qty: 1, image: 'https://korpa.mk/uploads/yXNrAlxNUle7bSGEZXOtoTVto76dNg7K.png'},
	{id: 4,title: 'Pastrmajlija',price: 10, qty: 1, image: 'https://korpa.mk/uploads/hAbyk4tE0Q4XjnKO9Q6K1qN20BiZC3Mj.png'},
	{id: 4,title: 'Zdravo',price: 10, qty: 1, image: 'https://korpa.mk/uploads/D5hd1M2vDbr7ikdF2iTCMRKCixZiBEtM.png'},
	{id: 4,title: 'Piljara',price: 10, qty: 1, image: 'https://korpa.mk/uploads/CNGPJwvcwuzJ9EWuabJnW5eZhskSU3i4.png'},
	{id: 4,title: 'Market',price: 10, qty: 1, image: 'https://korpa.mk/uploads/DGAActSQK6jBjnyboXGXtsZ1oQ2NkRYE.png'},
];


// Your Code goes here

Vue.filter('formatCurrency', function (value) {
    return value.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
});

Vue.component('shopping-cart', {
    props: ['items'],
    computed: {
        Total() {
            let total = 0;
            this.items.forEach(item => {
                total += (item.price * item.qty);
                console.log(this.items);
            });
            return total;
        }
    },

    methods: {
        removeItem(index) {
            this.items.splice(index, 1)
        }
    }
});

new Vue({
    el: '#app',
    data: {
        cartItems: [],
        items: products
    },
    methods: {
        addToCart(itemToAdd, index) {
            // let qty = $(".item input")[index].value;

            // itemToAdd.qty = qty;

            this.cartItems.forEach((item, i) => {
                if (item.id === itemToAdd.id){
                    this.cartItems.splice(i, 1)
                }
            })
            
            this.cartItems.push(itemToAdd);

            // $(".item input")[index].value = 1;
        }
    }
});