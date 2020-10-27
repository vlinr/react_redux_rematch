"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var React = require("react");
var CustomBreadcrumb_1 = require("@/components/CustomBreadcrumb");
var Filter_1 = require("@/components/Filter");
var antd_1 = require("antd");
var index_module_less_1 = require("../OpenCourse/index.module.less");
var icons_1 = require("@ant-design/icons");
var useCallback = React.useCallback;
var Panel = antd_1.Collapse.Panel;
var showFilterItem = {
    liveTime: false, createTime: true, openTime: false, state: true, showClass: true, subject: true, recommend: true
};
var dataSource = [
    {
        id: '1',
        videoName: '这是视频的名称',
        state: false,
        sortKey: 1
    },
    {
        id: '2',
        videoName: '这是视频的名称',
        state: false,
        sortKey: 2
    },
    {
        id: '3',
        videoName: '这是视频的名称',
        state: false,
        sortKey: 3
    },
    {
        id: '4',
        videoName: '这是视频的名称',
        state: false,
        sortKey: 4
    },
];
var columns = [
    {
        title: '排序',
        dataIndex: 'sortKey',
        key: 'sortKey',
        width: 100,
        render: function (text, record, index) {
            return React.createElement(antd_1.Input, { value: index, onBlur: function () { return console.log('失去焦点了'); } });
        }
    },
    {
        title: '资源ID',
        dataIndex: 'id',
        key: 'id'
    },
    {
        title: '视频名称',
        dataIndex: 'videoName',
        key: 'videoName'
    },
    {
        title: '是否试听',
        dataIndex: 'state',
        key: 'state',
        width: 100,
        render: function (text, index) {
            return React.createElement(antd_1.Switch, { defaultChecked: true });
        }
    },
    {
        title: '操作',
        dataIndex: 'method',
        key: 'method',
        width: 250,
        render: function (text, index) {
            return React.createElement(React.Fragment, null,
                React.createElement(antd_1.Button, { disabled: true, style: { marginRight: 10 } }, "\u4E0A\u79FB"),
                React.createElement(antd_1.Button, { type: "primary", style: { marginRight: 10 } }, "\u4E0B\u79FB"),
                React.createElement(antd_1.Popconfirm, { title: "\u60A8\u786E\u5B9A\u8981\u79FB\u9664\u672C\u6761\u6570\u636E?", okText: "\u786E\u8BA4", cancelText: "\u53D6\u6D88" },
                    React.createElement(antd_1.Button, { type: "danger" }, "\u79FB\u9664")));
        }
    },
];
var VideoCourse = function () {
    var addBtnClickHandle = useCallback(function () {
        console.log('点击了新建按钮');
    }, []);
    var onSearch = function (values) {
        console.log(values);
    };
    return React.createElement("div", { className: index_module_less_1["default"].videoCourse },
        React.createElement(CustomBreadcrumb_1["default"], null),
        React.createElement(Filter_1["default"], __assign({ addBtnClickHandle: addBtnClickHandle }, showFilterItem, { addBtnText: "\u65B0\u5EFA\u89C6\u9891\u8BFE", onSearch: onSearch })),
        React.createElement(antd_1.Collapse, { accordion: true, expandIcon: function (_a) {
                var isActive = _a.isActive;
                return React.createElement(icons_1.CaretDownOutlined, { rotate: isActive ? 180 : 0 });
            }, className: "site-collapse-custom-collapse" },
            React.createElement(Panel, { className: "site-collapse-custom-panel", header: React.createElement("div", { className: index_module_less_1["default"].header },
                    React.createElement("div", { className: index_module_less_1["default"].img, style: { backgroundImage: "url(" + require('@/assets/images/free_stock_photo.jpg') + ")" } }),
                    React.createElement("div", { className: index_module_less_1["default"].info },
                        React.createElement("h2", null, "\u8BFE\u7A0B\u540D\u79F0\uFF1A\u3010\u5EFA\u54E5\u6570\u5B66\u3011\u5FC5\u4FEE2\uFF08\u65B0\u8BFE\u6539\u4EBA\u6559B\u7248\uFF09"),
                        React.createElement("p", null, "\u4E3B\u8BB2\u8001\u5E08\uFF1A\u8D24\u54E5"),
                        React.createElement("div", { className: index_module_less_1["default"].tag },
                            React.createElement("span", null, "\u5EFA\u54E5\u6570\u5B66/\u9AD8\u4E00"))),
                    React.createElement("div", { className: index_module_less_1["default"].button },
                        React.createElement(antd_1.Button, { type: "primary", style: { marginRight: 15 }, onClick: function (e) { e.nativeEvent.stopImmediatePropagation(); e.stopPropagation(); } }, "\u7F16\u8F91"),
                        React.createElement(antd_1.Popconfirm, { title: "\u60A8\u786E\u5B9A\u8981\u5220\u9664\u672C\u6761\u6570\u636E\u5417?", okText: "\u786E\u8BA4", cancelText: "\u53D6\u6D88", onCancel: function (e) { e === null || e === void 0 ? void 0 : e.nativeEvent.stopImmediatePropagation(); e === null || e === void 0 ? void 0 : e.stopPropagation(); }, onConfirm: function (e) { e === null || e === void 0 ? void 0 : e.nativeEvent.stopImmediatePropagation(); e === null || e === void 0 ? void 0 : e.stopPropagation(); } },
                            React.createElement(antd_1.Button, { type: "danger", onClick: function (e) { e.nativeEvent.stopImmediatePropagation(); e.stopPropagation(); } }, "\u5220\u9664")))), key: "1" },
                React.createElement("div", { className: index_module_less_1["default"].content },
                    React.createElement(antd_1.Button, { type: "primary", style: { marginBottom: 20 } }, "\u6DFB\u52A0\u89C6\u9891\u8D44\u6E90"),
                    React.createElement(antd_1.Table, { pagination: {
                            current: 1,
                            total: 100,
                            pageSize: 10,
                            showQuickJumper: {
                                goButton: React.createElement(antd_1.Button, { style: { marginLeft: 10 } }, "\u8DF3\u8F6C")
                            },
                            showTotal: function (total) { return "\u5171 " + total + " \u6761\u6570\u636E "; }
                        }, rowKey: function (record) { return record.id; }, style: { textAlign: 'center' }, bordered: true, dataSource: dataSource, columns: columns }))),
            React.createElement(Panel, { className: "site-collapse-custom-panel", header: React.createElement("div", { className: index_module_less_1["default"].header },
                    React.createElement("div", { className: index_module_less_1["default"].img, style: { backgroundImage: "url(" + require('@/assets/images/free_stock_photo.jpg') + ")" } }),
                    React.createElement("div", { className: index_module_less_1["default"].info },
                        React.createElement("h2", null, "\u8BFE\u7A0B\u540D\u79F0\uFF1A\u3010\u5EFA\u54E5\u6570\u5B66\u3011\u5FC5\u4FEE2\uFF08\u65B0\u8BFE\u6539\u4EBA\u6559B\u7248\uFF09"),
                        React.createElement("p", null, "\u4E3B\u8BB2\u8001\u5E08\uFF1A\u8D24\u54E5"),
                        React.createElement("div", { className: index_module_less_1["default"].tag },
                            React.createElement("span", null, "\u5EFA\u54E5\u6570\u5B66/\u9AD8\u4E00"))),
                    React.createElement("div", { className: index_module_less_1["default"].button },
                        React.createElement(antd_1.Button, { type: "primary", style: { marginRight: 15 }, onClick: function (e) { e.nativeEvent.stopImmediatePropagation(); e.stopPropagation(); } }, "\u7F16\u8F91"),
                        React.createElement(antd_1.Popconfirm, { title: "\u60A8\u786E\u5B9A\u8981\u5220\u9664\u672C\u6761\u6570\u636E\u5417?", okText: "\u786E\u8BA4", cancelText: "\u53D6\u6D88", onCancel: function (e) { e === null || e === void 0 ? void 0 : e.nativeEvent.stopImmediatePropagation(); e === null || e === void 0 ? void 0 : e.stopPropagation(); }, onConfirm: function (e) { e === null || e === void 0 ? void 0 : e.nativeEvent.stopImmediatePropagation(); e === null || e === void 0 ? void 0 : e.stopPropagation(); } },
                            React.createElement(antd_1.Button, { type: "danger", onClick: function (e) { e.nativeEvent.stopImmediatePropagation(); e.stopPropagation(); } }, "\u5220\u9664")))), key: "2" },
                React.createElement("div", { className: index_module_less_1["default"].content },
                    React.createElement(antd_1.Button, { type: "primary", style: { marginBottom: 20 } }, "\u6DFB\u52A0\u89C6\u9891\u8D44\u6E90"),
                    React.createElement(antd_1.Table, { pagination: {
                            current: 1,
                            total: 100,
                            pageSize: 10,
                            showQuickJumper: {
                                goButton: React.createElement(antd_1.Button, { style: { marginLeft: 10 } }, "\u8DF3\u8F6C")
                            },
                            showTotal: function (total) { return "\u5171 " + total + " \u6761\u6570\u636E "; }
                        }, rowKey: function (record) { return record.id; }, style: { textAlign: 'center' }, bordered: true, dataSource: dataSource, columns: columns }))),
            React.createElement(Panel, { className: "site-collapse-custom-panel", header: React.createElement("div", { className: index_module_less_1["default"].header },
                    React.createElement("div", { className: index_module_less_1["default"].img, style: { backgroundImage: "url(" + require('@/assets/images/free_stock_photo.jpg') + ")" } }),
                    React.createElement("div", { className: index_module_less_1["default"].info },
                        React.createElement("h2", null, "\u8BFE\u7A0B\u540D\u79F0\uFF1A\u3010\u5EFA\u54E5\u6570\u5B66\u3011\u5FC5\u4FEE2\uFF08\u65B0\u8BFE\u6539\u4EBA\u6559B\u7248\uFF09"),
                        React.createElement("p", null, "\u4E3B\u8BB2\u8001\u5E08\uFF1A\u8D24\u54E5"),
                        React.createElement("div", { className: index_module_less_1["default"].tag },
                            React.createElement("span", null, "\u5EFA\u54E5\u6570\u5B66/\u9AD8\u4E00"))),
                    React.createElement("div", { className: index_module_less_1["default"].button },
                        React.createElement(antd_1.Button, { type: "primary", style: { marginRight: 15 }, onClick: function (e) { e.nativeEvent.stopImmediatePropagation(); e.stopPropagation(); } }, "\u7F16\u8F91"),
                        React.createElement(antd_1.Popconfirm, { title: "\u60A8\u786E\u5B9A\u8981\u5220\u9664\u672C\u6761\u6570\u636E\u5417?", okText: "\u786E\u8BA4", cancelText: "\u53D6\u6D88", onCancel: function (e) { e === null || e === void 0 ? void 0 : e.nativeEvent.stopImmediatePropagation(); e === null || e === void 0 ? void 0 : e.stopPropagation(); }, onConfirm: function (e) { e === null || e === void 0 ? void 0 : e.nativeEvent.stopImmediatePropagation(); e === null || e === void 0 ? void 0 : e.stopPropagation(); } },
                            React.createElement(antd_1.Button, { type: "danger", onClick: function (e) { e.nativeEvent.stopImmediatePropagation(); e.stopPropagation(); } }, "\u5220\u9664")))), key: "3" },
                React.createElement("div", { className: index_module_less_1["default"].content },
                    React.createElement(antd_1.Button, { type: "primary", style: { marginBottom: 20 } }, "\u6DFB\u52A0\u89C6\u9891\u8D44\u6E90"),
                    React.createElement(antd_1.Table, { pagination: {
                            current: 1,
                            total: 100,
                            pageSize: 10,
                            showQuickJumper: {
                                goButton: React.createElement(antd_1.Button, { style: { marginLeft: 10 } }, "\u8DF3\u8F6C")
                            },
                            showTotal: function (total) { return "\u5171 " + total + " \u6761\u6570\u636E "; }
                        }, rowKey: function (record) { return record.id; }, style: { textAlign: 'center' }, bordered: true, dataSource: dataSource, columns: columns })))),
        React.createElement("div", { style: { textAlign: 'right' } },
            React.createElement(antd_1.Pagination, { style: { marginTop: 20 }, current: 1, total: 100, pageSize: 10, showQuickJumper: {
                    goButton: React.createElement(antd_1.Button, { style: { marginLeft: 10 } }, "\u8DF3\u8F6C")
                }, showTotal: function (total) { return "\u5171 " + total + " \u6761\u6570\u636E "; } })));
};
exports["default"] = React.memo(VideoCourse);
