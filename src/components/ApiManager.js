


export const getAllCustomers = () => {
    return fetch("http://localhost:8088/customers")
        .then(res => res.json())
}
export const getAllEmployees = () => {
    return fetch("http://localhost:8088/employees")
        .then(res => res.json())
}
export const getAllTickets = () => {
    return fetch("http://localhost:8088/serviceTickets?_expand=employee&_expand=customer")
        .then(res => res.json())
}
