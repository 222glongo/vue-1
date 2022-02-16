//console.log("hello, vue");
const app = Vue.createApp({
  data(){
    return{
      showBooks:true,
      title: 'The Final Empire',
      author: 'Brandon Sanderson',
      age: 45
    }
  },
  methods: {
    toggleShowBooks(){
      this.showBooks = !this.showBooks
    }
  }
})


    // changeTitle(title) {
    //   //this.title = 'Words of Randiance'
    //   this.title = title
    // }


app.mount('#app')
