const app = Vue.createApp({
  data () {
    return {
      enteredTask: '',
      tasks: [],
      showList: true,
    }
  },
  computed: {
    buttonCaption() {
      return this.showList ? 'Hide List' : 'Show List'
    }
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredTask);
      this.enteredTask = '';
    },
    toggleList() {
      this.showList = !this.showList
    }
  }
})

app.mount("#assignment")