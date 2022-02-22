import axios from "axios";
import { useEffect, useState } from "react";
import { BaseURL } from "../../Services/BaseURL";

export default function GetPostsFeed() {
    const [arrPosts, setArrPosts] = useState([]);
  
    useEffect(() => {
      const auth = { headers: { Authorization: localStorage.getItem("token") } };
      axios
        .get(`${BaseURL}/posts`, auth)
        .then((res) => {
          setArrPosts(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
  
    return arrPosts;
  }