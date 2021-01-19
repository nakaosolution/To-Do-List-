var app = new Vue({
    el: '#app',
    data: {
        newItem: "",
        todos: []
    },
    methods: {
        addItem: function (event) {
            //addボダンが押された時 
            // if(inputが空)=>そのまま。
            // else inputの値を配列todosに追加してinputを空にする。
            if (this.newItem == "") {
                return
            }
            var todo = {
                item: this.newItem,
                isDone: false
            }

            this.todos.push(todo);
            this.newItem = "";
        },
        deleteItem: function (index) {
            // deleteボダンが押された時
            // index番号に応じて１つtodos配列から値を削除
            this.todos.splice(index, 1)
        }
    }
})