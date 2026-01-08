import { useEffect, useState } from "react";
import "./Apitest.css";

function Users() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("https://dummyjson.com/users")
        .then(res => res.json())
        .then(data => setUsers(data.users));
    }, []);

    return (
        <div className="user-container">
        {users.map(user => (
            <div className="user-card" key={user.id}>
            <img src={user.image} alt={user.firstName} />
            <h3>{user.firstName} {user.lastName}</h3>
            <p>{user.email}</p>
            <p>Age: {user.age}</p>
            <p>Height: {user.height}</p>
            {/* <p>Location: {user.coordinates/lat}</p> */}
            <p>Ip : {user.ip}</p>
            </div>
        ))}
        </div>
    );
}

export default Users;
