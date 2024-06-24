import { legacy_createStore } from 'redux';

const initalState = {
    data: "test",
    articles: [
        { id: 1, title: "title1", content: "content1: redux suck" },
        { id: 2, title: "title2", content: "content2: JS is bad but php is worst" }
    ],
    searchedArticle: {}
}

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case 'ADD_ARTICLE':
            return { ...state, articles: [...state.articles, action.payload] }

        case 'DELETE_ARTICLE':
            return { ...state, articles: state.articles.filter((article) => article.id !== action.payload) }

        case 'UPDATE_ARTICLE':
            const articles = state.articles.filter((article) => article.id !== action.payload.id)
            return { ...state, articles: [...articles, action.payload] }

        case 'SEARCH_ARTICLE':
            return { ...state, searchedArticle: state.articles.find(article => article.id === action.payload) }

        default:
            return state
    }
}

export default legacy_createStore(reducer)