import NavBar from "../../NavBar/NavBar";
import Footer from "../../molecules/Footer/Footer";

interface LayoutProps { 
    children: React.ReactNode;
    showFooter?: boolean;
    showNavBar?: boolean;
}

const Layout = ({ children, showNavBar, showFooter}:LayoutProps) => { 
  return (
    <>
      {showNavBar ? <NavBar /> : null}
      {children}
      {showFooter ? <Footer /> : null}
    </>
  );
    
}

export default Layout;