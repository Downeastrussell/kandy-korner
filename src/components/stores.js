import React, { Component } from 'react'


class StoresList extends Component {
    render() {
        return (
            <section className="stores">
            {
                this.props.stores.map(stores =>
                    <div key={stores.id}>
                        <h1>{stores.name}</h1>
                        <p>{stores.address}</p>
                    </div>
                )
            }
            </section>
        )
    }
}

export default StoresList