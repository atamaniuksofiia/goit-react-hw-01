import Profile from "./components/Profile/Profile";
import FriendList from "./components/Profile/FriendsList/FriendsList"
import friends from "./friends.json"
import Transaction from "./components/Profile/Transaction/Transaction"
import transaction from "./transaction.json"

const user = {
  username: "Jacques Gluke",
  tag: "jgluke",
  location: "Ocho Rios, Jamaica",
  avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308
  }
};


const App = () => {
  return (
    <>
      <Profile
        name={user.username}
        tag={user.tag}
        location={user.location}
        image={user.avatar}
        stats={user.stats}
      />
      <FriendList friends={friends} />
      <Transaction items={transaction} />
    </>
  );
};
export default App;