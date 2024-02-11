<template>
  <div class="wrapper-header">
    <div>
      <img src="../assets/logo/Logo.svg" alt="logo">
    </div>
    <div>
      <input class="input" type="text" placeholder="Наушники Apple ..." />
    </div>
    <div class="wrapper-header__logo">
      <img src="../assets/icons/Filters.svg" alt="filters">
      <img src="../assets/icons/Basket.svg" alt="basket">
      <img src="../assets/icons/Favorites.svg" alt="favorites">
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.wrapper-header {
  height: 95px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .input {
    border: 1px solid #DCDCDC;
    width: 784px;
    height: 45px;
    border-radius: 10px;
    padding-left: 14px;
  }

  .wrapper-header__logo {
    width: 190px;
    display: flex;
    justify-content: space-between;

    img {
      padding: 10px;
      border-radius: 4px;

      &:hover {
        transition: 0.3s;
        cursor: pointer;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      }
    }
  }
}
</style>