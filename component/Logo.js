import header from "../public/header.png";
import Link from "next/link";
import styles from "../styles/Logo.module.css";
import Image from "next/image";

const Logo = (props) => {
  return (
      <div style={{
          display:"flex",
          justifyContent: "center",
          padding: "10px"
      }}>

    <Link href="/" className={styles.logo}>
         <a>
             <Image 
                src="/header.png" 
                alt="naijason dot com" 
                width="250px" 
                height="50px" 
                />
        </a> 
    </Link>
                </div>
  );
};

export default Logo;
