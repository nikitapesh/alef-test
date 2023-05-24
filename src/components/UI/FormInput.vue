<template>
  <div class="form-item">
    <input :type="inputType" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" class="form-input" :style="{ width: inputWidth + '%' }" required>
    <label class="form-label">{{ placeholder }}</label>
  </div>
</template>

<script>
export default {
  props: ['placeholder', 'inputWidth', 'inputType', 'inputVModel', 'modelValue'],
  emits: ['update:modelValue'],
}
</script>

<style>
.form-item {
  display: inline-block;
  vertical-align: top;
  position: relative;
  width: 100%;
  margin-top: 10px;
}

.form-input {
  /* width: 95%; */
  padding: 20px 15px;
  border: 1px solid #F1F1F1;
  border-radius: 4px;
  outline: none;
}

.form-label {
  position: absolute;
  pointer-events: none;
  left: 16px;
  /* right: 15px; */
  top: 10px;
  white-space: nowrap;
  overflow: hidden;
  line-height: 40px;
  transition: .3s;
  font-size: 14px;
  color: rgba(17, 17, 17, 0.48);
}

.form-input:focus~.form-label,
.form-input:not(:focus):valid~.form-label {
  top: -9px;
  font-size: 10px;
}
</style>