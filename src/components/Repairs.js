import React from "react"
import { CustomerList } from "./customers/CustomerList"
import { EmployeeList } from "./employees/EmployeeList"
import { TicketList } from "./serviceTickets/TicketList"


//react component html is called JSX
export const Repairs = () => {


    //*the <> and </> are called fragment, where we can put 2 (or more) elements together and return them as one JSX element
    return (
        <>
            <h1>Honey Rae's Repair Shop</h1>

            <h3>Customers</h3>
            <CustomerList />
            <h3>Employees</h3>
            <EmployeeList/>
            <h3>Service Tickets</h3>
            <TicketList/>
            
        </>

    )
}