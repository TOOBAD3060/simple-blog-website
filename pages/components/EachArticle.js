'use client'
import React, { useEffect, useState } from 'react'
import {db} from '../../src/app/firebase-config'
import {collection, getDocs,doc,deleteDoc} from 'firebase/firestore'


const EachArticle = ({blogs}) => {

  // const [blogs,setBlogs] = useState([]) 
  // const blogsCollectionReference = collection(db,'allPosts')
  // useEffect(()=> {
  //    const getBlogs = async () => {
  //       const data = await getDocs(blogsCollectionReference) 
  //       setBlogs(data.docs.map((doc)=> ({...doc.data(), id: doc.id})))
  //    }
  //   //  setBlogs(getblogs)
  //   getBlogs()

    
  // },[])
  // console.log(blogs)
  const deleteBlog = async (id) => {
    const userDoc = doc(db, 'allPosts',id)
    
    await deleteDoc(userDoc)

    

    location.href = '/'
  }
  // const editBlog = () => {
  //      location.href = `/blogs/edit/${id}`
  // }
return (
  //  <h1>Yes</h1>
    blogs.map((blog)=>{
        const {id,topic,content} = blog
        const url = `/blogs/${id}`
     return <article className='blog-container' key={id}>
                  <h4>{topic} </h4>
                  <p className='content'>{content.substring(0,20)}...
                      <a href={url}>Read more</a>
                  </p>
                   
                  <div className= 'btn'>
                  {/* <button onClick={()=> location.href = `/blogs/edit/${id}` } className='edit'>Edit</button>  */}
                  <button onClick={()=> deleteBlog(id)}>Delete</button> 
                  </div>
            </article>          
    } )
   
     
   )
}

export default EachArticle