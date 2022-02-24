import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import useForm from "../../Hooks/UseForm";
import useProtectedPage from "../../Hooks/UseProtectedPage";
import { BaseURL } from "../../Services/BaseURL";
import NavBar from "../FeedPage/components/NavBar";
import PostDetailComment from "./components/PostDetailComment";
import PostDetailId from "./components/PostDetailId";
import GetPostsFeed, { DeleteVoteComment, GetPostComment, PostVoteComment } from "./requests";
import {goToFeed} from '../../Routes/RedirectPage'
import {
  DivPostPage,
  DivMasterPost,
} from "./styled";

export default function PostPage() {
  useProtectedPage();
  const param = useParams();
  const navigate = useNavigate();
  const [form, onChange, clear] = useForm({ body: "" });
  const [arrPosts, AttComment] = GetPostComment(param);
  const [arrPostsId, GetPostsAtt] = GetPostsFeed();

  console.log(arrPosts);

  const VoteValidate = (id, dir) => {
    const newArr = arrPosts.filter((item) => {
      return item.id === id;
    });

    if (
      (dir === 1 && newArr[0].userVote === 1) ||
      (dir === -1 && newArr[0].userVote === -1)
    ) {
      DeleteVoteComment(id, AttComment);
      return false;
    }

    PostVoteComment(id, dir, AttComment);
  };


  const CreateComment = () => {
    const auth = { headers: { Authorization: localStorage.getItem("token") } };
    axios
      .post(`${BaseURL}/posts/${param.id}/comments`, form, auth)
      .then((res) => {
        alert("Comentário Criado Com Sucesso !");
        AttComment();
      })
      .catch((err) => {
        alert("Ops! Falha ao comentar");
        console.log(err);
        AttComment();
      });
  };


  const postComment = (e) => {
    e.preventDefault();
    CreateComment();
  };

  return (
    <DivMasterPost>
      <NavBar/>
      <DivPostPage>
       <button class="btn btn-dark" onClick={() => goToFeed(navigate)}>Voltar</button>
        <PostDetailId
          arrPostsId={arrPostsId}
          param={param}
        />
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
        <PostDetailComment
         arrPosts={arrPosts}
         VoteValidate={VoteValidate}
        />
      </DivPostPage>
    </DivMasterPost>
  );
}
