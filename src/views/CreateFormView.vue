<template>
  <div class="form__container">
    <form class="form" @submit="createParentMethods">
      <h2>Персональные данные</h2>
      <FormInput
      :placeholder="'Имя'"
      :inputWidth="95"
      :inputType="'text'"
      v-model="createParent.name"
      />
      <FormInput
      :placeholder="'Возраст'"
      :inputWidth="95"
      :inputType="'number'"
      v-model="createParent.age"
      />
      <div class="form__head">
        <h2>Дети (макс. 5)</h2>
        <FormButton
        :placeholder="'Добавить ребенка'"
        :color="'white'"
        @click="addChildrenItem"
        v-if="createParent.children.length < 5"
        />
      </div>
      <TransitionGroup name="list">
      <CreateFormChildrenItem
      v-for="(children, index) in createParent.children"
      :key="children"
      :children="children"
      :index="index"
      @deleteChildren="deleteChildren"
      />
      </TransitionGroup>
      <FormButton
      :placeholder="'Сохранить'"
      :color="'blue'"
      />
    </form>
  </div>
</template>

<script>
import FormInput from "@/components/UI/FormInput.vue";
import FormButton from "@/components/UI/FormButton.vue";
import CreateFormChildrenItem from "@/components/CreateFormChildrenItem.vue";

export default {
  components: {
    FormInput,
    FormButton,
    CreateFormChildrenItem
  },
  data() {
    return{
      createParent: {
        name: null,
        age: null,
        children: []
      }
    }
  },
  methods: {
    addChildrenItem(e) {
      e.preventDefault()
      if (this.createParent.children.length < 5) {
        this.createParent.children.push({name: null, age: null})
        console.log(this.createParent.children.length <= 5);
      } else {
        console.error('Stop')
      }
    },
    createParentMethods(e) {
      e.preventDefault()
      this.allParents.push(this.createParent)
      this.createParent = {
        name: null,
        age: null,
        children: []
      }
    },
    deleteChildren(index) {
      this.createParent.children.splice(index, 1)
    }
  },
  computed: {
		allParents() {
			return this.$store.getters.allParents
		},
	},
}
</script>

<style>
.form__container{
  max-width: 616px;
  margin: 0 auto;
  margin-top: 30px;
  margin-top: 100px;
  margin-bottom: 100px;
}
.form__container h2{
  color: #111111;
  font-size: 16px;
}
.form__head{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 33px;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>