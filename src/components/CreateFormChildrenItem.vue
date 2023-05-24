<template>
  <div class="form__line">
    <FormInput
    :placeholder="'Имя'"
    :inputWidth="80"
    :inputType="'text'"
    v-model="children.name"
    />
    <FormInput
    :placeholder="'Возраст'"
    :inputWidth="80"
    :inputType="'number'"
    v-model="children.age"
    />
    <p class="form__line-delete" @click="deleteChildren(index)">Удалить</p>
  </div>
</template>

<script>
import FormInput from "@/components/UI/FormInput.vue";

export default {
  props: ['children', 'index'],
  components: {
    FormInput
  },
  methods: {
    deleteChildren(index) {
      this.$emit('deleteChildren', index)
    }
  }
}
</script>

<style>
.form__line{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
.form__line-delete{
  font-size: 14px;
  color: #01A7FD;
  cursor: pointer;
}
</style>