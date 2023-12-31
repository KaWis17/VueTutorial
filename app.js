// in mount() we insert an application into the document
// we say where to render the data
const vm = Vue.createApp({
    data() {
        return {
            firstName: "Krzysztof",
            lastName: "Wisniewski"
        }
    },
    // do not use arrow functions with 'this' keyword
    methods: {
        fullName(){
            return `${this.firstName} ${this.lastName.toUpperCase()}`;
        }
    }
}).mount('#app')

// changing the data after 2s by accessing the vm const
// vm.$data.firstName is the same as vm.firstName <-- proxy getters and setters
setTimeout(() => {
    vm.firstName = "Antoni";
}, 2000);
