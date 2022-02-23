



export default function FormPost(props) {
  return (
    <form onSubmit={props.submitPost}>
      <input
        type="text"
        name="title"
        onChange={props.onChange}
        value={props.form.title}
        className="form-control"
        placeholder="Titulo"
        required
      />
      <div className="input-group">
        <span className="input-group-text">Escreva Seu Post</span>
        <textarea
          className="form-control"
          aria-label="With textarea"
          name="body"
          onChange={props.onChange}
          value={props.form.body}
          required
        ></textarea>
        <button className="btn btn-info">Postar</button>
      </div>
    </form>
  );
}
