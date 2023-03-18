import TopBar from "../../AdPost/TopBar";
import Footer from "../../molecules/Footer/Footer";

interface LayoutProps { 
    children: React.ReactNode;
    showFooter?: boolean;
    showNavBar?: boolean;
}

const Layout = ({ children, showNavBar, showFooter}:LayoutProps) => { 
  return (
    <>
      {showNavBar ? <TopBar /> : null}
      {children}
      {showFooter ? <Footer /> : null}
    </>
  );
    
}

export default Layout;