import { useContext } from "react";
import styles from "../styles/Details.module.css";
import AuthContext from "./AuthContext";

const Details = () => {
  const {user} = useContext(AuthContext);
  return (
    <div>
      <div className={styles.details}>
        <div className={styles.panel}>
          <h1>Your Panel</h1>
        </div>
        {user? <ul>
          <li>
            Username: {user?.username}
            <li>
              Total Victims: {user?.victims.length}
              <li>New Victims: 0</li>
            </li>
          </li>
        </ul> : <p>You are not logged in</p>}
      </div>
    </div>
  );
};

export default Details;
