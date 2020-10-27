"use strict";
exports.__esModule = true;
var React = require("react");
var CustomBreadcrumb_1 = require("@/components/CustomBreadcrumb");
var OpenCourseForm_1 = require("@/components/OpenCourseForm");
var useCallback = React.useCallback;
var NewOpenCourse = function () {
    var onSubmit = useCallback(function (values) {
    }, []);
    return React.createElement(React.Fragment, null,
        React.createElement(CustomBreadcrumb_1["default"], null),
        React.createElement(OpenCourseForm_1["default"], { onSubmit: onSubmit }));
};
exports["default"] = React.memo(NewOpenCourse);
