"use strict";
exports.__esModule = true;
var React = require("react");
var antd_1 = require("antd");
var dataSource = [
    {
        name: '张三',
        signUpTime: '2020-09-09 12:00',
        reachTime: '2020-09-09 12:00',
        downTime: '2020-09-09 12:00'
    },
    {
        name: '洗吧',
        signUpTime: '2020-09-09 12:00',
        reachTime: '2020-09-09 12:00',
        downTime: '2020-09-09 12:00'
    },
    {
        name: '13246456',
        signUpTime: '2020-09-09 12:00',
        reachTime: '2020-09-09 12:00',
        downTime: '2020-09-09 12:00'
    },
    {
        name: '4',
        signUpTime: '2020-09-09 12:00',
        reachTime: '2020-09-09 12:00',
        downTime: '2020-09-09 12:00'
    },
];
var columns = [
    {
        title: '报名者',
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: '报名时间',
        dataIndex: 'signUpTime',
        key: 'signUpTime'
    },
    {
        title: '到课时间',
        dataIndex: 'reachTime',
        key: 'reachTime'
    },
    {
        title: '下课时间',
        dataIndex: 'downTime',
        key: 'downTime'
    }
];
var Registration = function (_a) {
    var visible = _a.visible, title = _a.title, handleOk = _a.handleOk, handleCancel = _a.handleCancel, width = _a.width;
    return React.createElement(antd_1.Modal, { title: title, visible: visible, onOk: function () { return handleOk === null || handleOk === void 0 ? void 0 : handleOk(); }, width: width, onCancel: function () { return handleCancel === null || handleCancel === void 0 ? void 0 : handleCancel(); } },
        React.createElement(antd_1.Table, { pagination: {
                current: 1,
                total: 100,
                pageSize: 10,
                showQuickJumper: {
                    goButton: React.createElement(antd_1.Button, { style: { marginLeft: 10 } }, "\u8DF3\u8F6C")
                },
                showTotal: function (total) { return "\u5171 " + total + " \u6761\u6570\u636E "; }
            }, rowKey: function (record) { return record.name; }, style: { textAlign: 'center' }, bordered: true, dataSource: dataSource, columns: columns }));
};
exports["default"] = React.memo(Registration);
