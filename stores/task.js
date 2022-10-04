import {defineStore} from 'pinia';

export const useTaskStore = defineStore('task', {
    state: () => {
        return {
            tasks: [
                {id: 1, name: 'My first task', favourite: false},
                {id: 2, name: 'My second task', favourite: false},
                {id: 3, name: 'My three task', favourite: true}
            ],
            filtered: false
        }
    },
    getters: {
      filteredTasks: (state) => {
        if (state.filtered) {
            return state.tasks.filter(item => item.favourite === true);
        } else {
            return state.tasks;
        }
      }
    },
    actions: {
        addTask(task) {
            this.tasks.push({
                id: new Date(),
                name: task
            })
        },
        setFavouriteTask(id) {
            let findTask = this.tasks.findIndex(item => item.id === id);
            this.tasks[findTask].favourite = !this.tasks[findTask].favourite;
        },
        removeTask(id) {
            this.tasks = this.tasks.filter(item => item.id !== id);
        },
        showAllTasks() {
            this.filtered = false;
        },
        showFavouriteTasks() {
            this.filtered = true;
        }
    }
})
