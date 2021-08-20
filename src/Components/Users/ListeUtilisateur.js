import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3060/users").then((response) => {
      setUsers(response.data);
    });
  }, []);

  const deleteUser = async (id) => {
    try {
      await axios.delete("http://localhost:3060/users/" + id);
      const newList = users.filter((user) => {
        return user.id !== id;
      });
      setUsers(newList);
    } catch (error) {
      console.error(error);
    }
  };
  const userRole = async (users) => {
    console.log(users);
    if (users.role === "user") {
      users.role = "admin";
      axios.put(`http://localhost:3060/users/` + users.id, users);
    }
  };

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

            <th>Roles</th>
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
              <td>{user.role}</td>
              <td>
                <Button onClick={() => deleteUser(user.id)}>Delete</Button>
              </td>
              <td>
                <Button onClick={() => userRole(user)}>Role Admin</Button>
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
