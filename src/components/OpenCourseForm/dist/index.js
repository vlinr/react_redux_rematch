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
//公开课新建或者修改页面
var React = require("react");
var antd_1 = require("antd");
// import CustomBreadcrumb from '@/components/CustomBreadcrumb';
var CustomBraftEditor_1 = require("@/components/CustomBraftEditor");
var icons_1 = require("@ant-design/icons");
// import styles from './index.module.less';
var useCallback = React.useCallback, useState = React.useState;
var Item = antd_1.Form.Item;
var Option = antd_1.Select.Option, OptGroup = antd_1.Select.OptGroup;
var FORM_LAYOUT = {
    labelCol: { span: 3 },
    wrapperCol: { span: 15 }
};
function getBase64(img, callback) {
    var reader = new FileReader();
    reader.addEventListener('load', function () { return callback(reader.result); });
    reader.readAsDataURL(img);
}
function beforeUpload(file) {
    var isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        antd_1.message.error('格式错误，支支持JPG或PNG');
    }
    var isLt5M = file.size / 1024 / 1024 < 5;
    if (!isLt5M) {
        antd_1.message.error('图片超过大小，5M');
    }
    return isJpgOrPng && isLt5M;
}
var OpenCourseForm = function (_a) {
    var onSubmit = _a.onSubmit;
    var onFinish = useCallback(function (values) {
        onSubmit(values);
    }, [onSubmit]);
    var _b = useState(''), imgUrl = _b[0], setImgUrl = _b[1];
    var handleChange = function (info) {
        getBase64(info.file.originFileObj, function (imgUrl) { return setImgUrl(imgUrl); });
    };
    var _c = useState(null), editorState = _c[0], setEditorState = _c[1];
    return React.createElement(antd_1.Form, __assign({ onFinish: onFinish }, FORM_LAYOUT, { hideRequiredMark: true, initialValues: {} }),
        React.createElement(Item, { name: "coverMap", label: '\u8BFE\u7A0B\u8BE6\u60C5\u5C01\u9762', help: '建议图片比例：16：9' },
            React.createElement(antd_1.Upload, { name: "avatar", listType: "picture-card", className: "avatar-uploader", showUploadList: false, beforeUpload: beforeUpload, fileList: [], onChange: handleChange }, imgUrl ? React.createElement("img", { src: imgUrl, alt: "avatar", style: { width: '100%' } }) : React.createElement(icons_1.PlusOutlined, null))),
        React.createElement(Item, { name: "courseName", label: "\u8BFE\u7A0B\u540D\u79F0", rules: [{ required: true, max: 30, message: '请输入课程名称，并且保证在30字以内' }] },
            React.createElement(antd_1.Input, { placeholder: "\u8BF7\u8F93\u5165\u8BFE\u7A0B\u540D\u79F0" })),
        React.createElement(Item, { name: "courseNo", label: "\u8BFE\u7A0B\u7F16\u53F7", rules: [{ required: true, message: '请输入课程编号' }] },
            React.createElement(antd_1.Input, { placeholder: "\u8BF7\u8F93\u5165\u8BFE\u7A0B\u7F16\u53F7" })),
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
                    React.createElement(Option, { value: 8 }, "\u82F1\u8BED")))),
        React.createElement(Item, { label: "\u8BFE\u7A0B\u62A5\u4EF7", name: "price", rules: [{ required: true, message: '最小值为0', min: 0 }] },
            React.createElement(antd_1.InputNumber, { style: { width: "100%" }, placeholder: "\u8BF7\u8F93\u5165\u8BFE\u7A0B\u62A5\u4EF7", min: 0 })),
        React.createElement(Item, { label: "\u914D\u5957\u670D\u52A1\u6709\u6548\u671F", name: "server", rules: [{ required: true, message: '请输入配套服务有效期' }] },
            React.createElement(antd_1.Input, { placeholder: "\u8BF7\u8F93\u5165\u914D\u5957\u670D\u52A1\u6709\u6548\u671F", addonAfter: React.createElement("div", null, "\u6708") })),
        React.createElement(Item, { label: "\u8BFE\u7A0B\u4ECB\u7ECD", name: "courseDesc", rules: [{ required: true, message: '请输入课程介绍' }] },
            React.createElement(CustomBraftEditor_1["default"], { editorState: editorState, setEditorState: setEditorState, defaultValue: '' })),
        React.createElement(Item, { label: "\u662F\u5426\u63A8\u8350", name: "recommend" },
            React.createElement(antd_1.Switch, { defaultChecked: true })),
        React.createElement(antd_1.Row, { style: { textAlign: 'center' } },
            React.createElement(antd_1.Button, { type: "primary", style: { width: 180, height: 40, margin: '30px auto' }, htmlType: "submit" }, "\u63D0\u4EA4")));
};
exports["default"] = React.memo(OpenCourseForm);
