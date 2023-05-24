<template>
  <button class="form__button" :class="color">{{ placeholder }}</button>
</template>

<script>
export default {
  props: ['placeholder', 'color']
}
</script>

<style>
.form__button{
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 100px;
  outline: none;
  cursor: pointer;
}
.form__button.white{
  border: 2px solid #01A7FD;
  background: transparent;
  color: #01A7FD;
  padding-left: 40px;
  position: relative;
  transition: 0.5s;
}
.form__button.white:hover{
  background: #f6f6f6;
}
.form__button.blue{
  background: #01A7FD;
  color: #fff;
  border: 2px solid #01A7FD;
  margin-top: 20px;
  transition: 0.5s;
}
.form__button.white::before{
  content: '';
  background-image: url('@/assets/btn-plus.svg');
  width: 16px;
  height: 16px;
  left: 16px;
  background-size: cover;
  position: absolute;
}
.form__button.blue:hover{
  background: #009dec;
  border: 2px solid #009dec;
}
</style>