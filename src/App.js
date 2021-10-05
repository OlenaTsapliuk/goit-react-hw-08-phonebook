
import ContactForm from "./Components/ContactForm";
import Container from "./Components/Container";
import ContactList from "./Components/ContactList";
import Filter from "./Components/Filter";
import Loader from './Components/Loader/Loader';
import s from "./App.module.css";
import { getLoading } from './redux/selectors';
import { useSelector } from 'react-redux';

function App() {
  const loading = useSelector(getLoading);
    return (
      <Container>
        <h1 className={s.title}>Phonebook</h1>
        <ContactForm />
        <h2 className={s.title}>Contacts</h2>
        <Filter />
        {loading &&<Loader/>}
        <ContactList />
      </Container>
    );
  }

export default App;

