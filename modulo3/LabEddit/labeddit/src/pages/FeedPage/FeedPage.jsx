import GetPostsFeed, { DeleteVote } from "./requests";
import { CreatePost, PostVote} from "./requests";
import { DivFeed, FirstDivFeed} from "./styled";
import useForm from "../../Hooks/UseForm";
import { useNavigate } from "react-router-dom";
import useProtectedPage from "../../Hooks/UseProtectedPage";
import PostsFeed from "./components/PostsFeed";
import FormPost from "./components/FormPost";
import NavBar from "./components/NavBar";

export default function FeedPage() {
  
  useProtectedPage();
  const navigate = useNavigate();

  const [form, onChange, clear] = useForm({ title: "", body: "" });

  const [arrPosts, GetPostsAtt] = GetPostsFeed();
  const [msgPost, functionPost] = CreatePost(form, GetPostsAtt);


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
      DeleteVote(id, dir, GetPostsAtt);
      return false;
    }

    PostVote(id, dir, GetPostsAtt);
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
        <FormPost 
        submitPost={submitPost} 
        onChange={onChange} 
        form={form} 
        />

        <PostsFeed
          arrPosts={arrPosts}
          PostDetails={PostDetails}
          VoteValidate={VoteValidate}
        />
      </DivFeed>
    </FirstDivFeed>
  );
}
