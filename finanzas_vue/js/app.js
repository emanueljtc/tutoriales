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

                },
                methods: {
                    updateValue(value) {

                    },
                    formatValue() {

                    }
                }
            }
        }
    },
    computed: {
        total() {

        }
    }
});