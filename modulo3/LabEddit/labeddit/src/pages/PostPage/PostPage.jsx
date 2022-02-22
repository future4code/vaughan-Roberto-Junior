import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useForm from "../../Hooks/UseForm";
import { BaseURL } from "../../Services/BaseURL";
import GetPostsFeed from "./requests";

export default function PostPage() {
  const param = useParams();
  const [form, onChange, clear] = useForm({body: "" });
  const [arrPosts, setArrPosts] = useState([]);
  const arrPostsId = GetPostsFeed();

  useEffect(() => {
    GetPostComment();
  }, []);

  const GetPostComment = () => {
    const auth = { headers: { Authorization: localStorage.getItem("token") } };
    axios
      .get(`${BaseURL}/posts/${param.id}/comments`, auth)
      .then((res) => {
        console.log(res);
        setArrPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const CreateComment = () => {
    const auth = { headers: { Authorization: localStorage.getItem("token") } };
    axios
      .post(`${BaseURL}/posts/${param.id}/comments`, form, auth)
      .then((res) => {
        console.log(res);
        alert('Comentário Criado Com Sucesso !');
        GetPostComment();
      })
      .catch((err) => {
        alert('Ops! Falha ao comentar')
        console.log(err);
        GetPostComment();   
      });
  };

  const PostsFeedDetails = arrPosts.map((item) => {
    return (
      <div
        className="card bg-light mb-1"
        style={{ width: "500px" }}
        key={item.id}
      >
        <div className="card-header">{item.username}</div>
        <div className="card-body">
          <p className="card-text">{item.body}</p>
          <hr />
          <div>
            <p className="card-text">Curtidas: {item.voteSum}</p>
          </div>
        </div>
      </div>
    );
  });

  const postComment = (e) => {
      e.preventDefault();
      CreateComment();
  }

  const PostDetailId = arrPostsId.filter((item) =>{
    return item.id === param.id
}).map((item) => {
    return (
    <div
    className="card bg-light mb-1"
    style={{ width: "500px" }}
    key={item.id}
  >
    <div className="card-header">{item.username}</div>
    <div className="card-body">
      <h5 className="card-title">{item.title}</h5>
      <p className="card-text">{item.body}</p>
      </div>
      </div>
 )
})

console.log(PostDetailId);

  return (
    <p>
        {PostDetailId   }
      <form onSubmit={postComment}>
        <div className="input-group">
          <span className="input-group-text">Escreva Seu Comentário</span>
          <textarea
            className="form-control"
            aria-label="With textarea"
            name="body"
            onChange={onChange}
          ></textarea>
        </div>
        <button>Postar</button>
      </form>
      <br />
      <p>{PostsFeedDetails}</p>
    </p>
  );
}
