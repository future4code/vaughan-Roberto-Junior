import axios from "axios"
import { useEffect, useState } from "react"
import { BaseURL } from "../../Services/BaseURL"


export default function FeedPage(){
    const [arrPosts, setArrPosts] = useState([]);


    useEffect(()=>{
        getPostsFeed();
    }, [])


    const getPostsFeed = () => {
        const auth = {headers:{Authorization: localStorage.getItem('token')}}
       axios.get(`${BaseURL}/posts`, auth)
       .then((res) => {
           setArrPosts(res.data)

       }).catch((err) => {
           console.log(err);
       })
    }

    const PostsFeed = arrPosts.map((item) => {
        return(
            <li>{item.body}</li>
        )
    })


    return(
       <p>{PostsFeed}</p>
    )
}