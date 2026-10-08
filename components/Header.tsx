import Image from "next/image";
import NavItems from "./NavItems";


const Header: () => React.ReactNode = () => { 
    return (
        <header className="sticky top-0 header">
            <div className="container header-wrapper">
                <link href="/">
                    <Image 
                        src="/assets/icon/logo.svg"
                        alt="Logo"
                        width={140}
                        height={40}
                    />
                </link>
                <nav className="hidden sm:block">
                    <NavItems>
                        
                    </NavItems>
                </nav>
                
            </div>
        </header>
    )
}
    
export default Header;