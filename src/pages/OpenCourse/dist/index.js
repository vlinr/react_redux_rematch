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
var index_module_less_1 = require("./index.module.less");
var icons_1 = require("@ant-design/icons");
var react_router_dom_1 = require("react-router-dom");
var Registration_1 = require("@/components/Registration");
var SelectLiveCourse_1 = require("@/components/SelectLiveCourse");
var AddLiveCourse_1 = require("@/components/AddLiveCourse");
var BindingLiveRoom_1 = require("@/components/BindingLiveRoom");
var useCallback = React.useCallback, useState = React.useState;
var Panel = antd_1.Collapse.Panel;
var Option = antd_1.Select.Option;
var showFilterItem = {
    liveTime: true, createTime: false, openTime: false, state: true, showClass: true, subject: true, recommend: true
};
var dataSource = [
    {
        id: '1',
        type: '数学/高三',
        teacher: '建哥',
        liveName: '数学直播',
        studyTime: '2020-09-09 12:00'
    },
    {
        id: '2',
        type: '数学/高三',
        teacher: '建哥',
        liveName: '数学直播',
        studyTime: '2020-09-09 12:00'
    }, {
        id: '3',
        type: '数学/高三',
        teacher: '建哥',
        liveName: '数学直播',
        studyTime: '2020-09-09 12:00'
    }, {
        id: '4',
        type: '数学/高三',
        teacher: '建哥',
        liveName: '数学直播',
        studyTime: '2020-09-09 12:00'
    },
];
var OpenCourse = function () {
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
            title: '学科/年纪',
            dataIndex: 'type',
            key: 'type'
        },
        {
            title: '直播间ID',
            dataIndex: 'id',
            key: 'id'
        },
        {
            title: '开课时间',
            dataIndex: 'studyTime',
            key: 'studyTime'
        },
        {
            title: '操作',
            dataIndex: 'method',
            key: 'method',
            width: 270,
            render: function (text, index) {
                return React.createElement(React.Fragment, null,
                    React.createElement(antd_1.Button, { style: { marginRight: 10 }, onClick: function () { return (setLiveTyep('edit'), setAddLiveCourseVisible(true)); } }, "\u4FEE\u6539"),
                    React.createElement(antd_1.Button, { type: "primary", style: { marginRight: 10 } }, "\u6DFB\u52A0\u8D44\u6E90"),
                    React.createElement(antd_1.Popconfirm, { title: "\u60A8\u786E\u5B9A\u8981\u79FB\u9664\u672C\u6761\u6570\u636E?", okText: "\u786E\u8BA4", cancelText: "\u53D6\u6D88" },
                        React.createElement(antd_1.Button, { type: "danger" }, "\u79FB\u9664")));
            }
        },
    ];
    var history = react_router_dom_1.useHistory();
    var addBtnClickHandle = useCallback(function () {
        console.log('点击了新建按钮');
        history.push('/newOpenCourse');
    }, [history]);
    var editBtnClickHandle = useCallback(function () {
        console.log('点击了新建按钮');
        history.push('/editOpenCourse');
    }, [history]);
    var _a = useState(false), visible = _a[0], setVisible = _a[1];
    var _b = useState(false), selectLiveCourseVisible = _b[0], setSelectLiveCourseVisible = _b[1];
    var _c = useState(false), addLiveCourseVisible = _c[0], setAddLiveCourseVisible = _c[1];
    var _d = useState(false), bindLiveRoomVisible = _d[0], setBindLiveRoomVisible = _d[1];
    var _e = useState('new'), liveTyep = _e[0], setLiveTyep = _e[1];
    var handleCancel = useCallback(function () {
        setVisible(false);
    }, [setVisible]);
    var handleOk = useCallback(function () {
        setVisible(false);
    }, [setVisible]);
    var handleSelectCancel = useCallback(function () {
        setSelectLiveCourseVisible(false);
    }, [setSelectLiveCourseVisible]);
    var handleSelectOk = useCallback(function () {
        setSelectLiveCourseVisible(false);
    }, [setSelectLiveCourseVisible]);
    var handleLiveCourseCancel = useCallback(function () {
        setAddLiveCourseVisible(false);
    }, [setAddLiveCourseVisible]);
    var handleLiveCourseOk = useCallback(function (values) {
        console.log(values, '这是添加直播课提交的内容');
        setAddLiveCourseVisible(false);
    }, [setAddLiveCourseVisible]);
    var handleBindLiveRoomCancel = useCallback(function () {
        setBindLiveRoomVisible(false);
    }, [setBindLiveRoomVisible]);
    var handleBindLiveRoomOk = useCallback(function () {
        setBindLiveRoomVisible(false);
    }, [setBindLiveRoomVisible]);
    var addLiveRoomClick = useCallback(function () {
        console.log('弹出新建直播间');
    }, []);
    var searchHandle = useCallback(function (v) {
        console.log('这是搜索的内容', v);
    }, []);
    var onSearch = function (values) {
        console.log(values);
    };
    return React.createElement("div", { className: index_module_less_1["default"].openCourse },
        React.createElement(CustomBreadcrumb_1["default"], null),
        React.createElement(Filter_1["default"], __assign({ addBtnClickHandle: addBtnClickHandle }, showFilterItem, { addBtnText: "\u65B0\u5EFA\u516C\u5F00\u8BFE", onSearch: onSearch })),
        React.createElement(antd_1.Collapse, { accordion: true, expandIcon: function (_a) {
                var isActive = _a.isActive;
                return React.createElement(icons_1.CaretDownOutlined, { rotate: isActive ? 180 : 0 });
            }, className: "site-collapse-custom-collapse" },
            React.createElement(Panel, { className: "site-collapse-custom-panel", header: React.createElement("div", { className: index_module_less_1["default"].header },
                    React.createElement(antd_1.Select, { defaultValue: 0, className: index_module_less_1["default"].select, onClick: function (e) { e.nativeEvent.stopImmediatePropagation(); e.stopPropagation(); } },
                        React.createElement(Option, { value: 0 }, "\u5DF2\u4E0A\u7EBF"),
                        React.createElement(Option, { value: 1 }, "\u5DF2\u5BA1\u6838"),
                        React.createElement(Option, { value: 2 }, "\u5DF2\u4E0B\u7EBF")),
                    React.createElement("div", { className: index_module_less_1["default"].img, style: { backgroundImage: "url(" + require('@/assets/images/free_stock_photo.jpg') + ")" } }),
                    React.createElement("div", { className: index_module_less_1["default"].info + " " + index_module_less_1["default"].w450 },
                        React.createElement("h2", null, "\u8BFE\u7A0B\u540D\u79F0\uFF1A\u3010\u5EFA\u54E5\u6570\u5B66\u3011\u5FC5\u4FEE2\uFF08\u65B0\u8BFE\u6539\u4EBA\u6559B\u7248\uFF09"),
                        React.createElement("p", { style: { marginBottom: 0 } }, "\u5F00\u8BFE\u65F6\u95F4\uFF1A2020-07-12 12\uFF1A00"),
                        React.createElement("p", { style: { marginBottom: 0 } }, "\u521B\u5EFA\u65F6\u95F4\uFF1A2020-07-12 12\uFF1A00"),
                        React.createElement("p", { style: { marginBottom: 5 } }, "\u4E3B\u8BB2\u8001\u5E08\uFF1A\u8D24\u54E5"),
                        React.createElement("div", { className: index_module_less_1["default"].tag },
                            React.createElement("span", null, "\u5EFA\u54E5\u6570\u5B66/\u9AD8\u4E00"),
                            React.createElement("span", null, "\u5EFA\u54E5\u6570\u5B66/\u9AD8\u4E8C"),
                            React.createElement("span", null, "\u63A8\u8350"))),
                    React.createElement("div", { className: "" + index_module_less_1["default"].button },
                        React.createElement(antd_1.Button, { type: "primary", style: { marginRight: 15 }, onClick: function (e) { e.nativeEvent.stopImmediatePropagation(); e.stopPropagation(); setVisible(true); } }, "\u62A5\u540D\u60C5\u51B5"),
                        React.createElement(antd_1.Button, { type: "primary", style: { marginRight: 15 }, onClick: function (e) { e.nativeEvent.stopImmediatePropagation(); e.stopPropagation(); editBtnClickHandle(); } }, "\u7F16\u8F91"),
                        React.createElement(antd_1.Popconfirm, { title: "\u60A8\u786E\u5B9A\u8981\u5220\u9664\u672C\u6761\u6570\u636E\u5417?", okText: "\u786E\u8BA4", cancelText: "\u53D6\u6D88", onCancel: function (e) { e === null || e === void 0 ? void 0 : e.nativeEvent.stopImmediatePropagation(); e === null || e === void 0 ? void 0 : e.stopPropagation(); }, onConfirm: function (e) { e === null || e === void 0 ? void 0 : e.nativeEvent.stopImmediatePropagation(); e === null || e === void 0 ? void 0 : e.stopPropagation(); } },
                            React.createElement(antd_1.Button, { type: "danger", onClick: function (e) { e.nativeEvent.stopImmediatePropagation(); e.stopPropagation(); } }, "\u5220\u9664")))), key: "1" },
                React.createElement("div", { className: index_module_less_1["default"].content },
                    React.createElement(antd_1.Button, { type: "primary", style: { marginBottom: 20, marginRight: 20 }, onClick: function () { return setSelectLiveCourseVisible(true); } }, "\u9009\u62E9\u76F4\u64AD\u8BFE"),
                    React.createElement(antd_1.Button, { type: "primary", style: { marginBottom: 20, marginRight: 20 }, onClick: function () { return (setLiveTyep('new'), setAddLiveCourseVisible(true)); } }, "\u6DFB\u52A0\u76F4\u64AD\u8BFE"),
                    React.createElement(antd_1.Button, { type: "primary", style: { marginBottom: 20, marginRight: 20 }, onClick: function () { return setBindLiveRoomVisible(true); } }, "\u7ED1\u5B9A\u76F4\u64AD\u95F4"),
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
                    React.createElement(antd_1.Select, { defaultValue: 0, className: index_module_less_1["default"].select, onClick: function (e) { e.nativeEvent.stopImmediatePropagation(); e.stopPropagation(); } },
                        React.createElement(Option, { value: 0 }, "\u5DF2\u4E0A\u7EBF"),
                        React.createElement(Option, { value: 1 }, "\u5DF2\u5BA1\u6838"),
                        React.createElement(Option, { value: 2 }, "\u5DF2\u4E0B\u7EBF")),
                    React.createElement("div", { className: index_module_less_1["default"].img, style: { backgroundImage: "url(" + require('@/assets/images/free_stock_photo.jpg') + ")" } }),
                    React.createElement("div", { className: index_module_less_1["default"].info + " " + index_module_less_1["default"].w450 },
                        React.createElement("h2", null, "\u8BFE\u7A0B\u540D\u79F0\uFF1A\u3010\u5EFA\u54E5\u6570\u5B66\u3011\u5FC5\u4FEE2\uFF08\u65B0\u8BFE\u6539\u4EBA\u6559B\u7248\uFF09"),
                        React.createElement("p", null, "\u4E3B\u8BB2\u8001\u5E08\uFF1A\u8D24\u54E5"),
                        React.createElement("div", { className: index_module_less_1["default"].tag },
                            React.createElement("span", null, "\u5EFA\u54E5\u6570\u5B66/\u9AD8\u4E00"))),
                    React.createElement("div", { className: index_module_less_1["default"].button },
                        React.createElement(antd_1.Button, { type: "primary", style: { marginRight: 15 }, onClick: function (e) { e.nativeEvent.stopImmediatePropagation(); e.stopPropagation(); setVisible(true); } }, "\u62A5\u540D\u60C5\u51B5"),
                        React.createElement(antd_1.Button, { type: "primary", style: { marginRight: 15 }, onClick: function (e) { e.nativeEvent.stopImmediatePropagation(); e.stopPropagation(); editBtnClickHandle(); } }, "\u7F16\u8F91"),
                        React.createElement(antd_1.Popconfirm, { title: "\u60A8\u786E\u5B9A\u8981\u5220\u9664\u672C\u6761\u6570\u636E\u5417?", okText: "\u786E\u8BA4", cancelText: "\u53D6\u6D88", onCancel: function (e) { e === null || e === void 0 ? void 0 : e.nativeEvent.stopImmediatePropagation(); e === null || e === void 0 ? void 0 : e.stopPropagation(); }, onConfirm: function (e) { e === null || e === void 0 ? void 0 : e.nativeEvent.stopImmediatePropagation(); e === null || e === void 0 ? void 0 : e.stopPropagation(); } },
                            React.createElement(antd_1.Button, { type: "danger", onClick: function (e) { e.nativeEvent.stopImmediatePropagation(); e.stopPropagation(); } }, "\u5220\u9664")))), key: "2" },
                React.createElement("div", { className: index_module_less_1["default"].content },
                    React.createElement(antd_1.Button, { type: "primary", style: { marginBottom: 20, marginRight: 20 }, onClick: function () { return setSelectLiveCourseVisible(true); } }, "\u9009\u62E9\u76F4\u64AD\u8BFE"),
                    React.createElement(antd_1.Button, { type: "primary", style: { marginBottom: 20, marginRight: 20 }, onClick: function () { return (setLiveTyep('new'), setAddLiveCourseVisible(true)); } }, "\u6DFB\u52A0\u76F4\u64AD\u8BFE"),
                    React.createElement(antd_1.Button, { type: "primary", style: { marginBottom: 20, marginRight: 20 }, onClick: function () { return setBindLiveRoomVisible(true); } }, "\u7ED1\u5B9A\u76F4\u64AD\u95F4"),
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
                    React.createElement(antd_1.Select, { defaultValue: 0, className: index_module_less_1["default"].select, onClick: function (e) { e.nativeEvent.stopImmediatePropagation(); e.stopPropagation(); } },
                        React.createElement(Option, { value: 0 }, "\u5DF2\u4E0A\u7EBF"),
                        React.createElement(Option, { value: 1 }, "\u5DF2\u5BA1\u6838"),
                        React.createElement(Option, { value: 2 }, "\u5DF2\u4E0B\u7EBF")),
                    React.createElement("div", { className: index_module_less_1["default"].img, style: { backgroundImage: "url(" + require('@/assets/images/free_stock_photo.jpg') + ")" } }),
                    React.createElement("div", { className: index_module_less_1["default"].info + " " + index_module_less_1["default"].w450 },
                        React.createElement("h2", null, "\u8BFE\u7A0B\u540D\u79F0\uFF1A\u3010\u5EFA\u54E5\u6570\u5B66\u3011\u5FC5\u4FEE2\uFF08\u65B0\u8BFE\u6539\u4EBA\u6559B\u7248\uFF09"),
                        React.createElement("p", null, "\u4E3B\u8BB2\u8001\u5E08\uFF1A\u8D24\u54E5"),
                        React.createElement("div", { className: index_module_less_1["default"].tag },
                            React.createElement("span", null, "\u5EFA\u54E5\u6570\u5B66/\u9AD8\u4E00"))),
                    React.createElement("div", { className: index_module_less_1["default"].button },
                        React.createElement(antd_1.Button, { type: "primary", style: { marginRight: 15 }, onClick: function (e) { e.nativeEvent.stopImmediatePropagation(); e.stopPropagation(); setVisible(true); } }, "\u62A5\u540D\u60C5\u51B5"),
                        React.createElement(antd_1.Button, { type: "primary", style: { marginRight: 15 }, onClick: function (e) { e.nativeEvent.stopImmediatePropagation(); e.stopPropagation(); editBtnClickHandle(); } }, "\u7F16\u8F91"),
                        React.createElement(antd_1.Popconfirm, { title: "\u60A8\u786E\u5B9A\u8981\u5220\u9664\u672C\u6761\u6570\u636E\u5417?", okText: "\u786E\u8BA4", cancelText: "\u53D6\u6D88", onCancel: function (e) { e === null || e === void 0 ? void 0 : e.nativeEvent.stopImmediatePropagation(); e === null || e === void 0 ? void 0 : e.stopPropagation(); }, onConfirm: function (e) { e === null || e === void 0 ? void 0 : e.nativeEvent.stopImmediatePropagation(); e === null || e === void 0 ? void 0 : e.stopPropagation(); } },
                            React.createElement(antd_1.Button, { type: "danger", onClick: function (e) { e.nativeEvent.stopImmediatePropagation(); e.stopPropagation(); } }, "\u5220\u9664")))), key: "3" },
                React.createElement("div", { className: index_module_less_1["default"].content },
                    React.createElement(antd_1.Button, { type: "primary", style: { marginBottom: 20, marginRight: 20 }, onClick: function () { return setSelectLiveCourseVisible(true); } }, "\u9009\u62E9\u76F4\u64AD\u8BFE"),
                    React.createElement(antd_1.Button, { type: "primary", style: { marginBottom: 20, marginRight: 20 }, onClick: function () { return (setLiveTyep('new'), setAddLiveCourseVisible(true)); } }, "\u6DFB\u52A0\u76F4\u64AD\u8BFE"),
                    React.createElement(antd_1.Button, { type: "primary", style: { marginBottom: 20, marginRight: 20 }, onClick: function () { return setBindLiveRoomVisible(true); } }, "\u7ED1\u5B9A\u76F4\u64AD\u95F4"),
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
                }, showTotal: function (total) { return "\u5171 " + total + " \u6761\u6570\u636E "; } })),
        React.createElement(Registration_1["default"], { visible: visible, handleCancel: handleCancel, handleOk: handleOk, width: 900, title: "\u62A5\u540D\u60C5\u51B5" }),
        React.createElement(AddLiveCourse_1["default"], { visible: addLiveCourseVisible, handleCancel: handleLiveCourseCancel, handleOk: handleLiveCourseOk, width: 500, title: liveTyep == 'new' ? "添加直播课" : "修改直播课" }),
        React.createElement(SelectLiveCourse_1["default"], { searchHandle: searchHandle, visible: selectLiveCourseVisible, handleCancel: handleSelectCancel, handleOk: handleSelectOk, width: 900, title: "\u9009\u62E9\u76F4\u64AD\u8BFE" }),
        React.createElement(BindingLiveRoom_1["default"], { searchHandle: searchHandle, addLiveRoomClick: addLiveRoomClick, visible: bindLiveRoomVisible, handleCancel: handleBindLiveRoomCancel, handleOk: handleBindLiveRoomOk, width: 900, title: "\u7ED1\u5B9A\u76F4\u64AD\u95F4" }));
};
exports["default"] = React.memo(OpenCourse);
