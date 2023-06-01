import React,{useState,useEffect} from 'react'
import {db} from '../src/app/firebase-config'
import {collection, getDocs} from 'firebase/firestore'


import EachArticle from '../src/app/components/EachArticle'
import Header from '../src/app/components/Header'
import '../src/app/globals.css'


export default function Home() {

  const [blogs,setBlogs] = useState([]) 
  const blogsCollectionReference = collection(db,'allPosts')

  
  useEffect(()=> {
     const getBlogs = async () => {
        const data = await getDocs(blogsCollectionReference) 
        setBlogs(data.docs.map((doc)=> ({...doc.data(), id: doc.id,key: doc.id})))
     }
    //  setBlogs(getblogs)
    getBlogs()

    
  },[])
  console.log(blogs)
  return (
    <div className='container'>
      <Header />
      <EachArticle blogs={blogs} />
      
    </div>
  )
}
