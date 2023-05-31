'use client'
import React,{useState,useEffect} from 'react'
import {db} from './firebase-config'
import {collection, getDocs} from 'firebase/firestore'


import EachArticle from '../../pages/components/EachArticle'
import Header from '../../pages/components/Header'
import './globals.css'


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
