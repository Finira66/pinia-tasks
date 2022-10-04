<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script>

</script>

<style lang="scss">
  .button {
    height: 40px;
    border: none;
    background: #6600c9;
    color: #fff;
    border-radius: 4px;
    padding: 4px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &--white {
      border: 1px solid #2c2c2c;
      color: #2c2c2c;
      background: #fff;
      padding: 2px 12px;
      height: 35px;
    }
  }
</style>
