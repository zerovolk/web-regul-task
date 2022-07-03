<template>
<div>
  <MenuHeader/>
  <ListAndMap></ListAndMap>
</div>
</template>

<script>
import MenuHeader from "@/components/MenuHeader";
import ListAndMap from "@/components/ListAndMap";

export default {
  components: {
    MenuHeader,
    ListAndMap
  }
}
</script>

<style>

  * {
    @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500&display=swap');
    /*font-size: 16px;*/
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