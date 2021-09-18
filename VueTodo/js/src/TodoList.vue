<template>
  <div>
    <h1>This is a Todo List</h1>
    {{fetchTodos}}
    <ul>
      <li
      v-for="todo in todos[0]"
      :key="todo.id"
      v-bind:class="{completed: todo.completed}"
      @click="markTodo(todo)"
      >
        <TodoListItem v-bind:task-name="todo.title"></TodoListItem>...<span @click="removeTodo(todo)">X</span>
      </li>
    </ul>
    <span>New Task: {{title}}</span><br>
    <input v-model="title"/><button @click="addTodo">Add Task</button>
  </div>
</template>

<script>
import TodoListItem from "./components/TodoListItem";

export default {
  name: "todo-container",
  components: {TodoListItem},
  data: () => ({
    todos: [],
    title: "",
    completed: true
  }),
  computed: {
    fetchTodos: function (){
      fetch('https://jsonplaceholder.typicode.com/users/1/todos')
        .then(response => response.json())
        .then(json => {this.todos.push(json); console.log(this.todos)})
    }
  },
  methods: {
    removeTodo: function (todoItem){
      this.todos[0].splice(this.todos[0].indexOf(todoItem), 1)
    },
    addTodo: function (){
        if(this.title !== ""){
          const newTodoItem = {
            completed: false,
            id: this.todos[0].length + 1,
            title: this.title,
            userId: 1
          }

          this.todos[0].push(newTodoItem);
        }

        this.title = ""
    },
    markTodo: function(todoItem){
      this.todos[0][this.todos[0].indexOf(todoItem)].completed = !this.todos[0][this.todos[0].indexOf(todoItem)].completed
    }
  }
}
</script>

<style scoped>
  .completed {
    text-decoration: line-through;
  }
</style>
