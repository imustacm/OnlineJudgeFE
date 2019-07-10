import Vue from 'vue'
/**
 * 说明：
 *      1.fixed字段可以接受true，也可以接受"left/right"
 *      
 * */

let thead = {
    // 题目列表
    topicList: [
        { fixed: true, prop: 'topic_id', label: '题目编号', width: '210' },
        { fixed: false, prop: 'topic_name', label: '题目名称', width: '300' },
        { fixed: false, prop: 'correct', label: '正确', width: '210' },
        { fixed: false, prop: 'submit', label: '提交', width: '210' },
        { fixed: false, prop: 'accuracy', label: '正确率', width: '210' }
    ],
    // 评判状态
    solutionList: [
        { fixed: true, prop: 'solution_id', label: '运行编号', width: '150' },
        { fixed: false, prop: 'username', label: '用户名', width: '200' },
        { fixed: false, prop: 'topic_id', label: '题目编号', width: '150' },
        { fixed: false, prop: 'judgment_results', label: '评判结果 及 抄袭检测', width: '200' },
        { fixed: false, prop: 'memory', label: '内存', width: '120' },
        { fixed: false, prop: 'take_up_time', label: '耗时', width: '120' },
        { fixed: false, prop: 'language', label: '语言', width: '120' },
        { fixed: false, prop: 'code_length', label: '代码长度', width: '120' },
        { fixed: false, prop: 'submission_time', label: '提交时间', width: '200' },
    ],
    // 解题排名
    rankList: [
        { fixed: true, prop: 'ranking', label: '排名', width: '150' },
        { fixed: false, prop: 'user_info', label: '用户头像 及 用户名', width: '240' },
        { fixed: false, prop: 'name', label: '姓名', width: '150' },
        { fixed: false, prop: 'school', label: '学校', width: '200' },
        { fixed: false, prop: 'major', label: '专业班级', width: '200' },
        { fixed: false, prop: 'correct', label: '正确', width: '150' },
        { fixed: false, prop: 'submit', label: '提交', width: '150' },
        { fixed: false, prop: 'accuracy', label: '正确率', width: '150' },
    ],
    // 解题排名
    contestList: [
        { fixed: true, prop: 'competition_number', label: '竞赛编号', width: '180' },
        { fixed: false, prop: 'competition_name', label: '竞赛名称', width: '600' },
        { fixed: false, prop: 'status', label: '状态', width: '180' },
        { fixed: false, prop: 'time', label: '时间', width: '230' },
        { fixed: false, prop: 'auth', label: '权限', width: '200' },
    ],
    // 解题排名
    experimentList: [
        { fixed: true, prop: 'experiment_number', label: '实验编号', width: '180' },
        { fixed: false, prop: 'experiment_name', label: '实验名称', width: '600' },
        { fixed: false, prop: 'status', label: '状态', width: '180' },
        { fixed: false, prop: 'time', label: '时间', width: '230' },
        { fixed: false, prop: 'auth', label: '权限', width: '200' },
    ],
}
let tableData = {
    // 获取表头信息
    getTableData: function (typer) {
        for (const key in thead) {
            if (key == typer) {
                return thead[key]
            }
        }
        return false
    }
}
Vue.prototype.td = tableData
