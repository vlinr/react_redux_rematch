//router渲染，基本无需更改

import React from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
//路由配置文件
import ROUTER_CONFIG, { RouteItemType } from '@/config/router.config';
//重写路由，对布局进行更改
import AuthRouter from './router';
import { USER_AUTHORITY } from '@/config/config';
import { routerFlattenAndChangeInfo } from '@/utils/routerToFlatten';
const FLATTEN_ROUTER: Array<RouteItemType> = routerFlattenAndChangeInfo(ROUTER_CONFIG);

//均要找到第一级
let redirectRouter: Array<RouteItemType> = [], transitionArr: Array<RouteItemType> = [];
for (let i: number = 0, len: number = FLATTEN_ROUTER.length; i < len; ++i) {
    let item: RouteItemType = FLATTEN_ROUTER[i];
    if (!item.component) { //没有组件，就需要重定向
        transitionArr.push(item);
    } else {
        transitionArr?.map((child: RouteItemType) => {
            child.redirectUrl = item.path;  //重定向地址
            redirectRouter.push(child);
        })
        transitionArr = [];
    }
}

export default (
    <Router>
        <Switch>
            {
                redirectRouter?.map((item: RouteItemType) => < Route path={item.path} key={item.path} exact render={ () => <Redirect to={item.redirectUrl} />} />)
            }
            {
                FLATTEN_ROUTER?.map((item, index) => {
                    return item.component && ((item?.authority || [])?.indexOf(USER_AUTHORITY) > -1 || (item?.authority || [])?.length === 0) && <AuthRouter exact key={index} name={item?.name} path={item.path} component={item.component} layout={item.layout} ></AuthRouter>
                })
            }
            <Redirect to="/404" />
        </Switch>
    </Router >
);
