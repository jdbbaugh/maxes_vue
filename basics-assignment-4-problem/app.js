const app = Vue.createApp({
  data () {
    return {
      userInput: '',
      isVisible: true,
      userBackground: '',
    }
  },
  computed: {
    inputClass() {
      return [this.userInput, {visible: this.isVisible, hidden: !this.isVisible}]
    },
    newColor() {
      return {backGroundColor: this.userBackground}
    }
  },
  methods: {
    hideBox() {
      this.isVisible = !this.isVisible
    }
  }
})

app.mount('#assignment')