import user from '../user.json'
import data from '../data.json'
import friends from '../friends.json'
import transactions from '../transactions'
import { Profile } from "./profile/profile";
import { Statistic } from './statistic/statistic';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './Transaction/Transaction';


export const App = () => {
  return (
    <div>
     <Profile   username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
        stats={user.stats} />
      <Statistic title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={ transactions} />
    </div>
  );
};
