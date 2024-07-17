<template>
  <secion class="products">
    <div class="container">
      <div class="products-wrapper" id="goods-container">
        <div class="products-card" v-for="goods in goodsArray" :key="goods.id">
          <div class="products-card__image">
            <img :src="getImagePath(goods.id)" alt="" />
          </div>
          <div class="products-card__desciption">
            <div class="products-card__desciption-row">
              <h5 class="products-card__desciption--name">
                {{ goods.title }}
              </h5>
            </div>
            <div class="products-card__desciption-row">
              <p class="products-card__desciption--text">
                {{ goods.description }}
              </p>
            </div>
            <div class="products-card__desciption-row">
              <div class="products-card__desciption--controls">
                <button class="btn btn-primary" @click="buyList(goods)">
                  В корзину
                  <img src="../assets/img/karzina.svg" alt="user" />
                </button>
                <span class="products-card__desciption-controls--price"
                  >{{ goods.price }} ₽</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </secion>
</template>

<script setup>
const goodsArray = [
  {
    id: 4,
    title: "Ролл с креветкой стандарт",
    description:
      "Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы",
    price: 250,
    count: 1,
  },
  {
    id: 5,
    title: "Окинава стандарт",
    description:
      "Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы",
    price: 250,
    count: 1,
  },
  {
    id: 6,
    title: "Ясай маки стандарт 185 г",
    description:
      "Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы",
    price: 250,
    count: 1,
  },
  {
    id: 7,
    title: "Ролл с креветкой стандарт",
    description: "Калифорния лосось стандарт",
    price: 250,
    count: 1,
  },
  {
    id: 8,
    title: "Цезарь маки хl",
    description:
      "Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы",
    price: 250,
    count: 1,
  },
  {
    id: 9,
    title: "Ролл с креветкой стандарт",
    description:
      "Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы",
    price: 250,
    count: 1,
  },
];

const buyList = (data) => {
  console.log("sf", data);
  const goods = JSON.stringify(data);
  localStorage.setItem(`${data.id}`, goods);
};

const getImagePath = (id) => {
  return new URL(`../assets/img/image(${id}).jpg`, import.meta.url).href;
};
</script>

<style scoped>
.btn-primary {
  transition: all 0.3s;
}
  .btn-primary:active {
  margin-top: -2px;
}
</style>