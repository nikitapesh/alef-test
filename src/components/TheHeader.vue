<template>
  <div class="header">
    <div class="header__content container">
      <img src="@/assets/logo.svg" alt="">
      <div class="header__nav">
        <ul>
          <li>
            <router-link to="/create-form" class="header__nav-link">Форма</router-link>
          </li>
          <li>
            <router-link to="/" class="header__nav-link">Превью</router-link>
          </li>
        </ul>
      </div>
      <div class="header__item"></div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.header{
  background: #fff;
  box-shadow: 0px 1px 0px rgba(17, 17, 17, 0.1);
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 999;
}
.header__content{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0px;
}
.header__nav ul{
  display: flex;
  list-style-type: none;
}
.header__nav ul li{
  margin: 0px 12px;
}
.header__nav-link{
  color: rgba(17, 17, 17, 0.48);
  text-decoration: none;
  font-size: 14px;
  transition: 0.5s;
}
.header__nav-link:hover{
  color: rgb(0, 0, 0);
}
</style>