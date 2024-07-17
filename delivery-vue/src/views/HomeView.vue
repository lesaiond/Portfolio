<template>
  <seccion class="banner">
    <div class="container">
      <div class="banner-item">
        <h2 class="banner-item-title">
          Онлайн-сервис <br />
          доставки еды на дом
        </h2>
        <p class="banner-item--subtitle">
          Блюда из любимого ресторана привезет курьер в перчатках, маске и с
          антисептиком
        </p>
      </div>
    </div>
  </seccion>
  <secion class="products">
    <div class="container">
      <div class="products-header">
        <h3 class="products-header--title">Рестораны</h3>

        <input
          type="text"
          class="products-header--search"
          placeholder="Поиск блюд и ресторанов"
          v-model="query"
        />
        <div class="search-result">
          <router-link :to="`/rests?id=${filtered.id}`"
          v-for="filtered in searchRests"
          :key="filtered.id">
          <span>
          {{filtered.title}}
          </span>
          <span style="color: #FFC107;">
            <img src="../assets/img/star.svg" alt="" /> {{ filtered.rating }}
          </span>
          </router-link>
        </div>
      </div>
      <div class="products-wrapper">
        <router-link
          class="products-card"
          v-for="rest in restArray"
          :key="rest.id"
          :to="`/rests?id=${rest.id}`"
        >
          <div class="products-card__image">
            <img :src="getImagePath(rest.image)" alt="" />
          </div>
          <div class="products-card__desciption">
            <div class="products-card__desciption-row">
              <h4 class="products-card__desciption--title">{{ rest.title }}</h4>
              <div class="products-card__desciption--badge">
                {{ rest.time }}
              </div>
            </div>
            <div class="products-card__desciption-row">
              <div class="products-card__desciption--info">
                <div class="products-card__desciption--info-rating">
                  <img src="../assets/img/star.svg" alt="" /> {{ rest.rating }}
                </div>
                <div class="products-card__desciption--info-price">
                  От {{ rest.price }} ₽
                </div>
                <div class="products-card__desciption--info-group">
                  {{ rest.type }}
                </div>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </secion>
</template>

<script setup>
import { computed, ref } from "vue";

const restArray = [
  {
    id: 1,
    title: "Жадина-пицца",
    time: 50,
    rating: 4.5,
    price: 900,
    type: "Пицца",
    image: "image(1).jpg",
  },
  {
    id: 0,
    title: "Пицца плюс",
    time: 50,
    rating: 4.5,
    price: 900,
    type: "Пицца",
    image: "image.jpg",
  },
  {
    id: 2,
    title: "Тануки",
    time: 50,
    rating: 4.5,
    price: 900,
    type: "Пицца",
    image: "image(2).jpg",
  },
  {
    id: 3,
    title: "Точка еды",
    time: 50,
    rating: 4.5,
    price: 900,
    type: "Пицца",
    image: "image(3).jpg",
  },
  {
    id: 11,
    title: "PizzaBurger",
    time: 50,
    rating: 4.5,
    price: 900,
    type: "Пицца",
    image: "image(11).jpg",
  },
  {
    id: 12,
    title: "FoodBand",
    time: 50,
    rating: 4.5,
    price: 900,
    type: "Пицца",
    image: "image(12).jpg",
  },
];
const allArray = [
  {
    id: 1,
    title: "Жадина-пицца",
    time: 50,
    rating: 4.5,
    price: 900,
    type: "Пицца",
    image: "image(1).jpg",
  },
  {
    id: 0,
    title: "Пицца плюс",
    time: 50,
    rating: 4.5,
    price: 900,
    type: "Пицца",
    image: "image.jpg",
  },
  {
    id: 2,
    title: "Тануки",
    time: 50,
    rating: 4.5,
    price: 900,
    type: "Пицца",
    image: "image(2).jpg",
  },
  {
    id: 3,
    title: "Точка еды",
    time: 50,
    rating: 4.5,
    price: 900,
    type: "Пицца",
    image: "image(3).jpg",
  },
  {
    id: 11,
    title: "PizzaBurger",
    time: 50,
    rating: 4.5,
    price: 900,
    type: "Пицца",
    image: "image(11).jpg",
  },
  {
    id: 12,
    title: "FoodBand",
    time: 50,
    rating: 4.5,
    price: 900,
    type: "Пицца",
    image: "image(12).jpg",
  },
      {
      id: 4,
      title: "Ролл с креветкой стандарт",
      description:
        "Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы",
      price: 250,
    },
    {
      id: 5,
      title: "Окинава стандарт",
      description:
        "Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы",
      price: 250,
    },
    {
      id: 6,
      title: "Ясай маки стандарт 185 г",
      description:
        "Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы",
      price: 250,
    },
    {
      id: 7,
      title: "Ролл с креветкой стандарт",
      description: "Калифорния лосось стандарт",
      price: 250,
    },
    {
      id: 8,
      title: "Цезарь маки хl",
      description:
        "Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы",
      price: 250,
    },
    {
      id: 9,
      title: "Ролл с креветкой стандарт",
      description:
        "Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы",
      price: 250,
    },
];



const query = ref("");

const searchRests = computed(() => {
  let arrays = allArray;
  let search = query.value;

  if (search) {
    const filteredArray = arrays.filter((user) =>
      user.title.toLowerCase().includes(search.toLowerCase())
    );
  return filteredArray;
  }
});

const getImagePath = (image) => {
  return new URL(`../assets/img/${image}`, import.meta.url).href;
};
</script>


<style scoped>
  .products-header {
    position: relative;
  }

  .search-result a{
    display: flex;
    justify-content: space-between;
    width: 306px;
    top: 20px; 
    padding: 10px 7px;
    text-decoration: none;
    font-size: 20px;
    color: black;
  }


  .search-result {
    border: 1px solid #d9d9d9;
    position: absolute;
    right: -1px;
    top: 40px;
    background-color: #fff;
    border-radius: 5px;
    z-index: 100;
  }

</style>