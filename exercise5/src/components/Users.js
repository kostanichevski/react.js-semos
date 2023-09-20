import { useState, useEffect } from "react";

export const Users = (props) => {
  const [usersToShow, setUsersToShow] = useState(props.users);
  const [value, setValue] = useState("");

  let changeValue = (event) => {
    let newValue = event.target.value;
    setValue(newValue);
    console.log(newValue);
  };

  useEffect(() => {
    if (value) {
      const filteredUsers = usersToShow.filter((user) => {
        return user.name.includes(value) || user.username.includes(value);
      });
      console.log(filteredUsers);
      setUsersToShow(filteredUsers);
    }
  }, [value]);

  return (
    <div>
      <div>
        <h1>Filter here</h1>
        <input placeholder="Filter here" value={value} onChange={changevalue} />
      </div>

      <div>
        {usersToShow.map((user, i) => {
          return (
            <>
              <div key={i}>
                <p>Name: {user.name}</p>
                <p>Username: {user.username}</p>
                <p>Email: {user.email}</p>
                <p>Website: {user.website}</p>
              </div>
              <hr />
            </>
          );
        })}
      </div>
    </div>
  );
};
