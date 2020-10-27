import { createModel } from '@rematch/core'
import Request from '@/request/Request';
import {
     LOGIN_URL
} from '@/config/api.config';
import { REQUEST_SUCCESS } from '@/config/config';
export interface StateType {
    userInfo: any
}
export interface IAction{
    username:string,
    password:string,
    callback?:Function
}
export const login = createModel<StateType>()({
    state: {
        userInfo: null
    }, // initial state
    reducers: {
        setState(state, payload: any) {
            return { ...state, userInfo: payload }
        }
    },
    effects: (dispatch) => ({
        async login(payload: IAction, rootState) {
            const response = await new Request({
                api: LOGIN_URL,
                method: 'POST',
                data: {
                    username:payload.username, password:payload.password
                }
            }).fetch();
            if (response.code === REQUEST_SUCCESS) {
                this.setState(response.data);
            }
            payload?.callback?.(response);
        },
    }),
});