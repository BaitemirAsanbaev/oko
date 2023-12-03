import Header from "../Header/Header.jsx";
import Nav from "../Nav/Nav.jsx";

const Layout = ({children}) => {
      return ( <div>
            <Nav/>
            <section>
                  {children}
            </section>
      </div> );
}
 
export default Layout;