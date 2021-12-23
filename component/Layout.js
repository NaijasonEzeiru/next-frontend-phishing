import Contain from "./Contain"
import Footer from "./Footer"
import Header from "./Header"

const Layout = ({children, categories}) => {
    return (
        <>
        <Header />
            { children }
        <Footer />
        </>
    )
}

export default Layout