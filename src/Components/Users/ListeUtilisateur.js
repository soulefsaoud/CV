import React, { useEffect, useState } from "react";
import axios from "axios";
import StudentList from "./students-list/StudentList";
import EntreprisesList from "./entreprises-list/EntreprisesList";
import {Button} from "react-bootstrap";

const UserList = () => {
  const[admin, setAdmin]= useState(false)
  const [toggle, setToggle] = useState(true)

  useEffect(() => {
    const getAdmin = async () => {
      try {
        const {data} = await axios.get(`http://localhost:3001/logged`)
        const logged = data.role
  
        if (logged === "admin") {
          setAdmin(true)
        }
      } catch (e) {
        console.error(e.message)
      }
    }
    getAdmin()
  }, []);

  return (
      <div className={"container my-5"}>
        <div className={"mb-4 w-50 mx-auto d-flex justify-content-between"}>
          <Button onClick={() => setToggle(true)} variant={"primary"}>Liste des élèves</Button>
          <Button onClick={() => setToggle(false)} variant={"secondary"}>Liste des entreprises</Button>
        </div>
        {toggle ? <StudentList admin={admin} /> : <EntreprisesList admin={admin} />}
      </div>
  )
};

export default UserList;
