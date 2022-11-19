<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__info">
        <div class="footer__info-link">
          <div class="footer__client">
            <ul>
              <li>
                <a href="#">О магазине</a>
              </li>
              <li>
                <a href="#">Адреса магазинов</a>
              </li>
              <li>
                <a href="#">Акции и скидки</a>
              </li>
              <li>
                <a href="#">Юридическим лицам</a>
              </li>
              <li>
                <a href="#">Как заказать</a>
              </li>
              <li>
                <a href="#">Обмен и возврат</a>
              </li>
            </ul>
          </div>
          <div class="footer__shop">
            <ul>
              <li>
                <a href="#">Клиентам</a>
              </li>
              <li>
                <a href="#">Личный кабинетв</a>
              </li>
              <li>
                <a href="#">Мои заказы</a>
              </li>
              <li>
                <a href="#">Вопросы и ответы</a>
              </li>
              <li>
                <a href="#">Как заказать</a>
              </li>
            </ul>
          </div>
          <div class="footer__politic">
            <ul>
              <li>
                <a href="#">О магазине</a>
              </li>
              <li>
                <a href="#">Адреса магазинов</a>
              </li>
              <li>
                <a href="#">Акции и скидки</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer__contact">
          <div class="footer__social">
            <h4>Контакты</h4>
            <div class="footer__social-ico">
              <img src="@/assets/vk.svg">
              <img src="@/assets/tg.svg">
              <img src="@/assets/youtube.svg">
            </div>
          </div>
          <a href="tel:+7(800) 800-80-80">+7(800)800-80-80</a>
        </div>
      </div>
      <div class="footer__terms">
        <div class="footer__logo">
          <h2> Toy Store</h2>
        </div>
        <div class="footer__payment">
          <img src="@/assets/mc.svg" style="width: 30px; height: 30px; margin-right: 10px">
          <img src="@/assets/mir.svg" style="width: 30px; height: 30px;">
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Footer",
  data(){

  }
}
</script>

<style scoped lang="scss">
$base-background: #0073e6;
$base-background-white: #0381ff;
$base-grey: rgba(75, 75, 75, 0.9);

.footer__contact {
  padding: 15px 0px 0px 10px;
}

.footer__info-link {
  display: flex;
  flex-wrap: wrap;
}

.footer__terms {
  margin-top: 10px;
  border-top: 1px solid $base-background-white;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;

  h2 {
    color: white;
  }
}

.footer__social {
  h4 {
    margin: 0;
    color: white;
  }

  &-ico {
    display: flex;

    img {
      width: 30px;
      height: 30px;
      margin-left: 10px;
    }
  }
}

.footer__info {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: start;
}

.footer {
  background: $base-background;
  width: 100%;

  ul {
    list-style-type: none;
    margin: 0;
    padding: 15px 0px 0px 10px;
  }

  li {
    padding: 5px;
    font-size: 16px;
  }

  a {
    color: white;
    text-decoration: none;
  }
}


</style>