"use strict";
exports.__esModule = true;
//布局文件
var UserLayout_1 = require("@/layouts/UserLayout");
var BackLayout_1 = require("@/layouts/BackLayout");
var config_1 = require("./config");
var icons_1 = require("@ant-design/icons");
//配置路由
var ROUTER_CONFIG = [
    {
        path: '/',
        layout: BackLayout_1["default"],
        // component: Content, //组件,作为父级没有组件，子集才有
        name: '课程管理',
        newWindow: false,
        icon: icons_1.DashboardOutlined,
        authority: [],
        children: [
            {
                path: '/openCourse',
                component: 'OpenCourse',
                name: '公开课'
            },
            {
                path: '/classicCourse',
                component: 'NewContent',
                name: '精品课'
            },
            {
                path: '/jointReportCourse',
                component: 'EditContent',
                name: '联报课'
            },
            {
                path: '/videoCourse',
                component: 'VideoCourse',
                name: '视频课'
            },
            {
                path: '/liveCourse',
                component: 'EditContent',
                name: '直播课'
            },
            {
                path: '/newOpenCourse',
                component: 'NewOpenCourse',
                hideItem: true,
                name: '新建公开课'
            },
            {
                path: '/editOpenCourse',
                component: 'EditOpenCourse',
                hideItem: true,
                name: '修改公开课'
            },
            {
                path: '/newClassicCourse',
                component: 'EditContent',
                hideItem: true,
                name: '新建精品课'
            }, {
                path: '/newJointReportCourse',
                component: 'EditContent',
                hideItem: true,
                name: '新建联报课'
            },
            {
                path: '/newVideoCourse',
                component: 'EditContent',
                hideItem: true,
                name: '新建视频课'
            },
            {
                path: '/newLiveCourse',
                component: 'EditContent',
                hideItem: true,
                name: '新建直播课'
            }
        ]
    },
    {
        path: '/resources',
        layout: BackLayout_1["default"],
        exact: true,
        name: '资源管理',
        icon: icons_1.FormOutlined,
        newWindow: false,
        authority: [],
        children: [
            {
                path: '/resources/videoManager',
                component: 'Content',
                name: '视频管理'
            },
            {
                path: '/resources/coursewareManager',
                component: 'Content',
                name: '课件管理'
            },
            {
                path: '/resources/liveRoomManager',
                component: 'Content',
                name: '直播间管理'
            },
        ]
    },
    {
        path: '/teaching',
        layout: BackLayout_1["default"],
        exact: true,
        name: '教学管理',
        icon: icons_1.CalculatorOutlined,
        newWindow: false,
        authority: [],
        children: [
            {
                path: '/teaching/studyProgress',
                component: 'Content',
                name: '学习进度'
            },
            {
                path: '/teaching/studyExplan',
                component: 'Content',
                name: '学习计划'
            },
            {
                path: '/teaching/studyDetail',
                component: 'Content',
                name: '详细进度'
            },
        ]
    },
    {
        path: '/finance',
        layout: BackLayout_1["default"],
        exact: true,
        name: '财务管理',
        icon: icons_1.AccountBookOutlined,
        newWindow: false,
        authority: [],
        children: [
            {
                path: '/finance/orderManager',
                component: 'Content',
                name: '订单管理'
            },
            {
                path: '/finance/capitalFlow',
                component: 'Content',
                name: '资金流水'
            }
        ]
    },
    {
        path: '/user',
        layout: BackLayout_1["default"],
        exact: true,
        name: '用户管理',
        icon: icons_1.UserOutlined,
        newWindow: false,
        authority: [],
        children: [
            {
                path: '/user/student',
                component: 'Content',
                name: '学生管理'
            },
            {
                path: '/user/teacher',
                component: 'Content',
                name: '教师管理'
            },
            {
                path: '/user/userManager',
                component: 'Content',
                name: '后台用户管理'
            }
        ]
    },
    {
        path: '/marketingCenter',
        layout: BackLayout_1["default"],
        exact: true,
        name: '营销中心',
        icon: icons_1.FireOutlined,
        newWindow: false,
        authority: [],
        children: [
            {
                path: '/marketingCenter/poster',
                component: 'Content',
                name: '广告管理'
            },
            {
                path: '/marketingCenter/opinion',
                component: 'Content',
                name: '意见反馈'
            },
            {
                path: '/marketingCenter/appraise',
                component: 'Content',
                name: '评价管理',
                children: [
                    {
                        path: '/marketingCenter/appraise/keyWords',
                        component: 'Content',
                        name: '关键词管理'
                    }
                ]
            }
        ]
    },
    {
        path: '/system',
        layout: BackLayout_1["default"],
        exact: true,
        name: '系统设置',
        icon: icons_1.SettingOutlined,
        newWindow: false,
        authority: [],
        children: [
            {
                path: '/system/sort',
                component: 'Content',
                name: '分类设置'
            },
            {
                path: '/system/appversion',
                component: 'Content',
                name: 'APP版本管理'
            },
        ]
    },
    {
        path: '/404',
        layout: BackLayout_1["default"],
        hideItem: true,
        exact: true,
        name: '404错误',
        component: 'NotFound',
        children: []
    },
    {
        path: config_1.LOGIN_PATH,
        layout: UserLayout_1["default"],
        exact: true,
        component: 'Login',
        name: '点精课堂管理后台登录',
        hideItem: true,
        authority: []
    }
];
exports["default"] = ROUTER_CONFIG;
