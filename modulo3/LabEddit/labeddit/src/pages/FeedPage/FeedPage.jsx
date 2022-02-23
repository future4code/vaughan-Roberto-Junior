import GetPostsFeed from "./requests";
import { CreatePost } from "./requests";
import { DivFeed } from "./styled";
import axios from "axios";
import { BaseURL } from "../../Services/BaseURL";
import useForm from "../../Hooks/UseForm";
import { useNavigate } from "react-router-dom";
import useProtectedPage from "../../Hooks/UseProtectedPage";
import PostsFeed from "./components/PostsFeed";
import FormPost from "./components/FormPost";

export default function FeedPage() {

  useProtectedPage();

  const [form, onChange, clear] = useForm({ title: "", body: "" });
  const navigate = useNavigate();

  const arrPosts = GetPostsFeed();
  const [msgPost, functionPost] = CreatePost(form);

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
      DeleteVote(id, dir);
      return false;
    }

    PostVote(id, dir);
  };

  const PostVote = (id, dir) => {
    const auth = { headers: { Authorization: localStorage.getItem("token") } };
    const body = {
      direction: dir,
    };

    axios
      .post(`${BaseURL}/posts/${id}/votes`, body, auth)
      .then((resp) => {
        console.log(resp);
        if (dir === 1) {
          alert("Voto Positivo");
        } else {
          alert("Voto Negativo");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const DeleteVote = (id, dir) => {
    const auth = { headers: { Authorization: localStorage.getItem("token") } };
    axios
      .delete(`${BaseURL}/posts/${id}/votes`, auth)
      .then((res) => {
        alert("Voto Deletado");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const submitPost = (e) => {
    e.preventDefault();
    functionPost();
    clear();
  };

  console.log(arrPosts);

  return (
    <DivFeed>
      <FormPost 
      submitPost={submitPost} 
      onChange={onChange} 
      form={form} />
      
      <PostsFeed
        arrPosts={arrPosts}
        PostDetails={PostDetails}
        VoteValidate={VoteValidate}
      />
    </DivFeed>
  );
}
