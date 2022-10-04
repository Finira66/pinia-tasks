<template>
  <input
      type="text"
      class="search"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :placeholder="placeholder">
</template>

<script setup>
  const props = defineProps({
    placeholder: String,
    modelValue: String
  })

  const emit = defineEmits(['update:modelValue'])
</script>

<style lang="scss">
.search {
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 0 5px #ccc;
  background: #fff;
  height: 40px;
  padding: 4px 16px;
  &::placeholder {
    color: gray;
  }
}
</style>
