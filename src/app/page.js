'use client'
import React,{useState,useEffect} from 'react'
import {db} from './firebase-config'
import {collection, getDocs} from 'firebase/firestore'


import EachArticle from './components/EachArticle'
import Header from './components/Header'
import './globals.css'


export default function Home() {

  const [blogs,setBlogs] = useState([]) 
  const [isLoading,setIsLoading] = useState(true) 
  const blogsCollectionReference = collection(db,'allPosts')

  
  useEffect(()=> {
     const getBlogs = async () => {
        const data = await getDocs(blogsCollectionReference) 
        setBlogs(data.docs.map((doc)=> ({...doc.data(), id: doc.id,key: doc.id})))
        setIsLoading(true)
     }
    getBlogs()

    
  },[])
  
  return ( 
        <div className='container'>
      <Header />
      {isLoading && <EachArticle blogs={blogs} />}
      
    </div>
  )
}
