import { CardFeedPost, DivComentButton } from "../styled";
import GifLoading from "../../../img/loading.gif";
import moment from "moment";

export default function PostsFeed(props) {

  const arrPosts = props.arrPosts;

  const Posts = arrPosts.map((item) => { 
      return (
    <CardFeedPost
      className="card bg-light mb-1"
      key={item.id}
    >
      <div className="card-header" onClick={() => props.PostDetails(item.id)}>
        <div>Postado Por <b>{item.username}</b></div>
        {moment(item.createdAt).startOf('hour').fromNow()}
      </div>
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.body}</p>
      </div>
      <hr />
      <DivComentButton>
        <div>
          {item.userVote === 1 ? (
            <i
              className="bi bi-caret-up-fill"
              style={{ fontSize: "2rem" }}
              onClick={() => props.VoteValidate(item.id, 1)}
            />
          ) : (
            <i
              className="bi bi-caret-up "
              style={{ fontSize: "2rem" }}
              onClick={() => props.VoteValidate(item.id, 1)}
            />
          )}

          {item.voteSum === null ? 0 : item.voteSum}

          {item.userVote === -1 ? (
            <i
              className="bi bi-caret-down-fill"
              style={{ fontSize: "2rem" }}
              onClick={() => props.VoteValidate(item.id, -1)}
            />
          ) : (
            <i
              className="bi bi-caret-down "
              style={{ fontSize: "2rem" }}
              onClick={() => props.VoteValidate(item.id, -1)}
            />
          )}
        </div>
        {item.commentCount
          ? `${item.commentCount} Comentários`
          : "Nenhum Comentário"}       
      </DivComentButton>
    </CardFeedPost>
      )
  });

  return (
  <>
    {Posts.length === 0 ? <img src={GifLoading} /> : Posts}
  </>
  )
}
