"use strict";
exports.__esModule = true;
//选择直播课弹出
var React = require("react");
var antd_1 = require("antd");
var SwitchButton_1 = require("@/components/SwitchButton");
// const { useCallback } = React;
var Search = antd_1.Input.Search;
var dataSource = [
    {
        liveName: '数学测试版',
        teacher: '建哥',
        subject: '建哥数学/高三',
        liveRoomId: '11011',
        opeTnime: '2020-09-09 12:00'
    },
    {
        liveName: '数学测试版',
        teacher: '建哥',
        subject: '建哥数学/高三',
        liveRoomId: '11012',
        opeTnime: '2020-09-09 12:00'
    }, {
        liveName: '数学测试版',
        teacher: '建哥',
        subject: '建哥数学/高三',
        liveRoomId: '11013',
        opeTnime: '2020-09-09 12:00'
    }, {
        liveName: '数学测试版',
        teacher: '建哥',
        subject: '建哥数学/高三',
        liveRoomId: '11014',
        opeTnime: '2020-09-09 12:00'
    }, {
        liveName: '数学测试版',
        teacher: '建哥',
        subject: '建哥数学/高三',
        liveRoomId: '11015',
        opeTnime: '2020-09-09 12:00'
    }
];
var columns = [
    {
        title: '直播课名称',
        dataIndex: 'liveName',
        key: 'liveName'
    },
    {
        title: '主讲老师',
        dataIndex: 'teacher',
        key: 'teacher'
    },
    {
        title: '学科',
        dataIndex: 'subject',
        key: 'subject'
    },
    {
        title: '直播间ID',
        dataIndex: 'liveRoomId',
        key: 'liveRoomId'
    },
    {
        title: '开课时间',
        dataIndex: 'opeTnime',
        key: 'opeTnime'
    },
    {
        title: '操作',
        dataIndex: 'method',
        key: 'method',
        width: 110,
        align: 'center',
        render: function () {
            return React.createElement(SwitchButton_1["default"], { selectText: "\u9009\u62E9", selectdText: "\u53D6\u6D88\u9009\u62E9", onChange: function (select) {
                    console.log(select, '这个是否选择');
                } });
        }
    },
];
var SelectLiveCourse = function (_a) {
    var visible = _a.visible, title = _a.title, handleOk = _a.handleOk, handleCancel = _a.handleCancel, width = _a.width, searchHandle = _a.searchHandle;
    return React.createElement(antd_1.Modal, { title: title, visible: visible, onOk: function () { return handleOk === null || handleOk === void 0 ? void 0 : handleOk(); }, width: width, onCancel: function () { return handleCancel === null || handleCancel === void 0 ? void 0 : handleCancel(); } },
        React.createElement(Search, { placeholder: "\u641C\u7D22\u76F4\u64AD\u8BFE\u540D\u79F0", style: { marginBottom: 20, width: 300 }, onSearch: function (v) { return searchHandle(v); }, enterButton: true }),
        React.createElement(antd_1.Table, { pagination: {
                current: 1,
                total: 100,
                pageSize: 10,
                showQuickJumper: {
                    goButton: React.createElement(antd_1.Button, { style: { marginLeft: 10 } }, "\u8DF3\u8F6C")
                },
                showTotal: function (total) { return "\u5171 " + total + " \u6761\u6570\u636E "; }
            }, rowKey: function (record) { return record.liveRoomId; }, style: { textAlign: 'center' }, bordered: true, dataSource: dataSource, columns: columns }));
};
exports["default"] = React.memo(SelectLiveCourse);
