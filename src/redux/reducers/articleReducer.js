import { GET_ARTICLE_ERROR, GET_ARTICLE_SUCCESS, ADD_ARTICLE_FAVORITE_INIT } from "../actions/actions";

const articleReducer = (state = {}, action) =>{
   
    switch(action.type){
        case GET_ARTICLE_SUCCESS:
            console.log(" GET_ARTICLE_SUCCESS : ",action)
            return {...state, article:action.getArticle}
        case GET_ARTICLE_ERROR:
            return {...state, error:action.getArticle}
        case ADD_ARTICLE_FAVORITE_INIT:
            return {...state, favorites:[action.addArticle]}
        default:
            return state;
    }
}

export default articleReducer;