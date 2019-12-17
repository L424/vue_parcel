<template>
    <div class="todo-container">
        <ol>
            <li v-for="(item, index) in todos" :key="index">{{ item }}</li>
        </ol>
        <div class="input">
            <input type="text" v-model="item">
            <button v-on:click="submitTodo">提交</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'todo',
        data() {
            return {
                todos: [
                    '1',
                    '2',
                    '3',
                    '4',
                ],
                item: ''
            }
        },
        methods: {
            submitTodo() {
                // this.todos.push(this.item)
                // [...]
                // console.log(this.item)
                this.todos = [...this.todos, this.item];
                // this.todos = this.todos.concat([this.item])
                this.item = ''
            }
        }
    }
</script>

<style>

</style>