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

export function CreatePost(form, GetPostsAtt) {
  
  const [msgRequest, setMsgRequest] = useState("");
  
  const PostPost = () => {
    const auth = { headers: { Authorization: localStorage.getItem("token") } };
    axios
      .post(`${BaseURL}/posts`, form, auth)
      .then((res) => {
        setMsgRequest("Post Criado Com Sucesso");
        alert("Post Criado Com Sucesso");
        GetPostsAtt();
      })
      .catch((err) => {
        setMsgRequest("Algo aconteceu , revise os campos e tente novamente");
        alert("Algo aconteceu , revise os campos e tente novamente");
        console.log(err.data);
        GetPostsAtt();
      });
  };

  return [msgRequest, PostPost];
}


export const PostVote = (id, dir, GetPostsAtt) => {
  const auth = { headers: { Authorization: localStorage.getItem("token") } };
  const body = {
    direction: dir,
  };

  axios
    .post(`${BaseURL}/posts/${id}/votes`, body, auth)
    .then((resp) => {
      if (dir === 1) {
        alert("Voto Positivo");
        GetPostsAtt();
      } else {
        alert("Voto Negativo");
        GetPostsAtt();
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const DeleteVote = (id, dir, GetPostsAtt) => {
  const auth = { headers: { Authorization: localStorage.getItem("token") } };
  axios
    .delete(`${BaseURL}/posts/${id}/votes`, auth)
    .then((res) => {
      alert("Voto Deletado");
      GetPostsAtt();
    })
    .catch((err) => {
      console.log(err);
    });
};