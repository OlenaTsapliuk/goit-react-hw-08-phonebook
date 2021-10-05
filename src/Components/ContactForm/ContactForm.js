import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from '../../redux/selectors';
import operations from '../../redux/operation';
import s from "./ContactForm.module.css";

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  
  const onSubmit = (name, number) =>
    dispatch(operations.addContact(name, number));
  
  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
      
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (contacts.find((contact) =>
      contact.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already in contacts.`);
      resetForm();
      return;
    } 
  
    onSubmit(name,number)
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

    return (
      <form onSubmit={handleSubmit} className={s.form}>
        <label className={s.label}>
          Name
          <input
            className={s.input}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={handleChange}
          />
        </label>
        <label className={s.label}>
          Number
          <input
            className={s.input}
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={handleChange}
          />
        </label>
        <button type="submit" className={s.button}>
          Add contact
        </button>
      </form>
    );
  }

export default ContactForm;


// ContactForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
  
// };


// const mapStateToProps = state => ({
//   contacts: state.contacts.items,
// });
// const mapDispatchToProps = (dispatch) => ({
//   onSubmit:(name,number)=>dispatch(contactActions.addContact(name, number))
// })


// export default connect(null,mapDispatchToProps)(ContactForm);

