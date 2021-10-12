import { Switch } from 'react-router-dom';
import { Suspense, useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import Container from './Components/Container';
import Loader from './Components/Loader/Loader';
import PrivateRoute from './Components/PrivateRoute';
import PublicRoute from './Components/PublicRout';
import { authOperations } from './redux/auth';
import AppBar from './Components/AppBar/AppBar';
import Wrapper from './Components/Wrapper/Wrapper';

const Register = lazy(() =>
  import('./views/Register' /*webpackChunkName: "registration_page" */),
);
const Login = lazy(() =>
  import('./views/Login' /*webpackChunkName: "login_page" */),
);
const Home = lazy(() =>
  import('./views/Home' /*webpackChunkName: "home_page" */),
);
const Contacts = lazy(() =>
  import('./views/Contacts' /*webpackChunkName: "contacts_page" */),
);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />
      <Wrapper>
        <Suspense fallback={<Loader />}>
          <Switch>
            <PublicRoute exact path="/" component={Home} />
            <PublicRoute
              path="/register"
              redirectTo="/login"
              restricted
              component={Register}
            />
            <PublicRoute
              path="/login"
              redirectTo="/contacts"
              restricted
              component={Login}
            />
            <PrivateRoute
              path="/contacts"
              redirectTo="/login"
              component={Contacts}
            />
          </Switch>
        </Suspense>
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: '#2b0330',
              color: '#fff',
            },
          }}
        />
      </Wrapper>
    </Container>
  );
}

export default App;
