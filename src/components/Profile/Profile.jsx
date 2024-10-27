import s from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats: { followers, views, likes } }) => {
    return (
        <div className={s.card}>
        <div className={s.header}>
          <img className={s.avatar} src={image} alt="User avatar" />
          <p className={s.username}>{name}</p>
          <p className={s.tag}>{tag}</p>
          <p className={s.location}>{location}</p>
        </div>
        <ul className={s.info}>
  <li className={s.cardInfoItem}>
    <span className={s.cardInfoTitle}>Followers:</span> 
    <span className={s.cardInfoValue}>{followers}</span>
  </li>
  <li className={s.cardInfoItem}>
    <span className={s.cardInfoTitle}>Views:</span> 
    <span className={s.cardInfoValue}>{views}</span>
  </li>
  <li className={s.cardInfoItem}>
    <span className={s.cardInfoTitle}>Likes:</span> 
    <span className={s.cardInfoValue}>{likes}</span>
  </li>
</ul>
      </div>
    );
  };
  
  export default Profile;