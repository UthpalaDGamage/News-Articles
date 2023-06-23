import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArticleFetch } from "../redux/actions/actions";
const Home = ({favoriteArticle, addToFavorite}) => {
    const [searchKey, setSearchKey] = useState("");
    const [filteredArticle, setFilteredArticle] = useState([]);
    // const [favoriteArticle, setFavoriteArticle] = useState([]);
    const dispatch = useDispatch();
    const articles = useSelector((state)=> state.articleReducer.article);


    const searchKeyChange = (e) => {
        setSearchKey(e.target.value);
    }

    useEffect(() => {   
        dispatch(getArticleFetch());
        },[]);

        useEffect(()=>{
            console.log("-------",articles)
            setFilteredArticle(articles);
        },[articles])

        useEffect(()=>{
            if(searchKey){
                setFilteredArticle(articles.filter(at => 
                    at.title.toLowerCase().includes(searchKey.toLowerCase()) ||
                    at.summary.toLowerCase().includes(searchKey.toLowerCase())
                ))
            }
          
        },[searchKey])

        // useEffect(()=>{
        //     if(favoriteArticle.length >0){
        //         console.log(favoriteArticle);
        //     }
        // },[favoriteArticle])

        // const addToFavorite = (article) =>{
        //     console.log("favorite 1 :", article);

        //     if(article){
        //          const favorites = [...favoriteArticle, article];
        //          setFavoriteArticle(favorites);
        //     }
            
        // }


    return <>
        <h1 className="text-cyan-800 text-xl my-5"> Home Page</h1>

       <span className="mx-5"> Search</span> <input type="text" value={searchKey} onChange={searchKeyChange} className="border-2 border-indigo-500 my-5"></input>
        <div className="grid grid-cols-4 gap-4 bg-gray-100">
        {filteredArticle?.map(article => 
        (
            <>
        
            <div className="relative bg-white rounded overflow-hidden shadow-md m-5">
                
                <img src={article.image_url} alt={article.title} className="object-cover h-48 w-96" />
                <div className="p-5 text-sm">
                <h4 className="text-gray-500">News site : {article.news_site}</h4>
                    <h3 className="text-gray-500 text-lg"> {article.title}</h3>
                    <div className=" my-5 flex justify-center text-xs">
                        <p className="text-gray-500 ">Published at: {article.published_at.split(".")}</p>
                        <p className="text-gray-500 ">Updated at: {article.updated_at.split(".")}</p>
                    </div>
                    <p className="text-gray-500 text-xs">{article.summary}</p>
                    {favoriteArticle.find(at =>at.id == article.id) ? '': <input type="button" value="favorite" className=" p-2 mt-4 bg-slate-400 rounded-md text-white" onClick={() => addToFavorite(article)}></input>
                    }
                   
                   
                     
                </div>
               
            </div>
           
            </>
     
        ))}
        </div>
        
    </>
}

export default Home;