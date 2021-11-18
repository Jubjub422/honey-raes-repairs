import React from "react"
import { Route } from "react-router-dom"
import { CustomerList } from "./customers/CustomerList"
import { EmployeeList } from "./employees/EmployeeList"
import { EmployeeSignUpForm } from "./employees/NewHireForm"
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
            <Route exact path="/serviceTickets">
                <TicketList />
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




