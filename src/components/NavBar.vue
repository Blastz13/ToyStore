<template>
  <header>
    <transition name="hidden-navbar">
      <nav class="navbar" v-if="isVisibleNavbar">
        <div class="container">
          <div class="navbar__inner">
            <router-link :to="{ name: 'HomeView'}" class="navbar__logo">Toy Store</router-link>
            <button class="navbar__hamburger" :class="{'navbar__hamburger--toggled': isOpenBurger}"
                    @click="this.isOpenBurger = !this.isOpenBurger" aria-label="menu" aria-controls="navigation">
              <span class="navbar__hamburger-top" :class="{'navbar__hamburger-top--toggled': isOpenBurger}"></span>
              <span class="navbar__hamburger-middle"
                    :class="{'navbar__hamburger-middle--toggled': isOpenBurger}"></span>
              <span class="navbar__hamburger-bottom"
                    :class="{'navbar__hamburger-bottom--toggled': isOpenBurger}"></span>
            </button>
            <input class="navbar__search" placeholder="Поиск">

            <div class="navbar__area-controls">
              <div class="navbar__profile">
                <router-link :to="{name: 'ProfileView'}"><img src="@/assets/profile.svg"></router-link>
              </div>
              <div class="navbar__cart">
                <router-link :to="{ name: 'ProductsCart'}"><img src="@/assets/cart.svg"></router-link>
              </div>
            </div>
          </div>
          <transition name="hidden-navbar">
            <div :class="{'navbar__categories': isOpenBurger, 'navbar__categories__hidden': !isOpenBurger}" >
              <router-link :to="{ name: 'ProductsCatalog'}" class="navbar__menuitem" role="menuitem"
                           :class="{'navbar__menuitem--toggled': isOpenBurger}" v-for="i in (1,2,3,4,5,6,7,8)"
                           :key="{i}" style="align-items: center">
                <img src="@/assets/shoes.svg" style="width: 30px; height: 30px; margin-right: 20px">
                <h4 style="margin: 0;">Category</h4>
              </router-link>
            </div>
          </transition>
        </div>
      </nav>
    </transition>
    <div class="slider">
      <div class="container">
        <div class="slider__categories__list" style="position: relative;">
          <div class="slider__categories" ref="sliderCategory">
            <div class="slider__item" v-for="i in (1,2,3,4,5,6,7,8)" :key="{i}">
              <router-link :to="{ name: 'ProductsCatalog'}">
                <img src="@/assets/shoes.svg" style="width: 40%; height: 40%;">
              </router-link>
              <h4>Category</h4>
            </div>
          </div>
          <div class="slider__categories-control">
            <a @click="previousCategory"
               style="color: grey; text-decoration: none; position: absolute; left: 0; top: 25%; padding: 5px; cursor: pointer;">&#10094;</a>
            <a @click="nextCategory"
               style=" color: grey; text-decoration: none; position: absolute; right: 0;  top: 25%; padding: 5px; cursor: pointer;">&#10095;</a>
          </div>
        </div>

      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      isOpenBurger: false,
      isVisibleNavbar: true,
    }
  },
  props: {
    msg: String
  },
  methods: {
    nextCategory: function () {
      this.$refs.sliderCategory.scrollTo({
        left: this.$refs.sliderCategory.scrollLeft + 100,
        behavior: 'smooth'
      })
    },
    previousCategory: function () {
      this.$refs.sliderCategory.scrollTo({
        left: this.$refs.sliderCategory.scrollLeft - 100,
        behavior: 'smooth'
      })
    },
    onScroll() {
      if (window.pageYOffset > 200) {
        this.isVisibleNavbar = false;
        this.isVisibleUpButton = true;
      } else {
        this.isVisibleNavbar = true;
        this.isVisibleUpButton = false;
      }
    }
  },
  mounted() {
    setInterval(this.nextSliderSale, 5000);
    window.addEventListener('scroll', this.onScroll);
  },
}
</script>

<style scoped lang="scss">
$base-background: #0073e6;
$base-background-white: #0381ff;
$base-grey: rgba(75, 75, 75, 0.9);

.hidden-navbar-enter-active, .hidden-navbar-leave-active {
  transition: opacity .5s;
}

.hidden-navbar-enter, .hidden-navbar-leave-to {
  opacity: 0;
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.navbar__search {
  width: 60%;
  height: 45px;
  border: none;
  border-radius: 25px;
  background: $base-background-white;
  font-size: 20px;
  font-weight: 100;
  color: white;
  text-indent: 10px;

  &::placeholder {
    color: rgba(225, 225, 225, 0.65);
    opacity: 1;
  }
}

.slider {
  margin-top: 100px;
}

.navbar__categories {
  margin-top: 10px;
  position: relative;
  z-index: 2;
  overflow: hidden;
}

.navbar__categories__hidden {
  display: none;
}

.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  background: $base-background;
  overflow: hidden;
}

.navbar__area-controls {
  display: flex;
}

.navbar__profile {
  margin-left: 10px;
  width: 30px;
  height: 30px;
}

.navbar__cart {
  width: 30px;
  height: 30px;
  margin-left: 10px;
}

.navbar__inner {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.navbar__hamburger {
  display: block;
  margin-top: 20px;
  margin-right: 20px;
  float: right;
  width: 1em;
  height: 1em;
  padding: 0;
  cursor: pointer;
  transition: transform .2s ease-in-out;
  border: 0 none;
  background: transparent;
  margin-bottom: 20px;
}

.navbar__hamburger-top,
.navbar__hamburger-middle,
.navbar__hamburger-bottom {
  display: block;
  width: 100%;
  height: .2em;
  margin-bottom: .2em;
  transition: transform .2s ease-in-out;
  border-radius: .05em;
  background: #FFF;
}

.navbar__hamburger-top,
.navbar__hamburger-bottom {
  content: '';
}

.navbar__hamburger-top--toggled {
  transform: translateY(.4em) rotate(135deg);
}

.navbar__hamburger-middle--toggled {
  transform: scale(0);
}

.navbar__hamburger-bottom--toggled {
  transform: translateY(-.4em) rotate(-135deg);
}

.navbar__logo,
.navbar__menuitem {
  padding: 15px 15px 15px 0px;
  border-left: 5px solid transparent;
  color: #FFF;
  text-decoration: none;
  font-size: 17px;
}

.navbar__logo {
  font-size: 30px;
  display: inline-block;
}

.navbar__menuitem {
  display: none;
}

.navbar__menuitem--toggled {
  background-color: $base-background;
  display: flex;
}

.navbar__menuitem:hover {
  background-color: #1976D2;
  border-left-color: #FFF;
}

.slider__categories {
  overflow: hidden;
  overflow-x: scroll;
  white-space: nowrap;

  &::-webkit-scrollbar {
    width: 0px;
  }
}

.slider__item {
  display: inline-block;
  vertical-align: top;
  text-align: center;
  width: 90px;
  margin-left: 5px;
  padding: 5px;
  word-wrap: break-word;

  h4 {
    margin: 0;
    color: #333333;
    font-size: 15px;
    font-weight: 400;
  }
}


.navbar-hidden {
  display: none;
}

@media (min-width: 600px) {
  .navbar__menuitem {
    display: inline-block;
    //background-color: #2196F3;
  }
  .navbar__menuitem:hover {
    background-color: #2196F3;
    box-shadow: inset 0 -5px 0 0 #FFF;
    border-left-color: transparent;
  }
  .navbar__hamburger {
    display: none;
  }
}

@media (max-width: 600px) {
  .navbar__logo {
    font-size: 25px;
  }
  .navbar__search {
    height: 40px;
    width: 75%;
    font-size: 18px;
    font-weight: 100;
  }
  .slider {
    display: none;
  }
  .navbar__profile {
    width: 25px;
    height: 25px;
  }
  .navbar__cart {
    width: 25px;
    height: 25px;
  }
  .slider__item {
    width: 80px;
    margin-left: 0;
    padding: 0;

    h4 {
      font-size: 13px;
    }
  }
}

@media only screen and (max-width: 600px) {
  .slider__categories-control {
    display: none;
  }
}
</style>
