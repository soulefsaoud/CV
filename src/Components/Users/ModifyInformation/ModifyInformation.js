// // import {Button, Col, Form, Row} from "react-bootstrap";
// // import React, {Fragment, useState, useEffect} from "react";
// // import axios from "axios";
// // import {useHistory, useParams} from "react-router-dom"

// // import { v4 as uuidv4 } from "uuid";

// // const ModifyInformation = () => {
// //     const history = useHistory()
// //     const {inform} = useParams()
// //     const [information, setInformation] = useState()
// //     const [first_name, setFirstName] = useState(information && information.first_name)
// //     const [last_name, setLastName] = useState()
// //     const [email, setEmail] = useState()
// //     const [address, setAddress] = useState()
// //     const [telephone, setTelephone] = useState()
  
    
//     // const = useFormik({
//     //     initialValues: {
//     //         id: uuidv4(),
//     //         first_name: "",
//     //         last_name:"",
//     //         email:"",
//     //         address:"",
//     //         telephone:"",
//     //        },

//         // validate,
//         //   onSubmit: async ( => {

//         //     await registerUser({ ...);
//         //     history.goBack()
//             // emailjs
//             //     .send(
//             //         "service_ffghfghfghfgm",
//             //         "template_gfhfghfghgfh3fx",
//             //         
//             //         "user_w1ghfhjfgjfgjfgjsEeOp"
//             //     )
//             //     .then(
//             //         (result) => {
//             //             console.log(result.text);
//             //         },
//             //         (error) => {
//             //             console.log(error.text);
//             //         }
//             //     );
//     //     },
//     // });


//     const handleSubmit = async (e) => {
//         e.preventDefault()
//         try {
//             await axios.patch(`http://localhost:3001/informations/${inform}`, {first_name, last_name, email,address, telephone })
//             history.goBack()
//         } catch (e) {
//             console.error(e.message)
//         }
//     }

//     const fetchModifyInformation = async () => {
//         try {
//             const {data} = await axios.get(`http://localhost:3001/informations/${inform}`)
//             setInformation(data)
//             setFirstName(data.first_name)
//             setLastName(data.last_name)
//             setEmail(data.email)
//             setAddress(data.address)
//             setTelephone(data.telephone)
//            } catch (e) {
//             console.error(e.message)
//         }
//     }

//     const registerUser = async (user) => {
//         try {
//             await axios.post(`http://localhost:3001/users`, user);
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     useEffect(() => {
//         fetchModifyInformation()
//     }, [])



//     //  return !information ? <h1>Loading</h1> : (
//         return (
//             <div className={"container mt-5"}>
//                 <Form onSubmit={handleSubmit}>
//                     <Form.Group className="mb-3">
//                         <Form.Label>Prénom</Form.Label>
//                         <Form.Control
//                             type="text"
//                             name={"first_name"}
//                             value={first_name}
//                              onChange={e => setFirstName(e.target.value)}
//                         />
//                         {/* <Form.Text className="text-danger">
//                             {touched.first_name &&
//                             errors.first_name &&
//                             errors.first_name}
//                         </Form.Text> */}
//                     </Form.Group>
    
//                     <Form.Group className="mb-3">
//                         <Form.Label>Nom</Form.Label>
//                         <Form.Control
//                             type="text"
//                             name={"last_name"}
//                             value={last_name}
//                             onChange={e => setLastName(e.target.value)}
//                         />
//                         {/* <Form.Text className="text-danger">
//                             {touched.last_name && errors.last_name && errors.last_name}
//                         </Form.Text> */}
//                     </Form.Group>
    
//                     <Form.Group className="mb-3">
//                         <Form.Label>Email</Form.Label>
//                         <Form.Control
//                             type="text"
//                             name={"email"}
//                             value={email}
//                             onChange={e => setEmail(e.target.value)}
//                         />
//                         {/* <Form.Text className="text-danger">
//                             {touched.email &&
//                             errors.email &&
//                             errors.email}
//                         </Form.Text> */}
//                     </Form.Group>
    
//                     <Form.Group className="mb-3">
//                         <Form.Label>adresse</Form.Label>
//                         <Form.Control
//                             type="text"
//                             name={"address"}
//                             value={address}
//                              onChange={e => setAddress(e.target.value)}
//                         />
//                         {/* <Form.Text className="text-danger">
//                             {touched.address &&
//                             errors.address &&
//                             errors.address}
//                         </Form.Text> */}
//                     </Form.Group>
    
//                     <Form.Group className="mb-3">
//                         <Form.Label>telephone</Form.Label>
//                         <Form.Control
//                             type="text"
//                             name={"telephone"}
//                             value={telephone}
//                              onChange={e => setTelephone(e.target.value)}
//                         />
//                         {/* <Form.Text className="text-danger">
//                             {touched.telephone &&
//                             errors.telephone &&
//                             errors.telephone}
//                         </Form.Text> */}
//                     </Form.Group>
    
                  
             
          
//             <Form.Group className="mb-3 ">
//                 <Button className={"mx-3"} type={"submit"} variant="outline-primary"> Sauvegarder </Button>
//                 <Button onClick={() => history.goBack()} className={"mx-3"} variant="outline-primary">Annuler</Button>
//             </Form.Group>
//         </Form>
//         </div>
//     )
// }
// export default ModifyInformation



import {Button, Col, Form, Row} from "react-bootstrap";
import React, {Fragment, useState, useEffect} from "react";
import axios from "axios";
import {useHistory, useParams}  from "react-router-dom";

const ModifyInformation = () => {
    const history = useHistory()
    const {inform} = useParams()
    const [information, setInformation] = useState()
    const [first_name, setFirstName] = useState(information && information.first_name)
    const [last_name, setLastName] = useState()
    const [email, setEmail] = useState()
    const [address, setAddress] = useState()
    const [telephone, setTelephone] = useState()
  
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.patch(`http://localhost:3001/informations/${inform}`, {first_name, last_name,  email, address, telephone})
            history.goBack()
        } catch (e) {
            console.error(e.message)
        }
    }

    const fetchInformation = async () => {
        try {
            const {data} = await axios.get(`http://localhost:3001/informations/${inform}`)
            setInformation(data)
            setFirstName(data.first_name)
            setLastName(data.last_name)
            setEmail(data.email)
            setAddress(data.address)
            setTelephone(data.telephone)
           } catch (e) {
            console.error(e.message)
        }
    }

    useEffect(() => {
        fetchInformation()
    }, [])

    // return !information ? <h1>Loading</h1> : (
        return (  
        <Form onSubmit={handleSubmit}>
            <Row>
                <Col>
                    <Form.Group className="mb-3 ">
                        <Form.Control
                            type="text"
                            placeholder="Intitulé du poste"
                            name={"first_name"}
                            value={first_name}
                            onChange={e => setFirstName(e.target.value)}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group className="mb-3 ">
                        <Form.Control
                            type="text"
                            placeholder="Last_name"
                            name={"last_name"}
                            value={last_name}
                            onChange={e => setLastName(e.target.value)}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group className="mb-3 ">
                        <Form.Control
                            type="text"
                            placeholder="Email"
                            name={"email"}
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Fragment>
                    <Col md={6}>
                        <Form.Group className="mb-3 ">
                            <Form.Control
                                type="text"
                                placeholder="Address"
                                name={"address"}
                                value={address}
                                onChange={e => setAddress(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                </Fragment>

                <Fragment>
                    <Col md={6}>
                        <Form.Group className="mb-3 ">
                            <Form.Control
                                type="text"
                                placeholder="Telephone"
                                name={"telephone"}
                                value={telephone}
                                onChange={e => setTelephone(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                </Fragment>
            </Row>

            


            <Form.Group className="mb-3 ">
                <Button className={"mx-3"} type={"submit"} variant="outline-primary"> Sauvegarder </Button>
                <Button onClick={() => history.goBack()} className={"mx-3"} variant="outline-primary">Annuler</Button>
            </Form.Group>
        </Form>
    )
}
export default ModifyInformation;