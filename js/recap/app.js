const app = new Vue({
    el: '#app',
    data: {
        product: {
            name: 'iPhone',
            price: 1200,
            options: [
                {
                    text: '128 GB',
                    plus: 0
                },
                {
                    text: '256 GB',
                    plus: 100
                },
                {
                    text: '512 GB',
                    plus: 150
                }
            ],
            colors: [
                'black',
                'blue',
                'green',
                'purple',
                'white'
            ]
        },
        activeColor: '',
        activeOption: 0,
        fullPrice: 0,
        quantity: 0
    },
    mounted() {
        this.fullPrice   = this.product.price;
        this.activeColor = this.product.colors[0];
    },
    computed: {
        fullName: function() {
            let opt = this.product.options[this.activeOption].text;
            return this.product.name + ' ' + this.activeColor + ' ' + opt;
        },
        totalPrice: function() {
            return this.fullPrice * this.quantity;
        }
    },
    methods: {
        changeColor: function(color) {
            this.activeColor = color;
        },
        changeOption: function(index) {
            this.activeOption = index;
            this.fullPrice    = this.product.price + this.product.options[index].plus;
        }
    }
})