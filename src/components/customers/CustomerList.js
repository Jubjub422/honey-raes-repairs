import React, { useEffect, useState } from "react"
import { getAllCustomers } from "../ApiManager"


//react component html is called JSX
export const CustomerList = () => {


    //this is application state in react, a deconstructed array set to a function (hook)
    const [customers, setCustomers] = useState([])
    const [totalCustomerMessage, updateMessage] = useState("")

    //only runs when state changes, useEffect is hard coded into react
    useEffect(
        () => {
            getAllCustomers()
                .then((customerArray) => {
                    setCustomers(customerArray)
                })
        },
        //this array right here is not watching any state, so this code effectively runs once -- STEVE
        []
    )
    useEffect(
        () => {
            if (customers.length === 1) {
                updateMessage("you have 1 customer")
            }
            else {
                updateMessage(`you have ${customers.length} customers`)
            }

        },
        [customers]
    )

    //*the <> and </> are called fragment, where we can put 2 (or more) elements together and return them as one JSX element
    return (
        <>
            <div>{totalCustomerMessage}</div>
            {
                customers.slice(0, 5).map(
                    (customerObject) => {
                        //*when using JSX, assign a key to each html element with "key={the key of the element}"
                        return <p key={`customer--${customerObject.id}`}>{customerObject.name}</p>
                    }
                )
            }
        </>

    )
}







//!useEffect breakdown
//?useEffect has 2 arguments it needs, 
//?a function telling it what to do when the state is changed, 
//?and what state specifically to look for the change in.
// useEffect(
    //*what should run
//     () => {},
    //*when it should run
//     []
// )