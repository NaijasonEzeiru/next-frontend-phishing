import Link from "next/link";
import { useContext, useState } from "react";
import styles from "../styles/Header.module.css"
import AuthContext from "./AuthContext";
import Image from "next/image";

const Header = () => {
  const {user, signout} = useContext(AuthContext)
  const [ham, useHam] = useState(false)

  const handleClick = () => {
   useHam(!ham)
  }
  return (
    <div className={styles.navbarItems}>
      <span className={styles.navbarLogo} >

<Link href="/" >
     <a>
         <Image 
            src="/header.png" 
            alt="naijason dot com" 
            width="150px" 
            height="30px"
            />
    </a> 
</Link>
         </span>
    <div className={styles.menuIcon} onClick={handleClick}>
         <Image 
            src={ham ? "/open.svg" : "/collapse.svg"} 
            alt="naijason dot com" 
            width="40px" 
            height="30px"
            />
            </div> 

      <ul onClick={handleClick} className={!ham? `${styles["navMenu"]} ${styles["active"]}` : styles.navMenu}>
      {user?  <li className={styles.navLinks}> <Link href="/victims"><a>Victims</a></Link></li> : ""}
      {user?   <li className={styles.navLinks}> <Link href="/pages"><a>Pages</a></Link></li> : ""}
        <li className={styles.navLinks}> <Link href="#"><a>Short Your Link</a></Link></li>
        <li className={styles.navLinks}> <Link href="#"><a>Contact Us</a></Link></li>
        <li className={styles.navLinks}> 
        {!user? <Link href="/login"><a>log in</a></Link> : <button onClick={signout}>Log Out</button>}
          </li>
      </ul>
 </div>
  );
};

export default Header;
