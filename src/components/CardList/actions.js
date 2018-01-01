import * as actionTypes from './constants'

export function increase(data) {
    return{
        type: actionTypes.ARTICLE_PAGE_INCREASE,
        data
    }
}

export function decrease(data) {
    return{
        type: actionTypes.ARTICLE_PAGE_INCREASE,
        data
    }
}

export function reset() {
    return{
        type: actionTypes.ARTICLE_PAGE_RESET,
    }
}