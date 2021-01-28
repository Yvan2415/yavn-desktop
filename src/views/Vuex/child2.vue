<template>
  <div>
    <h3>这是Child2组件</h3>
    {{ $store.state.count }}
    <button class="button" @click="add">Click</button>
  </div>
</template>

<script>
export default {
  name: 'Child2',
  methods: {
    add(){
      this.$store.commit('add', 3);
    }
  }
}
</script>

<style>

</style>