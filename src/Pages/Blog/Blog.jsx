import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Posts from '../../Components/Posts/Posts'
import Pagination from '../../Components/Pagination/Pagination'

function Blog() {
  const [posts, setPoststs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(3); 

  useEffect(()=>{
    const getPosts = async()=>{
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");

      setPoststs(response.data)
    };  
    getPosts(); 
  }, []); 

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts= posts.slice(indexOfFirstPost,indexOfLastPost); 
  

  const paginate = (pageNumber) =>{
    setCurrentPage(pageNumber);
  };

  return (
    <section className="blog">
        <h1 style={{textAlign:"center"}}>My Blog</h1>
        <div className="container">
         <Posts posts={currentPosts}/>
         <Pagination postsPerPage = {postsPerPage} totalPosts={posts.length} paginate ={paginate}/>
        </div>
        
    </section>
  )
}

export default Blog