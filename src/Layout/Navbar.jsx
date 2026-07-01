import { Menu, X } from "lucide-react";
import { Button } from "../Components/Button";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  // { href: "#testimonials", label: "Testimonials" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const[isScrolled,setIsScrolled]=useState(false)


  useEffect(() =>{
    const handleScroll = ()=>{
      if(window.scrollY > 50){
        setIsScrolled(true);
      }else{
        setIsScrolled(false);
      }
    }

    window.addEventListener("scroll",handleScroll);

    return ()=> window.removeEventListener("scroll",handleScroll);
  },[])

  return (
    <header className={`fixed top-0 left-0 right-0 ${isScrolled ? "glass-strong py-3" : "bg-transparent py-5"} py-5 z-50 transition-colors duration-300 ${isMobileMenuOpen ? "bg-background/95 backdrop-blur-md" : "bg-transparent"}`}>
      <nav className="container mx-auto px-6 flex items-center justify-between relative">
        {/* Logo - Left */}
        <a
          href="#"
          className="text-xl font-bold tracking-tight hover:text-primary"
        >
          AB<span className="text-primary">.</span>
        </a>

        {/* Desktop Nav  */}
        <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* CTA Button - Right */}
        <div className="hidden md:block">
          <a href="#contact">
            <Button size="sm">Contact Me</Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* mobile menu */}
      {isMobileMenuOpen && (
        <>
          <div className="md:hidden glass-strong "></div>
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4 animate-fade-in">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                onClick={()=>setMobileMenuOpen(false)}
                className=" text-lg text-muted-foreground hover:text-foreground py-1  "
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
              <Button size="sm" className="w-full">Contact Me</Button>
            </a>
          </div>
        </>
      )}
    </header>
  );
};
