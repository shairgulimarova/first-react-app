import React from 'react'

const Pagination = ({postsPerPage, totalPosts, paginate}) => {
    const pages = [];
    
    for (let i=1; i <= Math.ceil( totalPosts / postsPerPage); i++) {
           pages.push(i);
    }


  return (
    <ul style={{listStyle:"none", display:"flex", flexWrap:"wrap", gap:"15px"}}>
        {
            pages.map(page=>(
                <li style={{border:"3px solid white", padding:"5px 15px", borderRadius:"5px"}} 
                onClick={()=> paginate(page)} 
                 >
                    {page}
                </li>
            ))
        }
    </ul>
  )
}

export default Pagination