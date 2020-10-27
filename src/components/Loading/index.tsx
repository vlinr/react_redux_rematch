import * as React from 'react';
import { Spin } from 'antd';
const { memo } = React;
interface LoadingType {
    isLoading: boolean,
    error: any,
    pastDelay:boolean
}
//登录
const Loding = ({ isLoading, error,pastDelay }: LoadingType): React.ReactElement | null => {
    if (error) return <div>加载错误</div>
    if (pastDelay)
        return <div style={{ textAlign: 'center' }}>
            <Spin />
        </div>
    return null;
}

export default memo(Loding);