import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        return (
            <div className="card p-2 shadow p-3 mb-5 bg-white rounded">
                {this.props.children}
            </div>
        )
    }
}
