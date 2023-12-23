// in mount() we insert an application into the document
// we say where to render the data
Vue.createApp({
    data() {
        return {
            firstName: "Krzysztof",
            lastName: "Wisniewski"
        }
    }
}).mount('#app')