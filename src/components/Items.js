import React, { Component } from 'react'

import { connect } from 'react-redux'
import { removeItem, addQuantity, lessQuantity, addWishlist, removeWishlist } from './actions/cartActions'

import { formatRupiah } from "../helper/indo"

import { toast } from 'react-toastify'

class Items extends Component {
    /**
     * 
     * @param {number} id 
     */
    isWishlist = (id) => {
        const wishlist = JSON.parse(localStorage.getItem("wishlist")).filter(v => {
            return v.id === id
        })
        return wishlist.length > 0
    }

    constructor(props) {
        super(props)
        this.state = {
            isWishlist: this.isWishlist(this.props.item.id),
        }
    }

    /**
     * 
     * @param {number} id 
     * @param {string} title 
     */
    handleRemove = (id, title) => {
        this.props.removeItem(id);
        toast.success(`Berhasil menghapus "${title}"`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    /**
     * 
     * @param {number} id 
     */
    handleAddQuantity = (id) => {
        this.props.addQuantity(id);
    }
    /**
     * 
     * @param {number} id 
     */
    handleLessQuantity = (id) => {
        this.props.lessQuantity(id);
    }


    handleAddWishlist = (item) => {
        this.props.addWishlist(item);
        this.setState({
            isWishlist: true,
        })
    }
    handleRemoveWishlist = (id) => {
        this.props.removeWishlist(id);
        this.setState({
            isWishlist: false,
        })
    }

    showWishlist = () => {
        return JSON.parse(localStorage.getItem("wishlist"))
    }

    render() {
        const {
            id,
            img,
            title,
            desc,
            unit,
            price,
            quantity,
            limit,
        } = this.props.item
        let disableMinus = false,
            disablePlus = false
        if (quantity === 1) {
            disableMinus = true
            disablePlus = false
        } else if (quantity === limit) {
            disableMinus = false
            disablePlus = true
        } else {
            disableMinus = false
            disablePlus = false
        }
        const {
            isWishlist,
        } = this.state
        return (
            <>
                <div className="row">
                    <div className="col-md-4">
                        <img className="" src={img} alt="Card cap" />
                    </div>
                    <div className="col-md-5">
                        <h4 className="card-title">{title}</h4>
                        <p className="card-text">{desc}</p>
                        <p className="card-text">Harga : {formatRupiah(price, "Rp.")} {unit}</p>
                        <div className="row">
                            <div className="col-md-6 btn-item">
                                <button type="button" className="btn btn-light" onClick={() => this.handleRemove(id, title)}><i className="bi bi-trash"></i> Hapus Item</button>
                            </div>
                            <div className="col-md-6 btn-item">
                                {isWishlist ? <>
                                    <button type="button" className="btn btn-light" onClick={() => this.handleRemoveWishlist(id)} ><i className="bi bi-heart-fill"></i> Hapus dari Wishlist</button>
                                </> : <>
                                    <button type="button" className="btn btn-light" onClick={() => this.handleAddWishlist(this.props.item)} ><i className="bi bi-heart"></i> Masukan ke Wishlist</button>
                                </>}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="input-group">
                            <span className="input-group-btn">
                                <button type="button" className="btn btn-default btn-number" disabled={disableMinus} onClick={() => this.handleLessQuantity(id)} >
                                    <i className="bi bi-dash"></i>
                                </button>
                            </span>
                            <input type="text" className="form-control input-number" value={quantity} />
                            <span className="input-group-btn">
                                <button type="button" className="btn btn-default btn-number" disabled={disablePlus} onClick={() => this.handleAddQuantity(id)}>
                                    <i className="bi bi-plus"></i>
                                </button>
                            </span>
                        </div>
                        <div className='text-center'>
                            <span>{formatRupiah(price * quantity, "Rp.")}</span>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        items: state.items,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (id) => { dispatch(removeItem(id)) },
        addQuantity: (id) => { dispatch(addQuantity(id)) },
        lessQuantity: (id) => { dispatch(lessQuantity(id)) },

        addWishlist: (item) => { dispatch(addWishlist(item)) },
        removeWishlist: (id) => { dispatch(removeWishlist(id)) },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Items)