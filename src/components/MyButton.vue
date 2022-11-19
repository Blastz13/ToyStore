<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "MyButton"
}
</script>

<style lang="scss" scoped>
$base-background: #0073e6;
$base-background-white: #0381ff;
$base-grey: rgba(75, 75, 75, 0.9);

button{
  background-color: $base-background-white;
  border: none;
  color: white;
  padding: 12px 26px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 15px;
  font-family: 'Montserrat', sans-serif;
}
</style>