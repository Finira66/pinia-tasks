<template>
  <div class="task">
    <div class="task__name">
      {{ title }}
    </div>
    <div class="task__actions">
      <button
          class="task__button"
          @click="$emit('remove')"
      >
        <img src="/images/icons/trash.svg" alt="icon" class="task__icon task__icon--grey">
      </button>
      <button
          class="task__button"
          @click="$emit('favourite')">
        <img src="/images/icons/heart.svg"
             alt="icon"
             class="task__icon"
             :class="{'task__icon--red' : favourite}"
        >
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  favourite: Boolean
})

const emit = defineEmits(['favourite', 'remove'])
</script>

<style lang="scss">
.task {
  padding: 16px;
  background-color: #fff;
  box-shadow: 0 0 5px rgba(#ccc, 0.5);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__name {
    font-weight: 600;
    color: #2c2c2c;
    font-size: 22px;
  }

  &__button {
    border: none;
    background: transparent;
    cursor: pointer;
  }

  &__actions {
    display: flex;
    align-items: center;
  }

  &__icon {
    width: 22px;
    height: auto;
    opacity: 0.5;

    &--red {
      opacity: 1;
      filter: invert(14%) sepia(72%) saturate(7427%) hue-rotate(6deg) brightness(92%) contrast(102%);
    }
  }
}
</style>
