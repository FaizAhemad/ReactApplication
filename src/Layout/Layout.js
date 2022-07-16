import Footer from '../components/Footer';
import Header from '../components/Header';

function Layout(props) {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  )
};

export default Layout;