new Vue({
    el: "#app",
    data: {
        price: 0,
        amount: 0,
        discount: 0,
        tax: 0
    },
    components: {
        "input-sale": {
            template: "#input-sale",
            props: {
                value: {
                    type: Number,
                    default: 0
                },
                label: {
                    type: String,
                    default: ""
                },
                mounted() {
                    this.formatValue()
                },
                methods: {
                    updateValue(value) {},
                    formatValue() {
                        this.$refs.input.value = currencyValidator.format(this.value)
                    }
                }
            }
        }
    },
    computed: {
        total() {
            let subtotal = this.price * this.amount
            subtotal -= ((subtotal * this.discount) / 100)
            subtotal += ((subtotal * this.tax) / 100)
            return subtotal.toFixed(2)
        }
    }
});