import axios from 'axios'
import React, { useEffect, useState } from 'react'

function DataFetching() {
    //const [posts, setPosts] = useState([])
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    const handleClick = () =>{
        setIdFromButtonClick(id)
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        .then(res=>{
            console.log(res)
            //setPosts(res.data)
            setPost(res.data)
        })
        .catch( err =>{
            console.log(err)
        })
    },[idFromButtonClick])
    
    
  return (
    <>
    <div>
        <input type='text' value={id} onChange={e=> setId(e.target.value)}/>
        <button type='button' onClick={handleClick} className='btn btn-primary'>Fetch Post</button>
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
