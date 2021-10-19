import { SignupPage } from './signup';
export { SignupPage } from './signup';
import { connect } from '../../store';
import { withRouter } from '../../modules/Router';

export default withRouter(connect((state: any) => ({
    user: state.user || {}
}), SignupPage));