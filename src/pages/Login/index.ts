import { LoginPage } from './login';
import { connect } from '../../store';
import { withRouter } from '../../modules/Router';

export default withRouter(connect((state: any) => ({
    user: state.user || {}
}), LoginPage));
