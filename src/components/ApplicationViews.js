import React from "react"
import { Route } from "react-router-dom"
import { CustomerList } from "./customers/CustomerList"
import { Employee } from "./employees/Employee"
import { EmployeeList } from "./employees/EmployeeList"
import { EmployeeSignUpForm } from "./employees/NewHireForm"
import { Ticket } from "./serviceTickets/Ticket"
import { TicketForm } from "./serviceTickets/TicketForm"
import { TicketList } from "./serviceTickets/TicketList"


//!responsible for observing a change and rendering specific components based on that change.
export const ApplicationViews = () => {
    return (
        <>
            <Route path="/customers">
                <CustomerList />
            </Route>
            <Route exact path="/employees">
                <EmployeeList />
            </Route>
            <Route exact path="/employees/:employeeId(\d+)">
                <Employee />
            </Route>
            <Route exact path="/serviceTickets">
                <TicketList />
            </Route>
            {/*(/d+) is called a regular expression, and this particular one is for a decimal or number and it checks for a number. */}
            <Route exact path="/serviceTickets/:ticketId(\d+)">
                <Ticket />
            </Route>

            <Route path="/serviceTickets/create">
                <TicketForm />
            </Route>
            <Route path="/employees/create">
                <EmployeeSignUpForm />
            </Route>
        </>
    )
}




