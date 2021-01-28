<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
.button{
    width: 100px;
    height: 40px;
    line-height: 40px;
    background-color: cadetblue;
    color: white;
    margin-left: 30px;
    border: none;
    border-radius: 10px;
    outline: none;
    &:active{
      background-color: rgb(95, 158, 160, 0.5);
    }
  }
</style>
