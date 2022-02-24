import moment from "moment";
import { DivFooterPost, FeedDetail } from "../styled";

export default function PostDetailComment(props){


    const PostsFeedDetails = props.arrPosts.map((item) => {
        return (
          <FeedDetail
            className="card bg-light mb-1"
            style={{ width: "80%" }}
            key={item.id}
          >
            <div className="card-header">
              <div>Postado Por <b>{item.username}</b></div>
              {moment(item.createdAt).startOf('hour').fromNow()}
            </div>
            <div className="card-body">
              <p className="card-text">{item.body}</p>
              <hr />
              <DivFooterPost>
                <p className="card-text">
                  {item.voteSum === null ? 0 : item.voteSum} Curtidas
                </p>
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
              </DivFooterPost>
            </div>
          </FeedDetail>
        );
      });


    return(
        PostsFeedDetails
    )
}

