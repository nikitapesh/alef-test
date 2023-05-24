<template>
  <div class="preview container">
    <p v-if="allParents == 0" class="preview__description-null">Ни одного пользователя не было создано!</p>
    <div class="preview__content" v-else-if="allParents != 0">
      <h2 class="preview__header">Персональные данные</h2>
      <p class="preview__desc-mini">*чтобы посмотреть информацию о детях, нажмите на родителя</p>
      <InfoParentItem
      v-for="parent in allParents"
      :key="parent"
      :parent="parent"
      />
    </div>
  </div>
</template>

<script>
import InfoParentItem from '@/components/InfoParentItem.vue'

export default {
  components: {
    InfoParentItem
  },
  computed: {
    allParents() {
      return this.$store.getters.allParents
    },
	},
}
</script>

<style>
.preview__description-null{
  text-align: center;
  margin-top: 20px;
}
.preview{
  margin-top: 100px;
  margin-bottom: 100px;
}
.preview ul{
  list-style-type: none;
}
.preview__parent-item{
  font-family: 'Montserrat-Bold';
}
.preview__parent-item-li{
  cursor: pointer;
  margin-bottom: 15px;
}
.preview__children-item{
  background: #F1F1F1;
  border-radius: 5px;
  width: fit-content;
  padding: 10px 20px;
  font-family: 'Montserrat-Bold';
  margin-bottom: 15px;
}
.preview__header{
  font-size: 16px;
  font-family: 'Montserrat-Light';
  margin-top: 15px;
}
.preview__desc-mini{
  color: #b8b8b8;
  margin-bottom: 20px;
  font-size: 14px;
}
</style>