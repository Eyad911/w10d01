// import { useEffect } from "react"
import Link from "next/link"
import styles from './../../styles/posts.module.css'

export async function getStaticProps(context) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const data = await res.json()
  
   
  
    return {
      props: { post : data }, // will be passed to the page component as props
    }
  }
  

const Posts = ({post}) => {
    return ( <div className={styles.divmain}><h1>Posts</h1>
        {post.map((item)=>
        <div className={styles.div1}>
            <Link href={`posts/${item.id}`} key={item.id}><div>
            <h1>{item.title}</h1>
            <p>{item.body}</p></div></Link></div>
           
        )} </div>);
}
 
export default Posts;