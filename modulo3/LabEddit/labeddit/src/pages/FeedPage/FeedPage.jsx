import GetPostsFeed, { DeleteVote } from "./requests";
import { CreatePost, PostVote } from "./requests";
import { DivFeed, FirstDivFeed} from "./styled";
import useForm from "../../Hooks/UseForm";
import { useNavigate } from "react-router-dom";
import useProtectedPage from "../../Hooks/UseProtectedPage";
import PostsFeed from "./components/PostsFeed";
import FormPost from "./components/FormPost";
import NavBar from "./components/NavBar";
import Pagination from "./components/Pagination";

export default function FeedPage() {
  useProtectedPage();
  const navigate = useNavigate();

  const [form, onChange, clear] = useForm({ title: "", body: "" });

  const [arrPosts, GetPostsAtt, loading] = GetPostsFeed();
  const [msgPost, functionPost] = CreatePost(form, GetPostsAtt);
  const [stateVote, VoteFunction, idVote] = PostVote();
  const [stateVoteDel, functionDelete, idVoteDel] = DeleteVote();

  const PostDetails = (id) => {
    navigate(`/PostPage/${id}`);
  };

  const VoteValidate = (id, dir) => {
    const newArr = arrPosts.filter((item) => {
      return item.id === id;
    });

    if (
      (dir === 1 && newArr[0].userVote === 1) ||
      (dir === -1 && newArr[0].userVote === -1)
    ) {
      functionDelete(id, dir, GetPostsAtt);
      return false;
    }

    VoteFunction(id, dir, GetPostsAtt);
  };

  const submitPost = (e) => {
    e.preventDefault();
    functionPost();
    clear();
  };

  return (
    <FirstDivFeed>
      <NavBar />
      <DivFeed>
        {msgPost ? <div className="alert alert-success" role="alert">
           Post Criado Com Sucesso !
        </div> : null}
        <FormPost 
        submitPost={submitPost} 
        onChange={onChange} 
        form={form} 
        />
        <Pagination 
        GetPostsAtt={GetPostsAtt}
        />
        <PostsFeed
          loading={loading}
          arrPosts={arrPosts}
          PostDetails={PostDetails}
          VoteValidate={VoteValidate}
          stateVote={stateVote}
          idVote={idVote}
          stateVoteDel={stateVoteDel}
          idVoteDel={idVoteDel}
        />
      </DivFeed>
    </FirstDivFeed>
  );
}
