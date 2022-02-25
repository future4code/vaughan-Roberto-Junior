
import { useNavigate, useParams } from "react-router-dom";
import useForm from "../../Hooks/UseForm";
import useProtectedPage from "../../Hooks/UseProtectedPage";
import NavBar from "../FeedPage/components/NavBar";
import PostDetailComment from "./components/PostDetailComment";
import PostDetailId from "./components/PostDetailId";
import { DeleteVoteComment, GetPostComment, PostVoteComment, CreateComment} from "./requests";
import {goToFeed} from '../../Routes/RedirectPage'
import { DivPostPage, DivMasterPost } from "./styled";
import FormComment from "./components/FormComment";
import GetPostsFeed from "../FeedPage/requests";

export default function PostPage() {
  useProtectedPage();
  const param = useParams();
  const navigate = useNavigate();
  const [form, onChange, clear] = useForm({ body: "" });
  const [arrPostsComment, AttComment] = GetPostComment(param);
  const [arrPostsId, GetPostsAtt, loading] = GetPostsFeed();

  const VoteValidate = (id, dir) => {
    const newArr = arrPostsComment.filter((item) => {
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


  const postComment = (e) => {
    e.preventDefault();
    CreateComment(param, form, AttComment, clear);
  };

  return (
    <DivMasterPost>
      <NavBar/>
      <DivPostPage>
       <button className="btn btn-dark" onClick={() => goToFeed(navigate)}>Voltar</button>
        <PostDetailId
          arrPostsId={arrPostsId}
          param={param}
        />
        <FormComment 
         form={form}
         postComment={postComment}
         onChange={onChange}
        />
        <PostDetailComment
         arrPosts={arrPostsComment}
         VoteValidate={VoteValidate}
        />
      </DivPostPage>
    </DivMasterPost>
  );
}
