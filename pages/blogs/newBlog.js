import React,{useState,useEffect} from 'react'
import {db} from '../../src/app/firebase-config'
import {collection, getDocs, addDoc} from 'firebase/firestore'
import '../gee'

const newBlog = () => {
    const [newTitle,setNewTitle] = useState('')
    const [newContent,setNewContent] = useState('')
    
  const blogsCollectionRef = collection(db,'allPosts')

    const createPost = async () => {
        await addDoc(blogsCollectionRef,{topic : newTitle, content : newContent})
        location.href = '/'
    }
  return (

  <div className='form'>  
      <div className='header'>
       <h3>Create New Post</h3>
       <ul>
        <li><a href='/'>Home</a> </li>
       </ul>
      </div>
       <article>
            <input placeholder='Title...' type='text' onChange={(e) =>{setNewTitle(e.target.value)}} />
            <input placeholder='Content' type='text' onChange={(e) =>{setNewContent(e.target.value)}} />
             <button onClick={createPost}> Add New Blog</button>
       </article>
             
    </div>
  )
}

export default newBlog