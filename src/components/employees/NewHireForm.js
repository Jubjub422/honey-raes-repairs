import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";






export const EmployeeSignUpForm = () => {
    const [employee, setEmployee] = useState();


    const history = useHistory()

    const saveEmployee = (event) => {
        event.preventDefault()
        const newEmployee = {
            name: employee.name,
            specialty: employee.specialty,
            
        }

        const fetchOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEmployee)
        }
        return fetch("http://localhost:8088/employees", fetchOptions)
        .then(() => {
            history.push("/employees")
        })
    }

    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">Employee Registration form</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="Name">Name:</label>
                    <input
                    onChange={
                        (evt) => {
                            const copy = {...employee}
                            copy.name = evt.target.value
                            setEmployee(copy)
                        }
                    } 
                        />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="specialty">Specialty:</label>
                    <input 
                        onChange={
                            (evt) => {
                                const copy = {...employee}
                                copy.specialty = evt.target.value
                                setEmployee(copy)
                            }
                        } />
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={saveEmployee}>
                Register
            </button>
        </form>
    )
}