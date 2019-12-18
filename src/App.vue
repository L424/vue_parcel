<template>
  <div id="app">
    <todo></todo>
    <give-like
            v-for="(item, index) in zanData"
            :key="index"
            :zanData="item"
            @state="getState"></give-like>
  </div>
</template>

<script>
  import Todo from './components/Todo'
  import GiveLike from './components/GiveLikeComponent'


  export default {
    name: 'app',
    components: {
      Todo,
      GiveLike
    },
    data() {
      return {
        zanData: [
          {isZan: 0, count: 10, id: 1},
          {isZan: 1, count: 11, id: 2},
          {isZan: 0, count: 20, id: '45678'},
          {isZan: 1, count: 420, id: '4678'},

        ]
      }
    },
    methods: {
      getState(id) {
        this.zanData.forEach(item => {
          if(item.id === id) {
            if (item.isZan === 1) {
              item.isZan = 0
              item.count = item.count - 1
            } else {
              item.isZan = 1
              item.count = item.count + 1
            }
          }
        })
      }
    }
  }
</script>

<style>

</style>
