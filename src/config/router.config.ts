//布局文件
import UserLayout from '@/layouts/UserLayout';
import BlankLayout from '@/layouts/BlankLayout';
import { LOGIN_PATH } from './config';
import { FormOutlined, DashboardOutlined, SettingOutlined, FireOutlined, UserOutlined, CalculatorOutlined, AccountBookOutlined } from '@ant-design/icons';

export interface RouteType {
    path: string,
    name: string,
    component?: string,
    layout?: React.ReactNode | any,
    exact?: boolean,
}
export interface RouteItemType extends RouteType {
    children?: Array<RouteItemType>,
    newWindow?: boolean,
    authority?: Array<string>,
    hideItem?: boolean,
    icon?: React.ReactNode | any
    [moreName: string]: any  //更多参数
}
//配置路由
const ROUTER_CONFIG: Array<RouteItemType> = [
    {
        path: '/',  //访问路径
        layout: BlankLayout, //布局，最外层的必须指定
        // component: Content, //组件,作为父级没有组件，子集才有
        name: '课程管理', //名称
        newWindow: false,  //是否是新窗口打开
        icon: DashboardOutlined,
        authority: [],//权限拥有者
        children: [
            {
                path: '/openCourse',  //访问路径
                component: 'OpenCourse', //组件
                name: '公开课', //名称
            },
            {
                path: '/classicCourse',  //访问路径
                component: 'NewContent', //组件
                name: '精品课', //名称
            },
            {
                path: '/jointReportCourse',  //访问路径
                component: 'EditContent', //组件
                name: '联报课', //名称
            },
            {
                path: '/videoCourse',  //访问路径
                component:  'VideoCourse', //组件
                name: '视频课', //名称
            },
            {
                path: '/liveCourse',  //访问路径
                component:  'EditContent', //组件
                name: '直播课', //名称
            },
            {
                path: '/newOpenCourse',  //访问路径
                component:  'NewOpenCourse', //组件
                hideItem: true,
                name: '新建公开课', //名称
            },
            {
                path: '/editOpenCourse',  //访问路径
                component:  'EditOpenCourse', //组件
                hideItem: true,
                name: '修改公开课', //名称
            },
            {
                path: '/newClassicCourse',  //访问路径
                component:  'EditContent', //组件
                hideItem: true,
                name: '新建精品课', //名称
            }, {
                path: '/newJointReportCourse',  //访问路径
                component:  'EditContent', //组件
                hideItem: true,
                name: '新建联报课', //名称
            },
            {
                path: '/newVideoCourse',  //访问路径
                component:  'EditContent', //组件
                hideItem: true,
                name: '新建视频课', //名称
            },
            {
                path: '/newLiveCourse',  //访问路径
                component:  'EditContent', //组件
                hideItem: true,
                name: '新建直播课', //名称
            }
        ]
    },
    {
        path: '/resources',  //访问路径
        layout: BlankLayout, //布局，最外层的必须指定
        exact: true,  //是否严格匹配
        name: '资源管理', //名称
        icon: FormOutlined,
        newWindow: false,  //是否是新窗口打开
        authority: [],//权限拥有者
        children: [
            {
                path: '/resources/videoManager',  //访问路径
                component:  'Content', //组件
                name: '视频管理', //名称
            },
            {
                path: '/resources/coursewareManager',  //访问路径
                component: 'Content', //组件
                name: '课件管理', //名称
            },
            {
                path: '/resources/liveRoomManager',  //访问路径
                component: 'Content', //组件
                name: '直播间管理', //名称
            },

        ]
    },
    {
        path: '/teaching',  //访问路径
        layout: BlankLayout, //布局，最外层的必须指定
        exact: true,  //是否严格匹配
        name: '教学管理', //名称
        icon: CalculatorOutlined,
        newWindow: false,  //是否是新窗口打开
        authority: [],//权限拥有者
        children: [
            {
                path: '/teaching/studyProgress',  //访问路径
                component: 'Content', //组件
                name: '学习进度', //名称
            },
            {
                path: '/teaching/studyExplan',  //访问路径
                component: 'Content', //组件
                name: '学习计划', //名称
            },
            {
                path: '/teaching/studyDetail',  //访问路径
                component: 'Content', //组件
                name: '详细进度', //名称
            },

        ]
    },
    {
        path: '/finance',  //访问路径
        layout: BlankLayout, //布局，最外层的必须指定
        exact: true,  //是否严格匹配
        name: '财务管理', //名称
        icon: AccountBookOutlined,
        newWindow: false,  //是否是新窗口打开
        authority: [],//权限拥有者
        children: [
            {
                path: '/finance/orderManager',  //访问路径
                component: 'Content', //组件
                name: '订单管理', //名称
            },
            {
                path: '/finance/capitalFlow',  //访问路径
                component: 'Content', //组件
                name: '资金流水', //名称
            }
        ]
    },
    {
        path: '/user',  //访问路径
        layout: BlankLayout, //布局，最外层的必须指定
        exact: true,  //是否严格匹配
        name: '用户管理', //名称
        icon: UserOutlined,
        newWindow: false,  //是否是新窗口打开
        authority: [],//权限拥有者
        children: [
            {
                path: '/user/student',  //访问路径
                component: 'Content', //组件
                name: '学生管理', //名称
            },
            {
                path: '/user/teacher',  //访问路径
                component: 'Content', //组件
                name: '教师管理', //名称
            },
            {
                path: '/user/userManager',  //访问路径
                component: 'Content', //组件
                name: '后台用户管理', //名称
            }
        ]
    },
    {
        path: '/marketingCenter',  //访问路径
        layout: BlankLayout, //布局，最外层的必须指定
        exact: true,  //是否严格匹配
        name: '营销中心', //名称
        icon: FireOutlined,
        newWindow: false,  //是否是新窗口打开
        authority: [],//权限拥有者
        children: [
            {
                path: '/marketingCenter/poster',  //访问路径
                component: 'Content', //组件
                name: '广告管理', //名称
            },
            {
                path: '/marketingCenter/opinion',  //访问路径
                component: 'Content', //组件
                name: '意见反馈', //名称
            },
            {
                path: '/marketingCenter/appraise',  //访问路径
                component: 'Content', //组件
                name: '评价管理', //名称
                children: [
                    {
                        path: '/marketingCenter/appraise/keyWords',  //访问路径
                        component: 'Content', //组件
                        name: '关键词管理', //名称
                    }
                ]
            }
        ]
    },
    {
        path: '/system',  //访问路径
        layout: BlankLayout, //布局，最外层的必须指定
        exact: true,  //是否严格匹配
        name: '系统设置', //名称
        icon: SettingOutlined,
        newWindow: false,  //是否是新窗口打开
        authority: [],//权限拥有者
        children: [
            {
                path: '/system/sort',  //访问路径
                component: 'Content', //组件
                name: '分类设置', //名称
            },
            {
                path: '/system/appversion',  //访问路径
                component: 'Content', //组件
                name: 'APP版本管理', //名称
            },
        ]
    },
    {
        path: '/404',  //自定义404页面，
        layout: BlankLayout,
        hideItem: true,   //是否不显示到菜单
        exact: true,
        name: '404错误',
        component: 'NotFound',
        children: [

        ]
    },
    {
        path: LOGIN_PATH,  //登录页面的路径
        layout: UserLayout, //布局，最外层的必须指定
        exact: true,  //是否严格匹配
        component: 'Login', //组件
        name: '点精课堂管理后台登录', //名称
        hideItem: true,
        authority: []
    }
]

export default ROUTER_CONFIG;