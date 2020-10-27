import * as React from 'react';
import styles from './index.module.less';
import LoginForm from '@/components/LoginForm';

const { memo} = React;

// const mapState = (state: RootState) => ({
//     userInfo: state.login.userInfo,
// })

// const mapDispatch = (dispatch: Dispatch) => ({
//     login: (data:IAction) => dispatch.login.login(data)
// })

// type Props = ReturnType<typeof mapState> & ReturnType<typeof mapDispatch>

const Login = (): React.ReactElement<any> => {
    return <div className={styles.login}>
        <div className={styles.box}>
            <h1>点精课堂管理后台登录</h1>
            <LoginForm  />
        </div>
    </div>
}

export default memo(Login);
// export default memo(connect(mapState,mapDispatch)(Login));