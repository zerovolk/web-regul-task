<template>
  <div class="list-apartment__page-list">
    <div class="list-apartment__arrowL">
      <i class="fa-solid fa-angle-left"></i>
    </div>
    <ul class="list-apartment__pages">
      <li class="list-apartment__page">1</li>
      <li class="list-apartment__page">2</li>
      <li class="list-apartment__page">3</li>
    </ul>
    <div class="list-apartment__arrowR">
      <i class="fa-solid fa-angle-right"></i>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.list-apartment__page-list {
  margin: 5% 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  .list-apartment__arrowL,
  .list-apartment__arrowR {
    border-radius: 50%;
    width: 34px;
    height: 34px;
    line-height: 36px;
    cursor: pointer;
    transition: background 400ms ease;

    &:hover {
      background: #33BDB5;
    }
  }

  .list-apartment__pages {
    list-style: none;

    .list-apartment__page {
      display: inline-block;
      width: 34px;
      height: 34px;
      line-height: 34px;
      border-radius: 50%;
      margin: 0 4px;
      cursor: pointer;
      transition: background 400ms ease;

      &:hover {
        background: #33BDB5;
      }
    }
  }
}
</style>