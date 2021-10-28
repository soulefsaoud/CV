import React, {useEffect, useState} from "react";
import axios from "axios";
import {Table} from "react-bootstrap";
import UserItem from "../UserItem";
import {Link} from "react-router-dom";

const StudentList = ({admin}) => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const students = async() => {
            try {
                const {data} = await axios.get("http://localhost:3001/users")
                const list = data.filter(u => u.role === "auditeur")

                setStudents(list)
            } catch (e) {
                console.error(e.message)
            }
        }
        students()
    }, []);

    const deleteUser = async (id) => {
        try {
            await axios.delete("http://localhost:3001/users/" + id);
            const newList = students.filter(user => {
                return user.id !== id;
            });
            setStudents(newList);
        } catch (error) {
            console.error(error);
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
                            <th>Prénom</th>
                            <th>Nom</th>
                            <th>Email</th>
                            <th>Numéro de telephone</th>
                            {admin && (<th>Actions</th>)}
                        </tr>
                        </thead>
                        <tbody>
                        {students.length > 0 ? students.map((u) => (
                            <UserItem admin={admin} deleteUser={deleteUser} user={u} />
                        )) : <h1>Loading</h1>}
                        </tbody>
                    </Table>

                    {admin && (
                        <Link className="btn btn-outline-primary" to="/add-user">
                            Ajouter un utilisateur
                        </Link>
                    )}
                </div>
            </>
        </main>
    );
}

export default StudentList