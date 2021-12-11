import { REMOVE_ITEM, ADD_QUANTITY, LESS_QUANTITY, ADD_WISHLIST, REMOVE_WISHLIST } from './actionTypes'

/**
 * 
 * @param {string} id 
 * @returns 
 */
export const removeItem = (id) => {
    return {
        type: REMOVE_ITEM,
        id
    }
}

/**
 * 
 * @param {string} id 
 * @returns 
 */
export const addQuantity = (id) => {
    return {
        type: ADD_QUANTITY,
        id
    }
}

/**
 * 
 * @param {string} id 
 * @returns 
 */
export const lessQuantity = (id) => {
    return {
        type: LESS_QUANTITY,
        id
    }
}

/**
 * 
 * @param {{
 *  id: number,
 *  title: string,
 *  desc: string,
 *  unit: string,
 *  price: number,
 *  quantity: number,
 *  limit: number,
 *  img: any,
 * }} item 
 */
export const addWishlist = (item) => {
    return {
        type: ADD_WISHLIST,
        item
    }
}

/**
 * 
 * @param {number} id 
 */
export const removeWishlist = (id) => {
    return {
        type: REMOVE_WISHLIST,
        id
    }
}