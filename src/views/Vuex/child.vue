<template>
  <div>
    <h3>这是Child组件</h3><button class="button">Click</button>
    <h5>count: {{$store.state.count}}</h5>
  </div>
</template>

<script>
export default {
  name: 'Child',
  data() {
    return {
      // count: this.$store.state.count
    }
  },
  mounted(){
    
  }
}
</script>

<style>

</style>