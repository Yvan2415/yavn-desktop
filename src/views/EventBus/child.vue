<template>
  <div>
    <h3>这是Child组件</h3><button class="button">Click</button>
    <h5>name: {{name}}</h5>
  </div>
</template>

<script>
export default {
  name: 'Child',
  data() {
    return {
      name: 'Yvan'
    }
  },
  mounted(){
    this.$bus.$on('onBus', info => {
      console.log("111111");
      this.name = info.name
      this.$bus.$off('onBus'); // 移除
    });
  }
}
</script>

<style>

</style>