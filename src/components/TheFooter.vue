<template>
  <div class="footer">
    <div class="footer__content container">
      <p>all rights reserved</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.footer{
  background: #FAFAFA;
  box-shadow: 0px 1px 0px rgba(17, 17, 17, 0.1);
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 999;
}
.footer__content{
  text-align: center;
  padding: 30px 0px;
}
.footer__content p{
  font-size: 13px;
}
</style>