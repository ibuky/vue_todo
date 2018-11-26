const vue = new Vue({
    el: '#app',
    data: {
        items: [],  // 一行ごとの情報を保持
        id: 1,      // 登録時にIDを付与
        newItemTitle: '',  // 新規行のタイトルを保持
    },
    methods: {
        /**
         * ブラウザに保存しているTODOリストを取得します。
         * 何も保持していない場合は空のリストを取得します。
         */
        loadTodo: function() {
            this.items = JSON.parse(localStorage.getItem('items')) || [];
        },

        /**
         * 新規行を追加するときの処理。
         * @param {String} title 新規行のタイトル 
         */
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

        /**
         * 現在のTODOリストをブラウザに保持します。
         */
        saveTodo: function() {
            localStorage.setItem('items', JSON.stringify(this.items));
        },

        /**
         * 削除時の処理
         */
        deleteItem: function() {
            // チェックされている行をフィルタリングし、配列を再作成する
            this.items = this.items.filter(item => {
                return item.isChecked === false;
            })
            this.saveTodo();
        },
    },

    /**
     * 初期化処理
     */
    mounted: function() {
        this.loadTodo();
    }
})

