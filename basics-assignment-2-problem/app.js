const app = Vue.createApp({
  data() {
    return {
      userInput: '',
      userInputTwo: ''
    }
  },
  methods: {
    setUserInput(event) {
      this.userInput = event.target.value;
    },
    setUserInputTwo(event) {
      this.userInputTwo = event.target.value;
    },
    showAlert() {
      alert('whoa')
    }
  }
})

app.mount('#assignment')