import Contacts from '../Contacts/Contacts.jsx';
import Footer from '../Footer/Footer.jsx';
import Nav from '../Nav/Nav.jsx';

const Layout = ({ children }) => {
  return (
    <div>
      <Nav />
      <section>{children}</section>
      <Contacts />
      <Footer />
    </div>
  );
};

export default Layout;
