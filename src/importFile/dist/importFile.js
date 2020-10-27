"use strict";
//处理import()无法传入变量的问题，单个导入文件，直接在外部使用
exports.__esModule = true;
var Files = {
    'EditOpenCourse': function () { return Promise.resolve().then(function () { return require('@/pages/EditOpenCourse'); }); },
    'NewOpenCourse': function () { return Promise.resolve().then(function () { return require('@/pages/NewOpenCourse'); }); },
    'OpenCourse': function () { return Promise.resolve().then(function () { return require('@/pages/OpenCourse'); }); },
    'VideoCourse': function () { return Promise.resolve().then(function () { return require('@/pages/VideoCourse'); }); },
    'Content': function () { return Promise.resolve().then(function () { return require('@/pages/Content'); }); },
    'NewContent': function () { return Promise.resolve().then(function () { return require('@/pages/Content/NewContent'); }); },
    'EditContent': function () { return Promise.resolve().then(function () { return require('@/pages/Content/EditContent'); }); },
    'NotFound': function () { return Promise.resolve().then(function () { return require('@/pages/NotFound'); }); },
    'Login': function () { return Promise.resolve().then(function () { return require('@/pages/Login'); }); }
};
exports["default"] = Files;
