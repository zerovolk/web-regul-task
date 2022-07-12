<template>
  <div class="main">
    <div class="list-apartment">
      <list-item/>
      <list-pages/>
    </div>
    <div class="yandex-map">
      <yandex-map/>
    </div>
  </div>
</template>

<script>
import ListItem from "@/components/cards/ListItem";
import ListPages from "@/components/layouts/ListPages";
import YandexMap from "@/components/maps/YandexMap";

export default {
  components: {
    ListItem,
    ListPages,
    YandexMap
  }


}
</script>

<style lang="scss" scoped>
  .main {
    height: 100%;
    display: flex;

  .list-apartment {
    width: 40%;
    height: 90%;
    background: #cfcfcf;
    }

  .yandex-map {
    width: 60%;
    }
  }
</style>