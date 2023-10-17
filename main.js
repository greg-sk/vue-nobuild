import { createApp } from 'vue'

createApp({
    data() {
      return {
        counter: 0
      }
    },
    mounted() {
        console.log('App mounted')
        this.$el.parentElement.style.display = 'block'
        this.$el.parentElement.nextElementSibling.style.display = 'none'
    }
  }).mount('#app')