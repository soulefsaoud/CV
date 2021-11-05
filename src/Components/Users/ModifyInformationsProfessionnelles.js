// import React, {Fragment, useState, useEffect} from "react";
// import Calendar from "react-calendar";
// import {Form, Button, Row, Col, Image} from "react-bootstrap";
// import {Link, useParams} from "react-router-dom";
// import axios from "axios";


// const ModifyInformationsProfessionnellesPage = () => {
//     const {id} = useParams()
//     const [user, setUser] = useState()
//     const[users, setUsers]= useState([])
//     const [exp, setExp] = useState([])
//     const [form, setForm] = useState([])
//     const [comp, setComp] = useState([])


//     const getFormations = async () => {
//         const {data} = await axios.get(`http://localhost:3001/users/`)
//         const formations = data.filter(e => e.user === id)
//         console.log(formations)
//         setForm([...formations])
//     }
    
//     const deleteFormation = async id => {
//         try {
//             await axios.delete(`http://localhost:3001/users/${id}`)
//             await getFormations()
//         } catch (e) {
//             console.error(e.message)
//         }
//     }

//     const getUser = async () => {
//         const {data} = await axios.get(`http://localhost:3001/users/${id}`)
//         setUser(data)
//     }


//     const [showAvatar, setShowAvatar] = useState(false);
//     const [avatar, setAvatar] = useState("");

//     const sendAvatar = async(e) => {
//         e.preventDefault()
//         try {
//             await axios.patch(`http://localhost:3001/users/${id}`, {avatar})
//             await getUser()
//         } catch (e) {
//             console.error(e.message)
//         }
//     }


//     useEffect(() => {
//         getUser()
//     }, [])

//     return (
//         <div className={"info__perso"}>
//         <h6 className="titre">Informations personnelles</h6>
//         <p>Nom complet: {user ? user.first_name + ' ' + user.last_name : "Chargement"}</p>
//         <p>Email: {user ? user.email : "Chargement"}</p>
//         <p>Téléphone: {user ? user.telephone : "Chargement"}</p>
//         <p>Téléphone: {user ? user.address : "Chargement"}</p>
//         {/*<p>Adresse: {user && user.address ? user.adress : "Donnée à renseigner"}</p>*/}
//         <Button as={Link} to={`/add-modifinformation/${id}`}>Modifier mes données</Button>
//         <Button variant={"info"} onClick={() => setShowAvatar(!showAvatar)}>Ajouter une image</Button>

//         {
//             showAvatar && (
//                 <Form onSubmit={sendAvatar} className={"w-25 my-3"}>
//                     <Form.Group className="mb-3">
//                         <Form.Label>Votre avatar</Form.Label>
//                         <Form.Control
//                             type="text"
//                             name={"avatar"}
//                             value={avatar}
//                             onChange={(e) => setAvatar(e.target.value)}
//                         />
//                     </Form.Group>
//                     <button type={"submit"} className={"btn btn-primary"}>Envoyer</button>
//                 </Form>
//             )
//         }
//     </div>



//     )
// }
// export default ModifyInformationsProfessionnellesPage