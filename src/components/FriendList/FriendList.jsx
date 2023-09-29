import css from '../FriendList/FriendList.module.css'
import { FriendListItem } from "components/FriendsListItem/FriendsListitem"



export const FriendList = ({ friends }) => {
    return (<ul className={css.friendList}>
        {friends.map(({ avatar, name, isOnline, id }) => {
            return (<FriendListItem
                key={id}
                status={isOnline}
                avatar={avatar}
                name = {name}
            />)}  
)}
</ul> )
}
 