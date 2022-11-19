<template>
  <div>
    <div class="container">
      <div class="category_breadcrumb">
        <ul class="breadcrumb">
          <li><a href="#">Главная</a></li>
          <li><a href="#">Корзина</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryBreadcrumb"
}
</script>

<style scoped>
ul.breadcrumb {
  padding: 0px 16px;
  list-style: none;
  margin: 0;
}

ul.breadcrumb li {
  display: inline;
  font-size: 18px;
}

ul.breadcrumb li + li:before {
  padding: 8px;
  color: black;
  content: "/\00a0";
}

ul.breadcrumb li a {
  color: #6c7073;
  text-decoration: none;
}

ul.breadcrumb li a:hover {
  color: #01447e;
  text-decoration: underline;
}
</style>