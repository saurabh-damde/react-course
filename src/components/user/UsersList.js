import style from "./UsersList.module.css";
import Card from "../ui/Card";

const UsersList = (props) => {
  return (
    <Card class={style.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} is {user.age} years old
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
