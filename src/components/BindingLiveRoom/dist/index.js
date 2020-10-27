"use strict";
exports.__esModule = true;
//绑定直播间弹出
var React = require("react");
var antd_1 = require("antd");
var SwitchButton_1 = require("@/components/SwitchButton");
var index_module_less_1 = require("./index.module.less");
// const { useCallback } = React;
var Search = antd_1.Input.Search;
var dataSource = [
    {
        liveName: '数学测试版',
        subject: '建哥数学/高三',
        liveRoomId: '11011'
    },
    {
        liveName: '数学测试版',
        subject: '建哥数学/高三',
        liveRoomId: '11012'
    }, {
        liveName: '数学测试版',
        subject: '建哥数学/高三',
        liveRoomId: '11013'
    }, {
        liveName: '数学测试版',
        subject: '建哥数学/高三',
        liveRoomId: '11014'
    }, {
        liveName: '数学测试版',
        subject: '建哥数学/高三',
        liveRoomId: '11015'
    }
];
var columns = [
    {
        title: '直播间ID',
        dataIndex: 'liveRoomId',
        key: 'liveRoomId'
    },
    {
        title: '直播间名称',
        dataIndex: 'liveName',
        key: 'liveName'
    },
    {
        title: '学科/年级',
        dataIndex: 'subject',
        key: 'subject'
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
var BindingLiveRoom = function (_a) {
    var visible = _a.visible, title = _a.title, handleOk = _a.handleOk, handleCancel = _a.handleCancel, width = _a.width, addLiveRoomClick = _a.addLiveRoomClick, searchHandle = _a.searchHandle;
    return React.createElement(antd_1.Modal, { title: title, visible: visible, onOk: function () { return handleOk === null || handleOk === void 0 ? void 0 : handleOk(); }, width: width, onCancel: function () { return handleCancel === null || handleCancel === void 0 ? void 0 : handleCancel(); } },
        React.createElement("div", { className: index_module_less_1["default"].bindBox },
            React.createElement(antd_1.Button, { type: "primary", onClick: function () { return addLiveRoomClick(); } }, "\u65B0\u5EFA\u76F4\u64AD\u95F4"),
            React.createElement(Search, { placeholder: "\u641C\u7D22\u76F4\u64AD\u95F4\u540D", style: { width: 300 }, onSearch: function (v) { return searchHandle(v); }, enterButton: true })),
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
exports["default"] = React.memo(BindingLiveRoom);
