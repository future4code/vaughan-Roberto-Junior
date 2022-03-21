


export default function FormComment(props){
    return(
        <form onSubmit={props.postComment}>
          <div className="input-group">
            <span className="input-group-text">Escreva Seu Comentário</span>
            <textarea
              className="form-control"
              aria-label="With textarea"
              name="body"
              onChange={props.onChange}
              value={props.form.body}
            ></textarea>
          </div>
          <button className="btn btn-info">Postar</button>
        </form>
    )
}