import React, { Component } from 'react'


class CandyList extends Component {
    render() {
        return (
            <section className="candylist">
            {
                this.props.candy.map(x =>
                    <div key={x.id}>
                        <h1>{x.name}</h1>

                    </div>
                )
            }

            </section>


        )
    }
}

export default CandyList