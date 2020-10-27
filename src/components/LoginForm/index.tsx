import * as React from 'react';
import { Form, Input, Button, message } from 'antd';
import { useHistory } from 'react-router-dom';
import { USER_TOKEN_NAME } from '@/config/config';
// import { connect } from 'react-redux'
import {  Dispatch } from '@/models/store'
import { useDispatch } from 'react-redux'
const { memo, useCallback, useState } = React;
// const mapState = (state: RootState) => ({
//     userInfo: state.login.userInfo,
// })
// const mapDispatch = (dispatch: Dispatch) => ({
//     login: (data:any) => dispatch.login.login(data)
// })

const FORM_LAYOUT = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 }
}
// const BTN_LAYOUT = {
//     wrapperCol: { offset: 4, span: 16 }
// }

//校验失败
const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};
//登录
const LoginForm = (): React.ReactElement<any> => {
    const history = useHistory();
    const [loading, setLoading] = useState(false);

    //取得login model下面的userInfo
//    const userState = useSelector((state: RootState) => state.login)

    const dispatch = useDispatch() as Dispatch;
    //校验成功
    const onLoginFinish = useCallback(
        (values: any) => {
            setLoading(true);
            dispatch.login.login({
                username: values.username, password: values.password, callback: (res: any) => {
                    if (res.code !== 0) {
                        message.error(res.msg);
                        setLoading(false);
                    } else {
                        localStorage.setItem(USER_TOKEN_NAME, res.token);
                        message.success(res.msg);
                        setTimeout(() => {
                            setLoading(false);
                            history.push('/');
                        }, 1500);
                    }
                }
            })
        },
        [dispatch.login,history],
    )
    return <Form
        {...FORM_LAYOUT}
        name="basic"
        hideRequiredMark={true}
        onFinish={onLoginFinish}
        onFinishFailed={onFinishFailed}
    >
        <Form.Item
            label="账号"
            name="username"
            rules={[{ required: true, message: '请输入账号' }]}
        >
            <Input placeholder="请输入账号(admin)" />
        </Form.Item>
        <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: '请输入密码' }]}
        >
            <Input.Password placeholder="请输入密码(admin)" />
        </Form.Item>

        <Form.Item style={{justifyContent:'center'}}>
            <Button loading={loading} type="primary" size="large" style={{ width: '100%', marginTop: 20,marginBottom:20 }} htmlType="submit">
                登录
            </Button>
        </Form.Item>
    </Form>
}

export default memo(LoginForm);