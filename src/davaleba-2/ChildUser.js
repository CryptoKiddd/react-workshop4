const ChildUser = ({ users, SetUsers, ager }) => {
  const handleUpdate = (id, age) => {
    SetUsers(
      users.map((user) => {
        if (user.id === id) {
          user.age = ager;
          return user;
        } else {
          return user;
        }
      })
    );
  };
  const handleDelete = (id) => {
    SetUsers(users.filter((user) => user.id !== id));
  };
  return (
    <div>
      {!users.length ? (
        <h1>no users</h1>
      ) : (
        users.map((user) => {
          const { id, name, age } = user;
          return (
            <div className="user-container">
              <p>name:{name}</p>
              <p>age:{age}</p>
              <p>id:{id}</p>
              <button className="update" onClick={() => handleUpdate(id, age)}>
                update
              </button>
              <button className="delete" onClick={() => handleDelete(id)}>
                delete
              </button>
            </div>
          );
        })
      )}
    </div>
  );
};
export default ChildUser;
