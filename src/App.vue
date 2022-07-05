<template>
<div>
  <MenuHeader/>
  <ListAndMap></ListAndMap>
  <MainFooter/>
</div>
</template>

<script>
import MenuHeader from "@/components/MenuHeader";
import ListAndMap from "@/components/ListAndMap";
import MainFooter from "@/components/MainFooter";

export default {
  components: {
    MainFooter,
    MenuHeader,
    ListAndMap,
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500&display=swap');
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body, html {
    font-family: 'Ubuntu', sans-serif;
    font-size: 16px;
    font-weight: 400;
    height: 100%;
  }
</style>