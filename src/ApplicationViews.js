import { Route } from 'react-router-dom'
import React, { Component } from "react"
import CandyList from './components/candylist'
import LocationList from './components/stores'
import EmployeeList from './components/employees'



class ApplicationViews extends Component {
    /*
        Although you will eventually be pulling your objects
        from your json-server API, for this chapter, we're
        faking it and just creating those arrays in the component
        itself
    */
   employeesFromAPI = [
    { id: 1, name: "Jessica Younker" },
    { id: 2, name: "Jordan Nelson" },
    { id: 3, name: "Zoe LeBlanc" },
    { id: 4, name: "Blaise Roberts" }
]

// This will eventually get pulled from the API
storesAPI = [
    { id: 1, name: "Nashville North", address: "500 Circle Way" },
    { id: 2, name: "Nashville South", address: "10101 Binary Court" }
]

candyAPI = [
    {id:1, name: "Jolly Ranchers", typeId: "2"},
    {id:2, name: "Snikers", typeId: "1"},
    {id:3, name: "Twix", typeId: "3"},
    {id:4, name: "Receese", typeId: "4"},

]




state = {
    employees: this.employeesFromAPI,
    stores: this.storesAPI,
    candy: this.candyAPI,

}
    render() {
        return (
            <div className="container-div">
                <Route exact path="/" render={(props) => {
                    return <LocationList stores={this.state.stores} />
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