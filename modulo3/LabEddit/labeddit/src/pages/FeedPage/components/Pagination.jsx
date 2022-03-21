import { PaginationStyle } from '../styled'

export default function Pagination(props){

       
      let arr = [];

      for(let i = 1; i <= 10; i++){
        arr.push(<li key={i} className="page-item"><a className="page-link" onClick={() => props.GetPostsAtt(10, +i)}>{i}</a></li>)
      }

    return(
    <PaginationStyle>
        <nav aria-label="Navegação de página exemplo">
           <ul className="pagination pagination-sm">
             <li className="page-item"><a className="page-link" href="#"><i className="bi bi-arrow-left"></i></a></li>
            {arr.map((item) => {
              return item;
            })}
             <li className="page-item"><a className="page-link" href="#"><i className="bi bi-arrow-right"></i></a></li>
           </ul>
        </nav>
       </PaginationStyle>
    )
}