import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const Employee = () => {
    const [employee, set] = useState({})  // State variable for current employee object
    const { employeeId } = useParams()  // Variable storing the route parameter

    useEffect(
        () => {
            /*the employeeId is interpolated here to display whatever employee the user clicked on */
            fetch(`http://localhost:8088/employees/${employeeId}`)
                .then(res => res.json())
                .then((data) => {
                    set(data)
                })
        },
        [ employeeId ]  // Above function runs when the value of employeeId change
    )

    return (
        <>
            <section className="employee">
                <h3 className="employee__name">{employee.name}</h3>
                
                <div className="employee__specialty">Specialty: {employee.specialty}</div>
            </section>
        </>
    )
}
