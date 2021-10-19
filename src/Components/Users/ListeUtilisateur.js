import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const UserList = ({ user }) => {
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
    <main className="container main w-50">
      <>
          <div className="text-center">
            <h1>Liste des utilisateurs</h1>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nom</th>
                  <th>Prénom</th>
                  <th>Numero de telephone</th>
                  <th>Rôle</th>
                  <th>Entreprise</th>
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
                    <td>{user.entreprise}</td>
                    <td>
                      <Button
                        variant="danger"
                        onClick={() => deleteUser(user.id)}
                      >
                        Delete
                      </Button>

                      <Button onClick={() => userRole(user)}>Role Admin</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>

            <Link className="btn btn-outline-primary" to="/Inscription">
              Ajouter un utilisateur
            </Link>
          </div>
        </>
    </main>
  );
};

export default UserList;
