// import { useEffect } from "react"
import Link from "next/link"
export async function getStaticProps(context) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const data = await res.json()
  
   
  
    return {
      props: { post : data }, // will be passed to the page component as props
    }
  }
  

const Posts = ({post}) => {
    return ( <div><h1>Posts</h1>
        {post.map((item)=>
            <Link href={`posts/${item.id}`} key={item.id}><div>
            <h1>{item.title}</h1>
            <p>{item.body}</p></div></Link>
           
        )} </div>);
}
 
export default Posts;