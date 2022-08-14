import styles from "./UserList.module.css";
import User from "./User";
import Card from "./UI/Card";

const UserList = (props) => {
  const removeUser = (user) => {
    props.onClickRemove(user);
  };

  return (
    <div>
      <Card className={styles.users}>
        <ul>
          {props.users.map((user) => {
            return <User key = {user.key} user={user} onClickRemove={removeUser} />;
          })}
        </ul>
      </Card>
    </div>
  );
};

export default UserList;
