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
import ListItem from "@/components/ListItem";
import ListPages from "@/components/ListPages";
import YandexMap from "@/components/YandexMap";

export default {
  components: {
    ListItem,
    ListPages,
    YandexMap
  }


}
</script>

<style scoped>
  .main {
    height: 100%;
    display: flex;

  }
  .list-apartment {
    width: 40%;
    height: 90%;
    background: #cfcfcf;
  }

  .yandex-map {
    /*background: #33BDB5;*/
    width: 60%;
  }



</style>