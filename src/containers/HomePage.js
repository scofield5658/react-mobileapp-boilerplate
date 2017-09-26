import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import userActions from '../actions/user';
import Home from '../components/Home';

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch) => {
    const user = bindActionCreators(userActions, dispatch);
    return {
        onLogin: (data) => {
            user.login(data);
        },
        pushRoute: (page, state) => {
            dispatch(push(page, state));
        },
        onLogout: () => {
            user.logout();
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
