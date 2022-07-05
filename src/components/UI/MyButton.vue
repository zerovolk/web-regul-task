<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-button'
}
</script>

<style lang="scss" scoped>
.button {
  background: rgba(255, 251, 249, 0.6);
  border: 1px solid #00ACA2;
  border-radius: 16px;
  padding: 14px 32px;
  cursor: pointer;
  transition: all 600ms ease;
  color: #00ACA2;

  &:hover {
    background: #00ACA2;
    color: #fff;
  }
}
</style>