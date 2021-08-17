import NavButton from './NavButton'

const Navbar = () => {
  return (
    <>

      <nav>
        <div className="border-b border-b-2 border-black py-2 flex-shrink-0 flex items-center">
        <img src="/tektronica.svg" alt="Tektronica Logo" className="h-16 ml-2" />
          <NavButton label={"Home"} path={"/"} />
          <NavButton label={"About"} path={"/about"} />
          <NavButton label={"Gallery"} path={"/gallery"} />
          <NavButton label={"Blog"} path={"/blog"} />
        </div>

        {/* mobile hamburger menu */}
        <div class="flex md:hidden">
          <button id="hamburger">
            <img class="toggle block" src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png" width="40" height="40" />
            <img class="toggle hidden" src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png" width="40" height="40" />
          </button>
        </div>
      </nav>
    </>
  )
}

export default Navbar