import GetPostsFeed from "./requests";
import {CreatePost} from "./requests";
import { CardPostFeed } from "./styled";
import GifLoading from "../../img/loading.gif";
import styled from "styled-components";
import axios from "axios";
import { BaseURL } from "../../Services/BaseURL";
import useForm from "../../Hooks/UseForm";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const DivComentButton = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const GridPosts = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2%;
`;

export default function FeedPage() {


  const [form, onChange, clear] = useForm({ title: "", body: "" });
  const navigate = useNavigate();


  const arrPosts = GetPostsFeed();
  const [msgPost, functionPost] = CreatePost(form);
  
  const PostDetails = (id) => {
    navigate(`/PostPage/${id}`)
  }

  const PostsFeed = arrPosts.map((item) => {
    return (
      <div
        className="card bg-light mb-1"
        style={{ width: "500px" }}
        key={item.id}
      >
        <div className="card-header" onClick={() => PostDetails(item.id)}>{item.username}</div>
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">{item.body}</p>
          <hr />
          <DivComentButton>
            <p className="card-text">Comentarios: {item.commentCount}</p>
            <button onClick={() => PostVote(item.id, 1)}>Curtir</button>
            {item.voteSum}
            <button onClick={() => PostVote(item.id, -1)}>Descurtir</button>
          </DivComentButton>
        </div>
      </div>
    );
  });

  const PostVote = (id, dir) => {
    const auth = { headers: { Authorization: localStorage.getItem("token") } };
    const body = {
      "direction": dir
    }

    axios.post(`${BaseURL}/posts/${id}/votes`, body, auth)
    .then((resp) => {
      console.log(resp);
      if(dir === 1){
      alert('Voto Positivo');
      }else{
      alert('Voto Negativo');
      }
    })
    .catch((err) => {
      console.log(err);
    })
  }


  const submitPost = (e) => {
    e.preventDefault();
    functionPost();
    clear();
  }

  console.log(arrPosts);

  return (
    <div>
      <form onSubmit={submitPost}>
      <input type="text" name='title' onChange={onChange} className="form-control" placeholder="Titulo" />
        <div className="input-group">
          <span className="input-group-text">Escreva Seu Post</span>
          <textarea className="form-control" aria-label="With textarea" name='body' onChange={onChange}></textarea>
          <button>Postar</button>
        </div>
      </form>
      <GridPosts>
        {PostsFeed.length === 0 ? <img src={GifLoading} /> : PostsFeed}
      </GridPosts>
    </div>
  );
}
