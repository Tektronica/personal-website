import NavButton from './NavButton'

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="border-b border-b-2 border-black py-2 flex-shrink-0 flex items-center">

          <NavButton label={"Home"} path={"/"} />
          <NavButton label={"About"} path={"/about"} />
          <NavButton label={"Gallery"} path={"/gallery"} />
          <NavButton label={"Blog"} path={"/blog"} />
        </div>
      </nav>
    </>
  )
}

export default Navbar