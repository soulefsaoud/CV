import avatar from "../../assets/default-avatar.jpg"
import {Link} from "react-router-dom";

const UserItem = ({user, deleteUser, admin}) => {

    return (
        <div className={"col-lg-3"}>
            <div className="card mb-3">
                <img style={{height: 200, objectFit: 'cover'}} src={user.avatar ? user.avatar : avatar} className="card-img-top" alt="Avatar de l'utilisateur" />
                <div className="card-body">
                    <h5 className="card-title">{user.firstName} {user.name}</h5>
                    <p className="card-subtitle mb-2 text-muted">{user.email}</p>
                    {/*{user.entreprise && <p className={"card-text"}>{user.entreprise}</p>}*/}
                    <Link className={"btn btn-primary"} to={`/ProfilDetailsPage/${user.id}`}>Voir le profil</Link>
                    {admin && <button onClick={() => deleteUser(user.id)} className={"ms-3 btn btn-danger"}>Supprimer le profil</button>}
                </div>
            </div>
        </div>
    )

    // return (
    //     <tr key={user.id}>
    //         <td><Link to={`/ProfilDetailsPage/${user.id}`}>{user.first_name}</Link></td>
    //         <td><Link to={`/ProfilDetailsPage/${user.id}`}>{user.last_name}</Link></td>
    //         <td>{user.email}</td>
    //         <td>{user.telephone}</td>
    //         {user && user.entreprise && <td>{user.entreprise}</td>}
    //         {admin && (
    //             <td>
    //                 <Button
    //                     variant="danger"
    //                     onClick={() => deleteUser(user.id)}
    //                 >
    //                     Delete
    //                 </Button>
    //             </td>
    //         )}
    //     </tr>
    // )
}

export default  UserItem