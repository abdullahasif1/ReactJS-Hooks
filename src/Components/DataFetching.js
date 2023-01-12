import axios from 'axios'
import React, { useEffect, useState } from 'react'

function DataFetching() {
    //const [posts, setPosts] = useState([])
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>{
            console.log(res)
            //setPosts(res.data)
            setPost(res.data)
        })
        .catch( err =>{
            console.log(err)
        })
    },[id])
    
    
  return (
    <>
    <div>
        <input type='text' value={id} onChange={e=> setId(e.target.value)}/>
        
      {/* <ul>
        {
            posts.map(post => <li key={post.id}>{post.title}</li>)
        }
      </ul> */}
    </div>
    <div>{post.title}</div>
    </>
  )
}

export default DataFetching
