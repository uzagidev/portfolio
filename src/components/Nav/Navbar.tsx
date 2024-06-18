const Navbar = () => {
  return (
    <div className="container-md">
        <nav className="h-16 px-6 flex flex-row justify-between items-center">
        <div className="text-white font-bold">
            Navbar
        </div>
        <div className="hidden md:flex flex-row justify-around items-center gap-6">
            <a href="#about" className="text-white hover:text-black hover:bg-white px-4 py-2">About</a>
            <a href="#exp" className="text-white hover:text-black hover:bg-white px-4 py-2">Experience</a>
            <a href="#projects" className="text-white hover:text-black hover:bg-white px-4 py-2">Projects</a>
            <a href="#contact" className="text-white hover:text-black hover:bg-white px-4 py-2">Contact</a>
        </div>
        </nav>
    </div>
  );
};

export default Navbar;
