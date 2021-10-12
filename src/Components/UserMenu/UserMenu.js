import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from './user.png';
import { Button } from 'react-bootstrap';
import s from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const avatar = defaultAvatar;

  return (
    <div className={s.container}>
      <img src={avatar} alt="" width="32" className={s.avatar} />
      <span className={s.name}>Welcome, {name}</span>
      <Button type="button" onClick={() => dispatch(authOperations.logOut())}>
        LogOut
      </Button>
    </div>
  );
}
