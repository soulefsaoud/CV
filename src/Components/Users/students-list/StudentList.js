import React, {useEffect, useState} from "react";
import axios from "axios";
import {Table} from "react-bootstrap";
import UserItem from "../UserItem";
import {Link} from "react-router-dom";

const StudentList = ({admin}) => {
    const [students, setStudents] = useState([]);
    console.log(admin)

    useEffect(() => {
        const students = async() => {
            try {
                const {data} = await axios.get("/candidates", {
                    headers: {
                        "accept": "application/json"
                    }
                })

                setStudents(data)
            } catch (e) {
                console.error(e.message)
            }
        }
        students()
    }, []);

    console.log(students)

    const deleteUser = async (id) => {
        try {
            await axios.delete("/users/" + id);
            const newList = students.filter(user => {
                return user.id !== id;
            });
            setStudents(newList);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <main className="container">
            <>
                <div className="text-center">
                    <h1>Liste des élèves</h1>
                    <div className="row my-5">
                        {students.length > 0 ? students.map((u) => (
                            <UserItem admin={admin} deleteUser={deleteUser} user={u} />
                        )) : <h1>Loading</h1>}
                    </div>
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