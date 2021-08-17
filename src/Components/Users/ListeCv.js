import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const ListeCv = () => {
  const [users, setUsers] = useState([]);

  return (
    <main className="container main w-50">
      <div className="text-center">
        <h1>Liste des CV</h1>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Nom-Prénom</th>
              <th>CV publié</th>
              <th>Dernière activité</th>
              <th>Supprimer le CV</th>
            </tr>
          </thead>
          <tbody>
            {/* {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td key={user.id}>
                {user.lastname}
                {user.firstname}
              </td>
              <td>{user.email}</td>
              <td>{user.tel}</td> */}
            {/* <td>
                <Button onClick={() => deleteUser(user.id)}>Delete</Button>
              </td> */}
            {/* </tr> */}
          </tbody>
        </Table>
        <Link className="btn btn-outline-success" to="/MonProfilCv">
          Ajouter un CV
        </Link>
      </div>
    </main>
  );
};

export default ListeCv;
