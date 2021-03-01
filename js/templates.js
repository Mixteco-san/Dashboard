new Vue ({
    el: '#app',
    
    data() {
        return {
            title: "Que onda",

            show: false
        }
    },

    methods: {
        showForm() {
            this.show = !this.show
        }
    }
})