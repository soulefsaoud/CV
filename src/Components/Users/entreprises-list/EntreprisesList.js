import React, {useEffect, useState} from "react";
import axios from "axios";
import {Table} from "react-bootstrap";
import UserItem from "../UserItem";
import {Link} from "react-router-dom";

const EntreprisesList = ({admin}) => {
    const [entreprises, setEntreprises] = useState([]);

    useEffect(() => {
        const entreprises = async() => {
            try {
                const {data} = await axios.get("http://localhost:3001/users")
                const list = data.filter(u => u.role === "entreprise")

                setEntreprises(list)
            } catch (e) {
                console.error(e.message)
            }
        }
        entreprises()
    }, []);

    const deleteUser = async (id) => {
        try {
            await axios.delete("http://localhost:3001/users/" + id);
            const list = entreprises.filter(user => {
                return user.id !== id;
            });
            setEntreprises(list);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <main className="container">
            <>
                <div className="text-center">
                    <h1>Liste des entreprises</h1>
                    <div className="row my-5">
                        {entreprises.length > 0 ? entreprises.map((u) => (
                            <UserItem admin={admin} deleteUser={deleteUser} user={u} />
                        )) : <h1>Loading</h1>}
                    </div>
                    {admin && (
                        <Link className="btn btn-outline-primary" to="/add-entreprise">
                            Ajouter une entreprise
                        </Link>
                    )}
                </div>
            </>
        </main>
    );
}

export default EntreprisesList