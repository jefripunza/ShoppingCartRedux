import React, { Component } from 'react'

import { connect } from 'react-redux'

import Card from "../components/Card"
import Items from "../components/Items"
import Recipe from "../components/Recipe"

class ShoppingCart extends Component {
    render() {
        return (
            <div className="row" style={{ marginRight: 0 }}>
                <div className="col-sm-7 col-md-8">
                    <div className="p-3">
                        <Card >
                            <h3 className='head-item'>Keranjang {this.props.items.length}</h3>
                            {this.props.items.map((item, i) => {
                                if (i > 0) {
                                    return (
                                        <>
                                            <hr />
                                            <Items item={item} />
                                        </>
                                    )
                                }
                                return (
                                    <Items item={item} />
                                )
                            })}
                        </Card>
                    </div>
                </div>
                <div className="col-sm-5 col-md-4">
                    <div className="p-3">
                        <Recipe />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

export default connect(mapStateToProps)(ShoppingCart)