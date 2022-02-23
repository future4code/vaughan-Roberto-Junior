import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import useForm from "../../Hooks/UseForm";
import useProtectedPage from "../../Hooks/UseProtectedPage";
import { BaseURL } from "../../Services/BaseURL";
import GetPostsFeed from "./requests";
import { DivPostPage, DivFooterPost, FeedDetail} from './styled'


export default function PostPage() {
  useProtectedPage();
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
      <FeedDetail
        className="card bg-light mb-1"
        style={{ width: '80%' }}
        key={item.id}
      >
        <div className="card-header">Postado Por <b>{item.username}</b></div>
        <div className="card-body">
          <p className="card-text">{item.body}</p>
          <hr />
          <DivFooterPost>
            <p className="card-text">{item.voteSum === null ? 0 : item.voteSum} Curtidas</p>
            <div>
            {item.userVote === 1 ? <i
              className="bi bi-caret-up-fill"
              style={{ fontSize: "2rem" }}
              // onClick={() => VoteValidate(item.id, 1)}
            /> : <i
            className="bi bi-caret-up "
            style={{ fontSize: "2rem" }}
            // onClick={() => VoteValidate(item.id, 1)}
          />}
           
            {item.voteSum === null ? 0 : item.voteSum}

            {item.userVote === -1 ? <i
              className="bi bi-caret-down-fill"
              style={{ fontSize: "2rem" }}
              // onClick={() => VoteValidate(item.id, -1)}
            /> : <i
            className="bi bi-caret-down "
            style={{ fontSize: "2rem" }}
            // onClick={() => VoteValidate(item.id, -1)}
          />}
          </div>
          </DivFooterPost>
        </div>
      </FeedDetail>
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
    className="card bg-light mb-4"
    style={{ width: "80%" }}
    key={item.id}
  >
    <div className="card-header">Postado Por <b>{item.username}</b></div>
    <div className="card-body">
      <h5 className="card-title">{item.title}</h5>
      <p className="card-text">{item.body}</p>
      </div>
      </div>
 )
})


  return (
    <DivPostPage>
        {PostDetailId}
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
        <button className="btn btn-info">Postar</button>
      </form>
      <br />
      {PostsFeedDetails}
    </DivPostPage>
  );
}
