import { connect } from 'react-redux';
import { replace } from 'react-router-redux';
import Base from '../components/Base';

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch) => {
    return {
        replaceRoute: (page, state) => {
            dispatch(replace(page, state));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Base);