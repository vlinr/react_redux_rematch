import * as React from 'react';
import { Breadcrumb } from 'antd';
import { useHistory } from 'react-router-dom';
import ROUTER_CONFIG, { RouteItemType } from '@/config/router.config';
import { findPathListByPath } from '@/utils/routerToFlatten';
const { Item } = Breadcrumb;
const { Fragment, useState, useEffect } = React;
const CustomBreadcrumb = () => {
    const history = useHistory();
    const [breadItem, setBreadItem] = useState([] as Array<RouteItemType>)
    useEffect(() => {
        setBreadItem(findPathListByPath(ROUTER_CONFIG, history.location.pathname));
    }, [history])
    return <Breadcrumb style={{marginBottom:20}}>
        {
            breadItem?.map((item: RouteItemType, index: number) => {
                return <Fragment key={index}>
                        <Item href={item.path} >
                            {item.name}
                        </Item>
                </Fragment>
            })
        }

    </Breadcrumb>
}

export default React.memo(CustomBreadcrumb);