import style from "./UsersList.module.css";
import Card from "../ui/Card";

const UsersList = (props) => {
  return (
    <Card class={style.users}>
      <ul>
        <li>
          {props.users.map((user) => (
            <li>
              {user.name} is ({user.age})yrs old
            </li>
          ))}
        </li>
      </ul>
    </Card>
  );
};

export default UsersList;
