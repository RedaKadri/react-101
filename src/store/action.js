export const addArticle = (article) => ({
    type: 'ADD_ARTICLE',
    payload: article
})

export const deleteArticle = (id) => ({
    type: 'DELETE_ARTICLE',
    payload: id
})

export const updateArticle = (article) => ({
    type: 'UPDATE_ARTICLE',
    payload: article
})

export const searchArticle = (id) => ({
    type: 'SEARCH_ARTICLE',
    payload: id
})