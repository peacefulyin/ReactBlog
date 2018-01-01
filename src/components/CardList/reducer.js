import * as actionTypes from './constants'

const initialState = {nextPage: 1};

export default function cardList(state = initialState, action) {
    switch (action.type) {
        case actionTypes.ARTICLE_PAGE_INCREASE:
            console.log('reducer',Object.assign({}, state, {nextPage: state.nextPage + (action.data || 1)}))
            console.log('daa',action.data)
            return Object.assign({}, state, {nextPage: state.nextPage + (action.data || 1)})
        case actionTypes.ARTICLE_PAGE_DECREASE:
            return Object.assign({}, state, {nextPage: state.nextPage - (action.data || 1)})
        case actionTypes.ARTICLE_PAGE_RESET:
            console.log('reset')
            return Object.assign({}, state, {nextPage: 1})
        default:
            return state
    }
}