<template>
  <div class="footer">
    <div class="footer__nav">
      <ul>
        <li class="footer__item">О проекте</li>
        <li class="footer__item">Руководство</li>
        <li class="footer__item">Правила</li>
        <li class="footer__item">Помощь</li>
      </ul>
    </div>
    <div class="footer__sublime"></div>
    <div class="footer__social">
      <div class="footer__icon">
        <i class="fa-brands fa-facebook-f"></i>
      </div>
      <div class="footer__icon">
        <i class="fa-brands fa-twitter"></i>
      </div>
      <div class="footer__icon">
        <i class="fa-brands fa-telegram"></i>
      </div>
    </div>
    <p class="footer__text">2022 &copy; ООО “Понаехали” </p>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer {
  background: #EBEBEC;
  width: 100%;
  height: 130px;
  position: relative;
}
.footer__nav {
  display: block;
  text-align: center;
}

.footer__nav ul {
  list-style: none;
}

.footer__item {
  display: inline-block;
  margin: 22px 18px 14px 18px;
  cursor: pointer;
}

.footer__sublime {
  width: 60%;
  height: 0;
  border: 1px solid #5F5F61;
  position: absolute;
  left: calc(50% - 1180px/2);
  top: calc(50% - 1px/2 + 0.5px);
}

.footer__social {
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 20px;
}

.footer__icon {
  text-align: center;
  width: 24px;
  height: 24px;
  background: #5F5F61;
  border-radius: 50%;
  color: #FFFBF9;
  line-height: 24px;
  margin: 0 18px;
  cursor: pointer;
}

.footer__text {
  text-align: center;
  margin-top: 8px;
  font-size: 14px;
  color: #5F5F61;
}
</style>