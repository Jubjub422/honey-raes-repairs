import React, { useEffect, useState } from "react"
import { useHistory, Link } from "react-router-dom/cjs/react-router-dom.min"
import "./Tickets.css"

export const TicketList = () => {
    const [tickets, updateTickets] = useState([])
    const history = useHistory()

    const fetchTickets = () => {
        fetch("http://localhost:8088/serviceTickets?_expand=employee&_expand=customer")
            .then(res => res.json())
            .then((data) => {
                updateTickets(data)
            })
    }

    useEffect(
        () => {
            fetchTickets()
        },
        []
    )
    const deleteTicket = (id) => {
        return fetch(`http://localhost:8088/serviceTickets/${id}`, {
            method: "DELETE"
        })
            .then(
                () => { fetchTickets() }
            )
    }



    return (
        <>
            <button onClick={() => history.push("/serviceTickets/create")}>Create Ticket</button>
            <div>

                {
                    tickets.map(
                        (ticket) => {
                            return <p key={ticket.id} className={ticket.emergency ? "emergency" : "ticket"}>
                                {/* there is a link inside the jsx to make whatever is inside the link tag a hyperling with the path specified in the tag itself */}
                                {ticket.emergency ? "🚑" : ""}  <Link to={`/serviceTickets/${ticket.id}`}>{ticket.description}</Link> submitted by {ticket.customer.name} and worked on by {ticket.employee.name}
                                <button onClick={() => {
                                    deleteTicket(ticket.id)
                                }}>Delete</button>
                            </p>

                        }
                    )
                }
            </div>
        </>
    )
}

