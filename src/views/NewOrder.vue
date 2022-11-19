<template>
  <UpButtonPage/>
  <div class="">
    <div class="container">
      <div class="basket">
        <h1 class="basket__title">Ваш заказ</h1>
        <div class="basket__item-list">
          <BasketItem/>
        </div>
        <div class="basket__subtotal">
          <div class="basket__subtotal-item">
            <div class="basket__subtotal-title">Сумма по товарам</div>
            <h6 class="basket__subtotal-price">1000₽</h6>
          </div>
          <div class="basket__subtotal-item">
            <div class="basket__subtotal-title">Стоимость доставки</div>
            <h6 class="basket__subtotal-price">300₽</h6>
          </div>

        </div>
        <div class="basket__total">
          <div class="basket__total-title">Итого:</div>
          <h6 class="basket__total-price">1300₽</h6>
        </div>
      </div>
      <div class="order">
        <div class="order__title">
          <h1>Оформление заказа</h1>
        </div>
        <div class="order__form">
          <h2>Контактные данные</h2>
          <div class="input__form name required">
            <label class="input__title" for="contact_name">
              Ваше имя
            </label>
            <input class="my__input" type="text" id="contact_name">
          </div>
          <div class="input__form phone required">
            <label class="input__title" for="input__form contact_phone">
              Контактный телефон
            </label>
            <input class="my__input" type="text" id="contact_phone">
          </div>
          <div class="input__form email">
            <label class="input__title" for="contact_email">
              Email
            </label>
            <input class="my__input" type="text" id="contact_email">
          </div>
          <h2>Доставка</h2>
          <div class="input__form shipping__address required">
            <label class="input__title" for="contact_email">
              Населенный пункт
            </label>
            <input class="my__input" type="text" id="shipping_address">
          </div>
          <div class="delivery__methods">
            <label class="method" for="method_pickup">
              <div class="method-input">
                <input name="delivery_method" class="my__input-radio" type="radio" id="method_pickup">
                <span></span>
              </div>
              <div class="method-info">
                <h4>Самовывоз</h4>
                <h5>Доставка на пункт выдачи</h5>
              </div>
              <h6>0₽</h6>
            </label>
            <label class="method" for="method_delivery">
              <div class="method-input">
                <input name="delivery_method" class="my__input-radio" type="radio" id="method_delivery">
                <span></span>
              </div>
              <div class="method-info">
                <h4>Курьером</h4>
                <h5>Доставка на дом курьером</h5>
              </div>
              <h6>300₽</h6>
            </label>
          </div>
          <div class="payment__methods">
            <h2>Способ оплаты</h2>
            <label class="method" for="upon_receipt">
              <div class="method-input">
                <input name="payment_method" class="my__input-radio" type="radio" id="upon_receipt">
                <span></span>
              </div>
              <div class="method-info">
                <h4>При получении</h4>
                <h5>Оплата банковской картой или наличными при получении заказа</h5>
              </div>
            </label>
            <label class="method" for="online">
              <div class="method-input">
                <input name="payment_method" class="my__input-radio" type="radio" id="online">
                <span></span>
              </div>
              <div class="method-info">
                <h4>Онлайн</h4>
                <h5>Оплата банковской картой онлайн</h5>
              </div>
            </label>
          </div>
          <button class="confirm__order">Подтвердить заказ</button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import UpButtonPage from "@/components/UpButtonPage";
import BasketItem from "@/components/BasketItem";

export default {
  name: "NewOrder",
  components: {UpButtonPage, BasketItem}
}
</script>


<style lang="scss" scoped>
$base-background: #0073e6;
$base-background-white: #0381ff;
$base-grey: rgba(75, 75, 75, 0.9);
h1, h2 {
  margin: 20px 0 20px 0;
}

h3 {
  font-size: 16px;
  font-weight: normal;
  margin: 0 0 5px 0;
}

h4 {
  margin: 5px 0 5px 0;
  font-size: 20px;
  font-weight: normal;
}

h5 {
  font-weight: normal;
  color: $base-grey;
  font-size: 15px;
  margin: 5px 0 5px 0;
}

h6 {
  font-size: 20px;
  margin: 0;
  text-align: end;
}

.container {
  display: flex;
  flex-direction: row-reverse;
}

.basket {
  box-shadow: inset 4px 0 5px -3px #cccccc;
  width: 50%;
  padding: 15px;
}

.basket__subtotal {
  border-top: 1px solid $base-grey;
  border-bottom: 1px solid $base-grey;
  padding: 10px 0 10px 0;
}

.basket__subtotal-item {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 5px 0 5px 0;
}

.basket__subtotal-title {
  font-size: 16px;
  flex: 1 1 content;
}

.basket__total {
  margin-top: 20px;
  width: 100%;
  display: flex;
  align-items: center;
}

.basket__total-title {
  flex: 1 1 content;
}

.basket__total-price {
  font-size: 25px;
}

.order {
  width: 50%;
  margin-right: 15px;
}

.input__form {
  display: block;
  margin-bottom: 20px;
}

.my__input {
  width: 100%;
  border: 1px solid;
  border-radius: 12px;
  height: 40px;
  font-size: 17px;
}

.input__title {
  font-size: 17px;
  display: flex;
}

.delivery__methods {
  width: 100%;
}

.method {
  width: 100%;
  display: flex;
  align-items: center;
  margin: 10px 0 10px 0;
  padding: 10px 0 10px 0;
}

.method-info {
  flex: 1 1 content;
  padding: 5px;
}

.method-input {
  display: flex;
  align-items: center;
  flex: 0 0 36px;
}

.my__input-radio {
  display: none;
}

span {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  box-shadow: inset 0 0 0 3px #ECEFF1;
  border: 2px solid $base-background-white;
}

input[type="radio"]:checked + span {
  background: $base-background-white;
}

.payment__method-input {
  flex: 0 1 2rem;
}

.confirm__order {
  width: 100%;
  height: 50px;
  margin: 40px 0;
  border-radius: 10px;
  background: $base-background-white;
  font-size: 17px;
  color: #FFFFFF;
  border: none;
}

.required > label:after {
  content: "*";
  color: red;
  margin-left: 3px;
}

@media (max-width: 810px) {
  .container {
    display: block;
  }
  .basket {
    width: 100%;
    box-shadow: inset 0px -5px 4px -3px #cccccc;
  }
  .order {
    width: 100%;
    margin-right: 15px;
  }
}
</style>