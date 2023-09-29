import css from '../FriendsListItem/FriendsListitem.module.css'
export const FriendListItem = ({ avatar, name, status }) => {
    return (<li className={css.item}>
            <span className={status? css.statOn: css.statOff}>{ status}</span>
  <img className={css.avatar} src={avatar} alt="User avatar"  />
            <p className={css.name}>{name}</p>
</li>)
   

}