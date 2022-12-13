import Loadable from 'react-loadable';
import Loading from '../../../components/Loading';
/* Components */
const Header = Loadable({
  loader: () => import ('../../../components/Header'),
  loading: Loading
});
const Diseases = Loadable({
  loader: () => import ('../../../components/Diseases'),
  loading: Loading
});
const About = Loadable({
  loader: () => import ('../../../components/About'),
  loading: Loading
});
const Setup = Loadable({
  loader: () => import ('../../../components/Setup'),
  loading: Loading
});
const SignIn = Loadable({
  loader: () => import ('../../../components/SignIn'),
  loading: Loading
});
const SignInIframe = Loadable({
  loader: () => import ('../../../components/SignIn/SignInIframe'),
  loading: Loading
});
const SignInIframeCallback = Loadable({
  loader: () => import ('../../../components/SignIn/SignInIframeCallback'),
  loading: Loading
});
const AuthenticateFacebook = Loadable({
  loader: () => import ('../../../components/authenticate/Facebook'),
  loading: Loading
});


export default {
  Diseases,
  About,
  Setup,
  Header,
  AuthenticateFacebook,
  SignIn,
  SignInIframe,
  SignInIframeCallback,
}
