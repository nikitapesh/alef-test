<template>
  <ul v-for="children in parent.children" :key="children">
    <li>
      <p class="preview__children-item">{{ children.name }}, {{ children.age }} лет</p>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['parent']
}
</script>

<style>

</style>