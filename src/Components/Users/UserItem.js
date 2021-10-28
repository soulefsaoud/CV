import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

const UserItem = ({user, deleteUser, admin}) => {
    return (
        <tr key={user.id}>
            <td><Link to={`/ProfilDetailsPage/${user.id}`}>{user.first_name}</Link></td>
            <td><Link to={`/ProfilDetailsPage/${user.id}`}>{user.last_name}</Link></td>
            <td>{user.email}</td>
            <td>{user.telephone}</td>
            {user && user.entreprise && <td>{user.entreprise}</td>}
            {admin && (
                <td>
                    <Button
                        variant="danger"
                        onClick={() => deleteUser(user.id)}
                    >
                        Delete
                    </Button>
                </td>
            )}
        </tr>
    )
}

export default  UserItem