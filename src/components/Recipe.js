import React, { Component } from 'react'

import { connect } from 'react-redux'

import { Accordion } from 'react-bootstrap';

import {
    createSuccess,
    modalLoading,
} from "../components/SweetAlert"

import { formatRupiah } from "../helper/indo"

class Recipe extends Component {
    handleCheckout(event) {
        event.preventDefault()
        modalLoading("Sedang Proses...")
        setTimeout(() => {
            createSuccess("Yeay... sekarang waktunya pembayaran")
        }, 3000);
    }
    render() {
        return (
            <>
                <div className="card p-2 shadow p-3 mb-5 bg-white rounded">
                    <div className="card-body">
                        <div className='head-recipe'>
                            <h5 className="card-title">Jumlah Seluruhnya</h5>
                        </div>
                        <div className="row">
                            <div className="col col-md-7 text-variable">
                                Total Harga :
                            </div>
                            <div className="col col-md-5 text-value">
                                <b>{formatRupiah(this.props.total, "Rp.")}</b>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col col-md-7 text-variable">
                                Shipping :
                            </div>
                            <div className="col col-md-5 text-value">
                                <b>Gratis</b>
                            </div>
                        </div>
                        <hr />
                        <div className="row mb-4">
                            <div className="col col-md-7 text-variable">
                                Total Keseluruhan :
                            </div>
                            <div className="col col-md-5 text-value">
                                <b>{formatRupiah(this.props.total, "Rp.")}</b>
                            </div>
                        </div>
                        <a href="#checkout" onClick={this.handleCheckout} className="btn btn-primary w-100" >Checkout</a>
                    </div>
                </div>
                <div className="card p-2 shadow p-3 mb-5 bg-white rounded">
                    <div className="card-body">
                        <Accordion defaultActiveKey="">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Masukan Kode Diskon</Accordion.Header>
                                <Accordion.Body>
                                    <div class="input-group">
                                        <input type="text" class="form-control" placeholder="Kode Diskon" aria-label="Kode Diskon" aria-describedby="basic-addon1" />
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items,
        total: state.items
            .map(v => {
                return v.price * v.quantity
            })
            .reduce((partial_sum, a) => partial_sum + a, 0)
    }
}

export default connect(mapStateToProps)(Recipe)