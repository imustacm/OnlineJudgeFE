import Vue from 'vue'
/**
 * 说明：
 *      1.fixed字段可以接受true，也可以接受"left/right"
 *      
 * */
    
let thead = {
    // 题目列表
    topicList: [
        { fixed: true, prop: 'topic_id', label: '题目编号', width: '150' },
        { fixed: false, prop: 'topic_name', label: '题目名称', width: '150' },
        { fixed: false, prop: 'correct', label: '正确', width: '120' },
        { fixed: false, prop: 'submit', label: '提交', width: '120' },
        { fixed: false, prop: 'accuracy', label: '正确率', width: '120' }
    ],
    // 成就排名
}
let tableData = {
    // 获取表头信息
    getTableData: function (typer) {
        for (const key in thead) {
            if(key == typer){
                console.log(1);
                
                return thead[key]
            }
            return false
        }
    }
}
Vue.prototype.td = tableData
