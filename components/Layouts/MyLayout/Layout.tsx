import TopBar from "../../AdPost/TopBar";
import Footer from "../../molecules/Footer/Footer";
import BottomMenu from "../../molecules/BottomMenu/BottomMenu";
import { useMediaQuery } from "../../../hooks/useMediaQuery";

interface LayoutProps { 
    children: React.ReactNode;
    showFooter?: boolean;
    showNavBar?: boolean;
}

const Layout = ({ children, showNavBar, showFooter }: LayoutProps) => { 
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <div className=" relative min-h-screen">
      {showNavBar ? <TopBar /> : null}
      {children}
      {showFooter ? <Footer /> : null}
      {isMobile ? <BottomMenu /> : null}
    </div>
  );
    
}

export default Layout;