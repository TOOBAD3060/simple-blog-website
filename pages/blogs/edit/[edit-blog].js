import React,{useEffect,useState} from 'react'
import {useRouter} from 'next/router'
import {db} from '../../../src/app/firebase-config'
import {updateDoc,doc,getDoc} from 'firebase/firestore'


const blog = ({post}) => {
    const router = useRouter();
    const {blog} = router.query
    // console.log(blog)
    // console.log(content)

    const [myreadMore,setmyReadMore] = useState({}) 
    
  
     useEffect(() => {
        const getSinglePost = async () => {
          const singlePost = doc(db, 'allPosts',blog)
           const docSnap = await getDoc(singlePost);
    
               setmyReadMore(docSnap.data());
         }
       getSinglePost()
       
     },[])
     console.log(readMore);
  return (
    <article className='blog-container'>
        <h1>Yes </h1>
         {/* <input value={readMore.topic} /> */}
         {/* <textarea value={readMore.content}/> */}
         <button>Submit</button>  
    </article>       
  )
}

export default blog

export async function getServerSideProps({ params }) {
  // Fetch the specific post data based on the `id` parameter
  const post = (`/blogs/edit/${params.id}`);
  // const post = await res.json();
    
  return {
    props: {
      post,
    },
  };
}

