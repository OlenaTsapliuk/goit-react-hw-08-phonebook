import { getLoading } from '../redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ContactForm from '../Components/ContactForm';
import ContactList from "../Components/ContactList";
import Filter from "../Components/Filter";
import Loader from '../Components/Loader/Loader';
import s from "../App.module.css";
import operations from '../redux/operation';


export default function Contacts() {
  const dispatch = useDispatch();
 const loading = useSelector(getLoading);
  useEffect(() => dispatch(operations.fetchContacts()), [dispatch]);

    return (
      <>
     <h1 className={s.title}>Phonebook</h1>
        <ContactForm />
        <h2 className={s.title}>Contacts</h2>
        <Filter />
        {loading &&<Loader/>}
            <ContactList />
            </>
  );
}