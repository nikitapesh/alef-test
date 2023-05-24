<template>
  <div class="preview__parents">
    <ul>
      <li @click="changeVisibleChildren" class="preview__parent-item-li">
        <p class="preview__parent-item">{{ parent.name }}, {{ parent.age }} лет</p>
        <TransitionGroup name="list" tag="ul">
          <div class="preview__children-block" v-if="visibleChildren && parent.children != 0">
            <h2 class="preview__header">Дети</h2>
            <InfoChildrenItem
            :parent="parent"
            />
          </div>
          <div class="preview__children-block" v-if="visibleChildren && parent.children == 0">
            <h2 class="preview__header">Детей нет!</h2>
          </div>
        </TransitionGroup>
      </li>
    </ul>
  </div>
</template>

<script>
import InfoChildrenItem from '@/components/InfoChildrenItem.vue'
export default {
  props: ['parent'],
  components: {
    InfoChildrenItem
  },
  data() {
    return {
      visibleChildren: false
    }
  },
  methods: {
    changeVisibleChildren() {
      this.visibleChildren = !this.visibleChildren
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

</style>