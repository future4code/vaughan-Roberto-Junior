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

export function CreatePost(form) {
  const [msgRequest, setMsgRequest] = useState("");

  const PostPost = () => {
    const auth = { headers: { Authorization: localStorage.getItem("token") } };
    axios
      .post(`${BaseURL}/posts`, form, auth)
      .then((res) => {
        setMsgRequest("Post Criado Com Sucesso");
        alert("Post Criado Com Sucesso");
      })
      .catch((err) => {
        setMsgRequest("Algo aconteceu , revise os campos e tente novamente");
        alert("Algo aconteceu , revise os campos e tente novamente");
        console.log(err.data);
      });
  };

  return [msgRequest, PostPost];
}
