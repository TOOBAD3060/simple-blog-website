'use client'
import React, { useEffect, useState } from 'react'
import {db} from '../firebase-config'
import {collection, getDocs,doc,deleteDoc} from 'firebase/firestore'


const EachArticle = ({blogs}) => {

    const deleteBlog = async (id) => {
    const userDoc = doc(db, 'allPosts',id)
    
    await deleteDoc(userDoc)

    

    location.href = '/'
  }
 
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
                  <button onClick={()=> deleteBlog(id)}>Delete</button> 
                  </div>
            </article>          
    } )
   
     
   )
}

export default EachArticle