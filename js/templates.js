new Vue ({
    el: '#app',
    
    data() {
        return {
            show: false,
            showValue: 0,
            checkBoxes: [
                {check: false},
                {check: false},
                {check: false},
                {check: false},
                {check: false}
            ]
        }
    },

    methods: {
        showForm( n ) {
            this.checkBoxes[n].check = !this.checkBoxes[n].check
        },
    }
})