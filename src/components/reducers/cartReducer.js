import { REMOVE_ITEM, ADD_QUANTITY, LESS_QUANTITY, ADD_WISHLIST, REMOVE_WISHLIST } from '../actions/actionTypes'

// Items
import Item1 from "../../assets/img/item_1.jpg"
import Item2 from "../../assets/img/item_2.jpg"
import Item3 from "../../assets/img/item_3.jpg"

const initState = {
    items: [
        { id: 1, title: 'Buah Segar', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", unit: "Kg", price: 11000, quantity: 1, limit: 10, img: Item1 },
        { id: 2, title: 'Sayuran Segar', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", unit: "Kg", price: 8000, quantity: 1, limit: 5, img: Item2 },
        { id: 3, title: 'Gandum Alami', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", unit: "Kg", price: 12000, quantity: 1, limit: 3, img: Item3 },
    ],
}

const cartReducer = (state = initState, action) => {
    if (action.type === REMOVE_ITEM) {
        let new_items = state.items.filter(item => action.id !== item.id)
        return {
            ...state,
            items: new_items,
        }
    } else if (action.type === ADD_QUANTITY) {
        let new_items = state.items.map(item => {
            if (item.id === action.id) {
                item.quantity += 1
            }
            return item
        })
        return {
            ...state,
            items: new_items,
        }
    } else if (action.type === LESS_QUANTITY) {
        let new_items = state.items.map(item => {
            if (item.id === action.id) {
                item.quantity -= 1
            }
            return item
        })
        return {
            ...state,
            items: new_items,
        }
    } else if (action.type === ADD_WISHLIST) {
        const wishlist = JSON.parse(localStorage.getItem("wishlist"))
        if (!wishlist.some(v => {
            return v.id === action.item.id
        })) {
            wishlist.push(action.item)
        }
        localStorage.setItem("wishlist", JSON.stringify(wishlist))
        return state
    } else if (action.type === REMOVE_WISHLIST) {
        const wishlist = JSON.parse(localStorage.getItem("wishlist")).filter(v => {
            return v.id !== action.id
        })
        localStorage.setItem("wishlist", JSON.stringify(wishlist))
        return state
    } else {
        return state
    }
}

export default cartReducer