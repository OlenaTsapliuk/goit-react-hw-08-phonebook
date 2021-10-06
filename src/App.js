
import { Switch, Route, Redirect } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Container from "./Components/Container";
import Loader from './Components/Loader/Loader';
import Register from './views/Register';
import Login from './views/Login';
import Home from './views/Home';
import Navigation from './Components/Navigation/Navigation';
import Contacts from './views/Contacts';
import { authOperations } from './redux/auth';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
    
  return (
    <Container>
      <Navigation/>
       <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/contacts" component={Contacts} />
      </Switch>
          </Suspense>
    
      </Container>
    );
  }

export default App;

