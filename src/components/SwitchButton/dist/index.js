"use strict";
exports.__esModule = true;
//一个基于button的切换按钮
//选择直播课弹出
var React = require("react");
var antd_1 = require("antd");
var useState = React.useState, useCallback = React.useCallback;
var SwitchButton = function (props) {
    var _a = props.selectdText, selectdText = _a === void 0 ? '选中' : _a, _b = props.selectText, selectText = _b === void 0 ? '取消选中' : _b, _c = props.defaultSelectd, defaultSelectd = _c === void 0 ? false : _c, onChange = props.onChange, _d = props.selectClassName, selectClassName = _d === void 0 ? 'danger' : _d, _e = props.noSelectClassName, noSelectClassName = _e === void 0 ? 'primary' : _e;
    var _f = useState(defaultSelectd), select = _f[0], setSelect = _f[1];
    var selectAndCancelHandle = useCallback(function () {
        var sel = select;
        setSelect(!sel);
        onChange === null || onChange === void 0 ? void 0 : onChange(!sel);
    }, [select, setSelect, onChange]);
    return React.createElement(React.Fragment, null,
        React.createElement(antd_1.Button, { type: !select ? noSelectClassName : selectClassName, onClick: selectAndCancelHandle }, !select ? selectText : selectdText));
};
exports["default"] = React.memo(SwitchButton);
