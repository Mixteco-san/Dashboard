new Vue ({
    el: '#app',
    
    data() {
        return {
            title: "Que onda",

            showValue: 0
        }
    },

    methods: {
        showForm1() {
            this.showValue = 1 
        },
        showForm2() {
            this.showValue = 2 
        },
        showForm3() {
            this.showValue = 3 
        },
        showForm4() {
            this.showValue = 4 
        },
        showForm5() {
            this.showValue = 5 
        },
        showForm6() {
            this.showValue = 6 
        }
    }
})