import Vue from 'vue'

let thead = {
    // 题目列表
    topicList: [
        { fixed: false, prop: 'date', label: '题目编号', width: '150' },
        { fixed: false, prop: 'date', label: '题目名称', width: '150' },
        { fixed: false, prop: 'name', label: '正确', width: '120' },
        { fixed: false, prop: 'province', label: '提交', width: '120' },
        { fixed: false, prop: 'city', label: '正确率', width: '120' }
    ],
    // 成就排名
}
let tableData = {
    // 获取表头信息
    getTableData: function (typer) {
        for (const key in thead) {
            if(key == typer){
                return thead[key]
            }
        }
        return false
    }
}
Vue.prototype.td = tableData
