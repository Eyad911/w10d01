import styles from './../styles/NavBar.module.css'
import Image from 'next/image'
import Link from 'next/link';


const NavBar = () => {
  return (<>
    <div className={styles.div1}>
      <ul className={styles.ul}>
       
      <Link href="/"><li className={styles.li}><Image
      src="/pic22.png"
      alt="Picture of the author"
      width={140}
      height={100}
    /></li></Link>
        <Link href="/about"><li className={styles.liList}>AboutUs</li></Link>
        <Link href="/contact"><li className={styles.liList}>ContactUs</li></Link>
        <Link href="/posts"><li className={styles.liList}>Posts</li></Link>
      </ul>
    </div>
  </>);
};

export default NavBar;
