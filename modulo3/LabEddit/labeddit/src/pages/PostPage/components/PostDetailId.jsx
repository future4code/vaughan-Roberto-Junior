import moment from "moment";
import loading2 from '../../../img/loading2.gif'


export default function PostDetailId(props){

const PostDetailId = props.arrPostsId
    .filter((item) => {
      return item.id === props.param.id;
    })
    .map((item) => {
      return (
        <div
          className="card bg-light mb-4"
          style={{ width: "80%" }}
          key={item.id}
        >
          <div className="card-header">
            <div>Postado Por <b>{item.username}</b></div>
            {moment(item.createdAt).startOf('hour').fromNow()}
          </div>
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.body}</p>
          </div>
        </div>
      );
    });

    return(
      <>
        {PostDetailId.length === 0 ? <img src={loading2} width='10%' /> : PostDetailId}
      </>
    )
}