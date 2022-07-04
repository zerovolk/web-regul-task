<template>
  <div>
    <div class="header">
      <div class="header__top">
        <div class="header__logo"><svg width="64" height="49" viewBox="0 0 70 55" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 6.5C4.92 8.25 6.84 10 11 10C19 10 19 3 27 3C31.16 3 33.08 4.75 35 6.5C36.92 8.25 38.84 10 43 10C51 10 51 3 59 3C63.16 3 65.08 4.75 67 6.5M3 48.5C4.92 50.25 6.84 52 11 52C19 52 19 45 27 45C31.16 45 33.08 46.75 35 48.5C36.92 50.25 38.84 52 43 52C51 52 51 45 59 45C63.16 45 65.08 46.75 67 48.5M3 27.5C4.92 29.25 6.84 31 11 31C19 31 19 24 27 24C31.16 24 33.08 25.75 35 27.5C36.92 29.25 38.84 31 43 31C51 31 51 24 59 24C63.16 24 65.08 25.75 67 27.5" stroke="#00ACA2" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg></div>
        <div class="header__filter">
          <div class="header__search-icon"><i class="fa-solid fa-magnifying-glass"></i></div>
          <div class="header__chooser">
            <p>Сочи</p>
            <span class="header__divider"></span>
            <p>26.04-01.05</p>
            <span class="header__divider"></span>
            <p>3 гостя, 1 питомец</p>
          </div>
        </div>
        <div class="header__buttons">
          <my-button class="header__button">Вход</my-button>
          <my-button class="header__button">Регистрация</my-button>
        </div>
      </div>
      <div class="header__bottom">
        <div class="header__detailed-filter">
          <div class="header__select-menu select-menu">
            <div class="header__title select-menu__title">Тип жилья</div>
            <div class="header__text select-menu__text">какие то фильтры</div>
          </div>
          <div class="header__select-menu select-menu">
            <div class="header__title select-menu__title">Тип аренды</div>
            <div class="header__text select-menu__text">какие то фильтры</div>
          </div>
          <div class="header__select-menu select-menu">
            <div class="header__title select-menu__title">Цена</div>
            <div class="header__text select-menu__text">какие то фильтры</div>
          </div>
        </div>
        <span class="header__divider"></span>
        <div class="header__filter-buttons">
          <div class="header__filter-button header__filter-button--active">Бесплатная отмена</div>
          <div class="header__filter-button header__filter-button--active">Мгновенное подтверждение</div>
          <div class="header__filter-button">Суперхозяин</div>
          <div class="header__filter-button">Горящее предложение</div>
          <!--        <div class="header__filter-button">Что-то еще</div>-->
          <!--        <div class="header__filter-button">И еще что-нибудь</div>-->
          <!--        <div class="header__filter-button">И еще что-то длинное длинное</div>-->
        </div>
        <span class="header__divider"></span>
        <div class="header__all-filters">
          <div class="header__all-filters-btn">
            Все фильтры <i class="fa-solid fa-ellipsis-vertical"></i>
          </div>
          <div class="header__indicator indicator">
            <div class="header__noti-count">3</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.header {
  background: #EBEBEC;
  /*height: 100px;*/
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
}

.header__top, .header__bottom {
  height: 100%;
  display: flex;
  justify-content: space-between;
}

.header__logo {
  padding: 20px;
  margin: 6px 0;
  cursor: pointer;
}

.header__filter {
  display: flex;
  width: 612px;
  height: 52px;
  background: #fff8f9;
  border-radius: 12px;
  padding: 12px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin: 22px 0;
}

.header__search-icon {
  flex: 1;
}

.header__search-icon i {
  cursor: pointer;
  transition: color 600ms ease;
}

.header__search-icon i:hover {
  color: #00ACA2;
}

.header__chooser {
  display: flex;
  justify-content: space-between;
  flex: 10;
}

.header__chooser p {
  cursor: pointer;
  transition: color 600ms ease;
}

.header__chooser p:hover {
  color: #00ACA2;
}

.header__chooser p:last-child {
  margin-right: 12px;
}

.header__divider  {
  width: 28px;
  height: 0;
  border: 1px solid #AFAFB0;
  transform: rotate(90deg);
  align-self: center;
}
/* Кнопка стильная */


.header__buttons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.header__button {
  display: flex;
  margin-right: 20px;
}

.header__bottom {
  justify-content: left;
}

.header__detailed-filter {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}

.header__bottom {
  padding-bottom: 20px;
}
/*    селектор меню (спойлер)    */
.select-menu {
  background: #FFFBF9;
  border-radius: 16px;
  padding: 16px 20px;
  width: 200px;
  position: relative;
  cursor: pointer;
  transition: background 600ms ease;
}

.select-menu:hover {
  background: #33BDB5;
}

.select-menu__title:before,
.select-menu__title:after {
  content: '';
  width: 10px;
  height: 2px;
  background: #000;
  position: absolute;
  top: 25px;

}
.select-menu__title:before {
  transform: rotate(40deg);
  left: 160px;
}
.select-menu__title:after {
  transform: rotate(-40deg);
  left: 168px;
}

.select-menu__text {
  padding-top: 10px;
  display: none;
}

.header__select-menu {
  margin-left: 20px;
}

.header__divider {
  margin: 0 10px;
}

.header__filter-buttons {
  display: flex;
  /*justify-content: left;*/
  align-items: flex-start;
  flex-direction: row;
}

.header__filter-button {
  background: #FFFBF9;
  border: 1px solid #D7D7D8;
  border-radius: 12px;
  padding: 16px;
  margin: 0 2px;
  cursor: pointer;
  transition: all 600ms ease;
}

.header__filter-button:first-child {
  margin-right: 2px;
}

.header__filter-button:hover {
  background: #33BDB5;
}

.header__filter-button--active {
  background: #E6F7F6;
  border: 1px solid #33BDB5;
  border-radius: 12px;
}

.header__all-filters {
  display: flex;
  align-items: center;
  position: relative;
}

.header__all-filters-btn {
  background: #FFFBF9;
  border: 1px solid #D7D7D8;
  border-radius: 12px;
  padding: 16px;
  margin: 0 2px;
  cursor: pointer;
  transition: all 600ms ease;
}

.header__all-filters-btn:hover {
  background: #33BDB5;
}

.header__all-filters-btn .fa-ellipsis-vertical {
  margin: 0 10px;
}

.header__indicator {
  background: #33BDB5;
  border-radius: 40px;
  position: absolute;
  width: 20px;
  height: 20px;
  top: calc(50% - 20px/2 - 21px);
  right: -4px;
}

.header__noti-count {
  font-weight: 400;
  font-size: 10px;
  text-align: center;
  line-height: 20px;
  color: #FFFBF9;
}
</style>