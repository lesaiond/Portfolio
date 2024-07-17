<template>
  <div
    class="cart-modal_overlay"
    :class="{ open: isOpen }"
    @click.self="closeModal"
  >
    <div class="card-modal">
      <div class="cart-modal__header">
        <h2 class="cart-modal__header--title">Корзина</h2>
        <span class="cart-modal__header--close" @click="closeModal">
          <img src="../assets/img/Vector(1).svg" alt="close" />
        </span>
      </div>

      <div class="cart-modal__body">
        <div v-for="item in cartItems" :key="item.id" class="cart-item">
          <p class="cart-title">{{ item.title }}</p>
          <div class="cart-controls">
            <div class="cart-item__controls--price">
              {{ item.count * item.price }} ₽
            </div>
            <button
              class="btn btn-outline"
              @click="handelCounter(item, -1)"
              :disabled="item.count === 0"
            >
              -
            </button>
            <div class="cart-item__controls--count">{{ item.count }}</div>
            <button class="btn btn-outline" @click="handelCounter(item, 1)">
              +
            </button>
          </div>
        </div>
      </div>

      <div class="cart-modal__footer">
        <div class="cart-modal__footer--price">{{ totalPrice }} ₽</div>
        <div class="cart-modal__footer--controls">
          <button class="btn btn-primary" :disabled="totalPrice === 0">
            Оформить заказ
          </button>
          <button class="btn btn-outline" @click="closeModal">Отмена</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const { isOpen } = defineProps({ isOpen: Boolean });

const emit = defineEmits(["toggleModal"]);
const closeModal = () => {
  emit("toggleModal");
};

const cartItems = ref([]);

for (let i = 0; i < localStorage.length; i++) {
  let key = localStorage.key(i);
  if (key < 20) {
    let das = localStorage.getItem(key);
    let toArray = JSON.parse(das);
    cartItems.value.push(toArray);
  }
}

const handelCounter = (item, num) => {
  if (num > 0) {
    item.count++;
  } else if (item.count > 0) {
    item.count--;
  }
};

const totalPrice = computed(() => {
  return cartItems.value.reduce(
    (total, item) => total + item.count * item.price,
    0
  );
});
console.log("Modal is Open");
</script>

<style scoped>
.cart-modal_overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  display: none;
}
button {
  transition: all 0.5s;
}

.cart-modal_overlay.open {
  display: flex;
}

.card-modal {
  width: 100%;
  max-width: 780px;
  padding: 40px 45px;
  background-color: #fff;
  border-radius: 5px;
}

.cart-modal__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 48px;
}

.cart-modal__header--title {
  color: #000;
  font-size: 36px;
  font-weight: 700;
  margin: 0;
}

.cart-modal__header--close {
  cursor: pointer;
}

.cart-modal__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 50px;
}

.cart-modal__footer--price {
  border-radius: 5px;
  background: #262626;
  color: #fafafa;
  font-size: 20px;
  font-weight: 700;
  padding: 15px 20px;
  min-width: 120px;
  text-align: center;
}

.cart-modal__footer--controls {
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.cart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
}

.cart-item:not(:last-child) {
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid #d9d9d9;
}

.cart-item__title {
  color: #000;
  font-size: 18px;
  font-weight: 400;
  margin: 0;
}

.cart-controls {
  display: flex;
  align-items: center;
}

.cart-controls button {
  border: 1px solid #40a9ff;
  color: #40a9ff;
}

.cart-item__controls--count {
  margin: auto 15px;
}

.cart-item__controls--price {
  margin-right: 47px;
  color: #000;
  font-size: 20px;
  font-weight: 700;
}

button.btn.btn-outline:disabled {
  border: 1px solid #aaefff;
  color: #aaefff;
  cursor: not-allowed;
}

.btn.btn-primary:disabled {
  border: 1px solid #aaefff;
  color: #aaefff;
  cursor: not-allowed;
}
</style>