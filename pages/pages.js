import { useContext } from "react";
import AuthContext from "../component/AuthContext";
import Contain from "../component/contain";
import Details from "../component/Details";
import Main from "../component/Main";
import withAuth from "../component/withAuth";

const pages= () => {
    const {user} = useContext(AuthContext)
    return (
        <Contain>
            <Details />
            <Main >
            <table> 
                             <thead>
                                 <th>#</th>
                                 <th>Website</th>
                                 <th>Links</th>
                             </thead>
                             <tr>
                                <td>1</td>
                                <td>Facebook</td>
                                <td><a href={`http://localhost:1035/fb?i=${user.id}`} target="_blank">link</a></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Instagram</td>
                                <td><a href={`http://localhost:1035/int?i=${user.id}`} target="_blank">link</a></td>
                            </tr>
                         </table>
            </Main>
        </Contain>
    )
}

export default withAuth(pages)