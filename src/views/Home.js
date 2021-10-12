import s from './Views.module.css';
import image from './image.png';
export default function Home() {
  return (
    <div className={s.wrapper}>
      <img src={image} className={s.img} width="550" alt="no_res" />
      <h1 className={s.title}>Please sign in to continue!</h1>
    </div>
  );
}
