const User = (props) => {
  const onClickHandler = (event) => {
    event.preventDefault();

    props.onClickRemove(props.user);
  };

  return (
    <li onClick={onClickHandler}>
      {props.user.username} ({props.user.age} years old)
    </li>
  );
};

export default User;
