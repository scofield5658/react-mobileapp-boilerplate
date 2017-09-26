import { handleActions } from 'redux-actions';
import actions from '../actions/user';

export default handleActions({
    [actions.login]: (state, action) => {
        console.log('模拟登录:' + action.payload.username);
        state.isLogin = true;
        state.username = action.payload.username;
        state.info = {};
        state.token = 'test';
        return { ...state };
    },
    [actions.logout]: (state, action) => {
        console.log('模拟登出');
        state.isLogin = false;
        state.token = '';
        return { ...state };
    }
}, {});
