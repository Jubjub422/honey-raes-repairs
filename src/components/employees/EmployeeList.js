import React, { useEffect, useState } from "react"
import { useHistory, Link } from "react-router-dom/cjs/react-router-dom.min"


export const EmployeeList = () => {
    const [employees, changeEmployee] = useState([])
    const [specialties, showSpecialty] = useState("")
    const history = useHistory()

    useEffect(
        () => {
            fetch("http://localhost:8088/employees")
                .then(res => res.json())
                .then((data) => {
                    changeEmployee(data)
                })
        },
        []
    )

    useEffect(() => {
        /*
            1. Use .map() to get the specialty of each employee
            2. Then update a state variable to be a comma-separated string
                (e.g. "iPhone, Printers, ...")
        */
       const specials = employees.map(
           (employeeObj) => {
               
               return  `${employeeObj.specialty}`
            }
               
       )
           
       
       showSpecialty(specials.join(", "))
       
    }, [employees])

    return (
        <>
        <button onClick={() => history.push("/employees/create")}>Register for work</button>
            <div>
                Specialties: {specialties}
            </div>
            {
                employees.map(
                    (employee) => {
                        return <p key={`employee--${employee.id}`}><Link to={`/employees/${employee.id}`}>{employee.name}</Link></p>
                    }
                )
            }
        </>
    )
}
