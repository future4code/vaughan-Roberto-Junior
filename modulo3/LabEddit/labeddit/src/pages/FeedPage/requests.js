import axios from "axios";
import { useEffect, useState } from "react";
import { BaseURL } from "../../Services/BaseURL";

export default function GetPostsFeed(size, page) {
  const [arrPosts, setArrPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    GetPostsAtt(size, page); 
  }, []);

    const GetPostsAtt = (size, page, noAtt) => {  
      setLoading(noAtt ? false : true);
      const auth = { headers: { Authorization: localStorage.getItem("token") } };
      axios
        .get(`${BaseURL}/posts?page=${page}&size=${size}`, auth)
        .then((res) => {
          setArrPosts(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  

  return [arrPosts, GetPostsAtt, loading];
}

export function CreatePost(form, GetPostsAtt) {
  
  const [msgRequest, setMsgRequest] = useState(false);
  
  const PostPost = () => {
    const auth = { headers: { Authorization: localStorage.getItem("token") } };
    axios
      .post(`${BaseURL}/posts`, form, auth)
      .then((res) => {
        setMsgRequest(true);
        setTimeout(()=>{
          setMsgRequest(false);
        }, 3000)
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
   
  const [stateVote, setStateVote] = useState(false);
  const [idVote, setIdVote] = useState(null);

  const VoteFunction = (id, dir, GetPostsAtt) => {

    const auth = { headers: { Authorization: localStorage.getItem("token") } };
    const body = {
    direction: dir,
  };
      
    axios
    .post(`${BaseURL}/posts/${id}/votes`, body, auth)
    .then((resp) => {
      if (dir === 1) {
        setStateVote('Positive');
        setTimeout(()=>{
          setStateVote(null);
        }, 3000)
        setIdVote(id);
        GetPostsAtt(true, true, true);
      } else {
        setStateVote('Negative');
        setTimeout(()=>{
          setStateVote(null);
        }, 3000)
        setIdVote(id);
        GetPostsAtt(true, true, true);
      }
    })
    .catch((err) => {
      console.log(err);
    });

  
  }

  return [stateVote, VoteFunction, idVote];
  
};

export const DeleteVote = (id, dir, GetPostsAtt) => {


  const [stateVoteDel, setStateVoteDel] = useState(false);
  const [idVoteDel, setIdVoteDel] = useState(null);


  const functionDelete = (id, dir, GetPostsAtt) => {

  const auth = { headers: { Authorization: localStorage.getItem("token") } };
  axios
    .delete(`${BaseURL}/posts/${id}/votes`, auth)
    .then((res) => {
      setStateVoteDel('Delete');
      setTimeout(()=>{
        setStateVoteDel(null);
      }, 3000)
      setIdVoteDel(id);
      GetPostsAtt(true, true, true);
    })
    .catch((err) => {
      console.log(err);
    });

  }

  return [stateVoteDel, functionDelete, idVoteDel];

};