<template>
  <div class="tasks">
    <div class="container">
      <h1 class="tasks__title">Pinia tasks</h1>
      <div class="tasks__row">
        <UISearch
            class="tasks__search"
            placeholder="I need to..."
            v-model="taskName"
            @keyup.enter="addTaskToStore"
        />
        <UIButton class="tasks__button" @click="addTaskToStore">Add</UIButton>
      </div>
      <div class="tasks__content">
        <div class="tasks__actions">
          <UIButton
              class="button--white tasks__action-button"
              @click="showAllTasks"
          >
            All tasks
          </UIButton>
          <UIButton
              class="button--white tasks__action-button"
              @click="showFavouriteTasks"
          >
            Favourite tasks
          </UIButton>
        </div>

        <div class="tasks__text" v-if="store.filteredTasks.length">
          You have {{ store.filteredTasks.length }} tasks left to do.
        </div>
        <h2 class="tasks__title" v-else>
          You have no tasks, add a task
        </h2>

        <div class="tasks__items">
          <MainTask
              class="tasks__item"
              v-for="task in store.filteredTasks"
              :key="task.id"
              :title="task.name"
              :favourite="task.favourite"
              @remove="removeTaskFromStore(task.id)"
              @favourite="setFavourite(task.id)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import {useTaskStore} from '@/stores/task.js'

const taskName = ref('');
const store = useTaskStore();

function addTaskToStore() {
  if (taskName.value !== '') {
    store.addTask(taskName.value);
    taskName.value = '';
  } else {
    alert('Set task name')
  }
}

function setFavourite(id) {
  store.setFavouriteTask(id);
}

function removeTaskFromStore(id) {
  store.removeTask(id);
}

function showFavouriteTasks() {
  store.showFavouriteTasks();
}

function showAllTasks() {
  store.showAllTasks();
}
</script>

<style lang="scss">
body {
  font-family: "Roboto", sans-serif;
  background: #e7e6e6;
}

.container {
  width: 100%;
  max-width: 1240px;
  padding: 0 20px;
  margin: 0 auto;
}

.tasks {
  padding: 60px 0;

  &__title {
    text-align: center;
    margin-bottom: 30px;
  }

  &__row {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
  }

  &__search {
    margin-right: 10px;
  }

  &__button {
    min-width: 90px;
  }

  &__actions {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 30px;
  }

  &__action-button {
    margin-right: 10px;

    &:last-child {
      margin-right: 0;
    }
  }

  &__text {
    margin-bottom: 20px;
    font-size: 16px;
    color: #2c2c2c;
  }

  &__content {
    max-width: 600px;
    margin: 0 auto;
  }

  &__item {
    margin-bottom: 14px;
  }
}
</style>
