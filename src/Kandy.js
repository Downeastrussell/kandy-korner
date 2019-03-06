import React, { Component } from "react"
import NavBar from "./components/nav/NavBar"
import ApplicationViews from "./ApplicationViews"

import "./components/candy.css"
// import "bootstrap/dist/css/bootstrap.min.css"


class Kandy extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <ApplicationViews />
            </React.Fragment>
        )
    }
}

export default Kandy