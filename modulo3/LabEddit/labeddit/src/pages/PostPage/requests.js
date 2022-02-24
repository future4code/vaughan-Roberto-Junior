import axios from "axios";
import { useEffect, useState } from "react";
import { BaseURL } from "../../Services/BaseURL";

  export default function GetPostsFeed() {
    const [arrPosts, setArrPosts] = useState([]);
  
    useEffect(() => {GetPostsAtt()}, []);
  
      const GetPostsAtt = () => {
        const auth = { headers: { Authorization: localStorage.getItem("token") } };
        axios
          .get(`${BaseURL}/posts`, auth)
          .then((res) => {
            setArrPosts(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    
  
    return [arrPosts, GetPostsAtt];
  }

  export const PostVoteComment = (id, dir, AttComment) => {
    const auth = { headers: { Authorization: localStorage.getItem("token") } };
    const body = {
      direction: dir,
    };
  
    axios
      .post(`${BaseURL}/comments/${id}/votes`, body, auth)
      .then((resp) => {
        if (dir === 1) {
          alert("Voto Positivo");
          AttComment();
        } else {
          alert("Voto Negativo");
          AttComment();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };


  export const DeleteVoteComment = (id, AttComment) => {
    const auth = { headers: { Authorization: localStorage.getItem("token") } };
    axios
      .delete(`${BaseURL}/comments/${id}/votes`, auth)
      .then((res) => {
        alert("Voto Deletado");
        AttComment();
      })
      .catch((err) => {
        console.log(err);
      });
  };


  export const GetPostComment = (param) => {

    
    const [arrPosts, setArrPosts] = useState([]);

    useEffect(() => {
        AttComment();
    },[])


    const AttComment = () => {

      const auth = { headers: { Authorization: localStorage.getItem("token") } };
      axios
        .get(`${BaseURL}/posts/${param.id}/comments`, auth)
        .then((res) => {
          setArrPosts(res.data);
        })
        .catch((err) => {
          console.log(err);
        });

    }

    return [arrPosts, AttComment]

    
  };