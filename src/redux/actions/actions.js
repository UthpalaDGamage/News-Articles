export const GET_ARTICLE_FETCH = "GET_ARTICLE_FETCH";
export const GET_ARTICLE_SUCCESS = "GET_ARTICLE_SUCCESS";
export const GET_ARTICLE_ERROR = "GET_ARTICLE_ERROR";

export const SEARCH_ARTICLE_FETCH = "SEARCH_ARTICLE_FETCH";
export const SEARCH_ARTICLE_SUCCESS = "SEARCH_ARTICLE_SUCCESS";
export const SEARCH_ARTICLE_ERROR = "SEARCH_ARTICLE_ERROR";

export const ADD_ARTICLE_FAVORITE_INIT = "ADD_ARTICLE_FAVORITE_INIT";
export const ADD_ARTICLE_FAVORITE_SUCCESS = "ADD_ARTICLE_FAVORITE_SUCCESS";
export const getArticleFetch = () => ({
    type:GET_ARTICLE_FETCH
})
export const searchArticleFetch = (searchKey) => ({
    type:SEARCH_ARTICLE_FETCH,
    key:searchKey

})
export const addArticleToFavorite = (article) => ({
    type:ADD_ARTICLE_FAVORITE_INIT,
    article:article
})
