<template>
  <div class="eventBus">
    <child></child>
    <child2></child2>
  </div>
</template>

<script>
import Child from './child'
import Child2 from './child2'
export default {
  name: 'EventBus',
  components: {
    Child,
    Child2
  }
}
</script>

<style>

</style>