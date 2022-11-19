<template>
  <div>
    <div class="container">
      <div class="product__container">
        <div class="product__gallery">
          <SliderImages/>
        </div>
        <div class="product__info">
          <div class="product__rating"></div>
          <h1 class="product__title">Рюкзак</h1>
          <h2 class="product__price">300 ₽</h2>
          <div class="product__controls">
            <button v-if="this.product_count===0" class="buy__button" @click="this.product_count+=1">
              <h>В корзину</h>
              <img class="cart__image" src="@/assets/cart.svg">
            </button>
            <div v-if="this.product_count>0" class="product__counter">
              <span class="product__counter-minus" @click="this.product_count-=1">-</span>
              <router-link :to="{name: 'ProductsCart'}" class="product__counter-center">
                <p style="font-size: 14px">В корзине {{ this.product_count }} шт</p>
                <p style="font-size: 12px">Перейти в корзину</p>
              </router-link>
              <span class="product__counter-plus" @click="this.product_count+=1">+</span>
            </div>
            <div class="wish__button">
              <WishButton/>
            </div>
          </div>
          <div class="product__compare">
            <p>В сравнении</p>
          </div>
          <div class="product__characteristics">
            <h3>Характеристики</h3>
            <div class="characteristic">
              <p class="characteristic-name">Вид застежки</p>
              <p class="characteristic-type">молния</p>
            </div>
            <div class="characteristic">
              <p class="characteristic-name">Спортивное назначение</p>
              <p class="characteristic-type">гимнастика</p>
            </div>
            <div class="characteristic">
              <p class="characteristic-name">Декоративные элементы</p>
              <p class="characteristic-type">светоотражающие вставки</p>
            </div>
            <div class="characteristic">
              <p class="characteristic-name">Карманы</p>
              <p class="characteristic-type">Наружный спереди; Наружный боковой; Внутренний для ноутбука/планшета</p>
            </div>
          </div>
          <div class="product__description">
            <h3>Описание</h3>
            <p>
              Удобная и практичная  сумка-портфель изготовлена из натуральной кожи. Снабжена ручкой. В комплекте регулируемый плечевой ремень.

              Состоит из двух отделений. В одном из которых есть отсек для ноутбука - он надежно закрывается хлястиком на липучку. Во втором - скрытый карман для документов и два места для мелких принадлежностей. Снаружи расположено три больших кармана на молниях.

              Лицевая сторона украшена конгревом логотипа. Внутренняя декорирована кожаной нашивкой с тиснением логотипа.
            </p>
          </div>
          <div class="product__reviews">
            <h3>Отзывы</h3>
            <button class="button-write__review">Написать отзыв</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SliderImages from "@/components/SliderImages";
import WishButton from "@/components/WishButton";

export default {
  name: "ProductView",
  components: {SliderImages, WishButton},
  data() {
    return {
      product_count: 0
    }
  }
}
</script>

<style lang="scss" scoped>
$base-background: #0073e6;
$base-background-white: #0381ff;
$base-grey: rgba(75, 75, 75, 0.9);

h1, h2 {
  font-size: 30px;
  margin: 0 0 40px 0;
}

h3 {
  font-size: 25px;
  margin: 0 0 10px 0;
}

p {
  font-size: 16px;
  margin: 0;
  line-height: 1.5;
}

.product__container {
  display: flex;
  align-items: start;
  justify-content: space-between;
  margin: 0 0 20px 0;
  padding: 0;
}

.product__gallery {
  width: 59%;
  position: sticky;
  top: 10px;
}

.product__info {
  width: 39%;
}

.product__controls {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  align-items: center;
}

.product__compare {
  margin-bottom: 40px;
}

.buy__button {
  min-width: 85%;
  height: 50px;
  border-radius: 10px;
  background: $base-background-white;
  font-size: 20px;
  color: #FFFFFF;
  border: none;
  justify-content: center;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.product__counter {
  display: flex;
  cursor: pointer;
  min-width: 85%;
  height: 50px;
  border-radius: 10px;
  font-size: 20px;
}

.product__counter span, a {
  display: inline-flex;
  background: $base-background-white;
  align-content: center;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
}

.product__counter-center {
  min-width: 65%;
  flex-direction: column;
  text-align: center;
}

.product__counter-plus {
  width: 100%;
  margin-left: 2px;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
}

.product__counter-minus {
  width: 100%;
  margin-right: 2px;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
}

.cart__image {
  width: 21px;
  margin-left: 10px;
}

.wish__button {
  width: 27px;
  height: 27px;
  display: flex;
}

.product__characteristics {
  width: 100%;
  margin-bottom: 20px;
}

.characteristic {
  margin-bottom: 10px;
}

.characteristic-name {
  color: #999999;
  font-size: 14px;
}

.product__description {
  margin-bottom: 20px;
}

.button-write__review {
  height: 40px;
  border-radius: 10px;
  background: $base-background-white;
  font-size: 16px;
  color: #FFFFFF;
  border: none;
  padding: 0 20px;
}

@media (max-width: 1000px) {
  .product__container {
    display: block;
    align-items: normal;
  }
  .product__gallery, .product__info {
    width: 100%;
    position: relative;
  }
  .product__info {
    padding: 0 20px;
  }
  .product__gallery {
    margin-bottom: 40px;
  }
}
</style>