import React,{useEffect,useState} from 'react'
import {useRouter} from 'next/router'
import {db} from '../../src/app/firebase-config'
import {collection, getDocs,getDoc,doc} from 'firebase/firestore'
import '../gee'

// import data from '../components/data'
const blog = ({post}) => {
    const router = useRouter();
    const {blog} = router.query
    // console.log(blog)
    // console.log(content)

    const [readMore,setReadMore] = useState({}) 
    
  useEffect(()=> {
     const getSinglePost = async () => {
      const singlePost = doc(db, 'allPosts',blog)
       const docSnap = await getDoc(singlePost);

           setReadMore(docSnap.data());
     } 
     getSinglePost()
     
  },[])
    
  return (
  <div>
      <div className='header'>
       <h3>Can we discuss {readMore.topic}? </h3>
       <ul>
        <li><a href='/'>Home</a> </li>
       </ul>
      </div>
    
    <article className='full-blog-container'>
         <h3>{readMore.topic} </h3>
         <p className='content'>{readMore.content} </p> 
    </article>    
  </div>   
  )
}

export default blog

export async function getServerSideProps({ params }) {
  // Fetch the specific post data based on the `id` parameter
  const post = (`/blogs/${params.id}`);
  // const post = await res.json();

  return {
    props: {
      post,
    },
  };
}

