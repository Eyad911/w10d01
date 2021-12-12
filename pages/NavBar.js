import styles from './../styles/NavBar.module.css'
import Image from 'next/image'
import Link from 'next/link';


const NavBar = () => {
  return (<>
    <div className={styles.div1}>
      <ul className={styles.ul}>
       
      <Link href="/"><li><Image
      src="/pic22.png"
      alt="Picture of the author"
      width={140}
      height={100}
    /></li></Link>
        <Link href="/about"><li>AboutUs</li></Link>
        <Link href="/contact"><li>ContactUs</li></Link>
        <Link href="/posts"><li>Posts</li></Link>
      </ul>
    </div>
  </>);
};

export default NavBar;
