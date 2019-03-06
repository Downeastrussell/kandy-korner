import { Route } from 'react-router-dom'
import React, { Component } from "react"
import CandyList from './components/candylist'
import StoresList from './components/stores'
import EmployeeList from './components/employees'



class ApplicationViews extends Component {
   state = {
    employees: [],
    stores: [],
    candy: []

}

componentDidMount() {
    const newState = {}

    fetch("http://localhost:5002/store")
        .then(r => r.json())
        .then(store => {newState.stores = store})
        .then(() => fetch("http://localhost:5002/employees")
        .then(r => r.json()))
        .then(employees => newState.employees = employees)
        .then(() => fetch("http://localhost:5002/candy")
        .then((r)=>r.json()))
        .then(candy => {newState.candy = candy

            this.setState(newState)})

}






    render() {
        return (
            <div className="container-div">
                <Route exact path="/" render={(props) => {
                    return <StoresList stores={this.state.stores} />
                }} />
                <Route path="/candy" render={(props) => {
                    return <CandyList candy={this.state.candy} />
                }} />
                <Route path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} />
                }} />

            </div>
        )
    }
}

export default ApplicationViews