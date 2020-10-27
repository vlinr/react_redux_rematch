"use strict";
exports.__esModule = true;
//添加直播课
var React = require("react");
var antd_1 = require("antd");
var moment_1 = require("moment");
var Form_1 = require("antd/lib/form/Form");
var Item = antd_1.Form.Item;
var OptGroup = antd_1.Select.OptGroup, Option = antd_1.Select.Option;
var useCallback = React.useCallback;
var AddLiveCourse = function (_a) {
    var title = _a.title, visible = _a.visible, handleOk = _a.handleOk, handleCancel = _a.handleCancel, width = _a.width;
    var form = Form_1.useForm()[0];
    var onFinish = useCallback(function (values) {
        handleOk === null || handleOk === void 0 ? void 0 : handleOk(values);
    }, [handleOk]);
    return React.createElement(antd_1.Modal, { title: title, visible: visible, onOk: function () { return form.submit(); }, width: width, onCancel: function () { return handleCancel === null || handleCancel === void 0 ? void 0 : handleCancel(); } },
        React.createElement(antd_1.Form, { hideRequiredMark: true, onFinish: onFinish, form: form },
            React.createElement(Item, { name: ['courseName'], label: "\u8BFE\u7A0B\u540D\u79F0", rules: [{ required: true, message: "请输入课程名称" }] },
                React.createElement(antd_1.Input, { placeholder: "\u8BF7\u8F93\u5165\u8BFE\u7A0B\u540D\u79F0" })),
            React.createElement(Item, { name: ['openTime'], label: "\u5F00\u8BFE\u65F6\u95F4", rules: [{ required: true, message: "请选择开课时间" }] },
                React.createElement(antd_1.DatePicker, { placeholder: "\u8BF7\u9009\u62E9\u5F00\u8BFE\u65F6\u95F4", format: "YYYY-MM-DD HH:mm", showTime: { defaultValue: moment_1["default"]('00:00', 'HH:mm') } })),
            React.createElement(Item, { label: "\u5E74\u7EA7/\u5B66\u79D1", name: "type", rules: [{ required: true, message: '请选择年纪/学科' }] },
                React.createElement(antd_1.Select, { mode: "multiple", style: { width: '100%' }, placeholder: "\u8BF7\u9009\u62E9\u5E74\u7EAA/\u5B66\u79D1" },
                    React.createElement(OptGroup, { label: "\u5E74\u7EA7" },
                        React.createElement(Option, { value: 0 }, "\u521D\u4E00"),
                        React.createElement(Option, { value: 1 }, "\u521D\u4E8C"),
                        React.createElement(Option, { value: 2 }, "\u521D\u4E09"),
                        React.createElement(Option, { value: 3 }, "\u9AD8\u4E00"),
                        React.createElement(Option, { value: 4 }, "\u9AD8\u4E8C"),
                        React.createElement(Option, { value: 5 }, "\u9AD8\u4E09")),
                    React.createElement(OptGroup, { label: "\u5B66\u79D1" },
                        React.createElement(Option, { value: 6 }, "\u8BED\u6587"),
                        React.createElement(Option, { value: 7 }, "\u6570\u5B66"),
                        React.createElement(Option, { value: 8 }, "\u82F1\u8BED"))))));
};
exports["default"] = React.memo(AddLiveCourse);
