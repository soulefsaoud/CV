import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const UserList = () => {
  // state
  const [users, setUsers] = useState([]);

  // ComponentDidMount
  useEffect(() => {
    axios.get("http://localhost:3060/users").then((response) => {
      setUsers(response.data);
    });
  }, []);

  const deleteUser = async (id) => {
    try {
      await axios.delete("http://localhost:3060/users/" + id);
      window.location.reload(false);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(users);

  return (
    <div>
      <h1>Les utilisateurs sont:</h1>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>NomPrenom</th>
            <th>Email</th>
            <th>Numero de telephone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td key={user.id}>
                {user.lastname}
                {user.firstname}
              </td>
              <td>{user.email}</td>
              <td>{user.tel}</td>
              <td>
                <Button onClick={() => deleteUser(user.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Link className="btn btn-primary" to="/Inscription">
        Ajouter un user
      </Link>
    </div>
  );
};

export default UserList;
