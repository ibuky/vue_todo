const vue = new Vue({
    el: '#app',
    data: {
        items: [],
        id: 1,
        newItemTitle: '',
    },
    methods: {
        loadTodo: function() {
            this.items = JSON.parse(localStorage.getItem('items')) || [];
        },

        makeTodo: function(title) {
            this.items.push({
                id: this.id,
                title: title,
                isChecked: false,
            });
            this.id++;
            this.newItemTitle = '';
            this.saveTodo();
        },

        saveTodo: function() {
            localStorage.setItem('items', JSON.stringify(this.items));
        },

        deleteItem: function() {
            this.items = this.items.filter(item => {
                return item.isChecked === false;
            })
            this.saveTodo();
        },
    },
    
    mounted: function() {
        this.loadTodo();
    }
})

