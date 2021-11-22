import React, { useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom"

export const Ticket = () => {
    const [ticket, assignTicket] = useState({})  // State variable for current ticket object
    const [employees, syncEmployees] = useState([])  // State variable for array of employees
    const { ticketId } = useParams()  // Variable storing the route parameter
    const history = useHistory()


    // Fetch the individual ticket when the parameter value changes
    useEffect(
        () => {
            return fetch(`http://localhost:8088/serviceTickets/${ticketId}?_expand=customer&_expand=employee`)
                .then(response => response.json())
                .then((data) => {
                    assignTicket(data)
                })

        },
        [ ticketId ]  // Above function runs when the value of ticketId change
    )

    // Fetch all employees
    useEffect(
        () => {
            fetch(`http://localhost:8088/employees`)
                .then(res => res.json())
                .then((data) => {
                    syncEmployees(data)
                })
        },
        []  // Empty dependency array only reacts to JSX initial rendering
    )

    // Function to invoke when an employee is chosen from <select> element
    const assignEmployee = (evt) => {

        // Construct a new object to replace the existing one in the API
        const updatedTicket = {
            customerId: ticket.customerId,
            employeeId: parseInt(evt.target.value),
            description: ticket.description,
            emergency: ticket.emergency,
            dateCompleted: ticket.dateCompleted
        }

        // Perform the PUT HTTP request to replace the resource
        fetch(`http://localhost:8088/serviceTickets/${ticketId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedTicket)
        })
            .then(() => {
                history.push("/serviceTickets")
            })
    }

    return (
        <>
            <section className="ticket">
                <h3 className="ticket__description">{ticket.description}</h3>
                <div className="ticket__customer">Submitted by {ticket.customer?.name}</div>
                <div className="ticket__employee">Assigned to
                    <select
                        value={ ticket.employeeId }
                        onChange={ (evt) => {
                            assignEmployee(evt)
                        } }>
                        {
                            employees.map(e => <option key={`employee--${e.id}`} value={e.id}>{e.name}</option>)
                        }
                    </select>
                </div>
            </section>
        </>
    )
}
