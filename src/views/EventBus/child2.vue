<template>
  <div>
    <h3>这是Child2组件</h3><button class="button" @click="add">Click</button>
  </div>
</template>

<script>
export default {
  name: 'Child2',
  methods: {
    add(){
      console.log('子组件2的方法');
      this.$bus.$emit('onBus', {
        name: 'Jack'
      });
    }
  }
}
</script>

<style>

</style>