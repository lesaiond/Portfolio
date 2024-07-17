<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-box">
        <router-link to="/" class="footer-logo logo">
          <img src="../assets/img/logo.png" alt="" />
        </router-link>
        <div class="footer-nav">
          <ul>
            <li><a href="#">Ресторанам</a></li>
            <li><a href="#">Курьерам</a></li>
            <li><a href="#">Пресс-центр</a></li>
            <li><a href="#">Контакты</a></li>
          </ul>
        </div>
        <div class="footer-social">
          <a href="#"><img src="../assets/img/insta.png" alt="instagram" /></a>
          <a href="#"><img src="../assets/img/fc.png" alt="facebook" /></a>
          <a href="#"><img src="../assets/img/wk.png" alt="wkontakte" /></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  display: flex;
  align-items: center;
  min-height: 156px;
  padding: 60px 0;
}

.footer-box {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 36px;
  flex-wrap: wrap;
}

.footer-nav {
  flex-grow: 1;
}
.footer-nav ul li {
  color: #595959;
  font-size: 18px;
  font-weight: 400;
}

.footer-nav ul {
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
  flex-wrap: wrap;
  gap: 15px;
}

.footer-social {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
}

.footer-social img {
  height: 25px;
}
</style>