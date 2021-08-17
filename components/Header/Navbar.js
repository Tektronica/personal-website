import NavButton from './NavButton'
import { useRouter } from 'next/router'

const Navbar = () => {
  const router = useRouter()
  const handleClick = (e,) => {
    var btn = document.getElementById('menuBtn');
    var nav = document.getElementById('menu');

    btn.classList.toggle('open');
    nav.classList.toggle('flex');
    nav.classList.toggle('hidden');
  }

  return (
    <>
      <nav id="site-menu" className="flex flex-col sm:flex-row w-full justify-between px-4 sm:px-6 py-1 bg-white">
        
        <div className="w-full sm:w-auto self-start sm:self-center flex flex-row sm:flex-none flex-no-wrap justify-between items-center">
          <a href="/"
            className="no-underline py-1">
            <h1 className="font-bold text-lg tracking-widest">
              <img
                src="/tektronica.svg"
                alt="Tektronica Logo"
                className="h-16" />
            </h1>
          </a>

          <button id="menuBtn" className="hamburger block sm:hidden focus:outline-none" type="button" onClick={(e) => handleClick(e,)}>
            <span className="hamburger__top-bun"></span><span className="hamburger__bottom-bun"></span>
          </button>
          
        </div>

        <div id="menu" className="w-full sm:w-auto self-end sm:self-center gap-x-6 sm:flex flex-col sm:flex-row hidden">
          <a className="text-dark font-bold hover:bg-pink-200 text-lg w-full no-underline sm:w-auto"
            href="/"
            target="_blank">
            Home
          </a>
          <a className="text-dark font-bold hover:bg-pink-200 text-lg w-full no-underline sm:w-auto"
            href="/about">
            About
          </a>
          <a className="text-dark font-bold hover:bg-pink-200  text-lg w-full no-underline sm:w-auto"
            href="/gallery"
            target="_blank">
            Gallery
          </a>
          <a className="text-dark font-bold hover:bg-pink-200 text-lg w-full no-underline sm:w-auto"
            href="/blog">
            Blog
          </a>
        </div>

      </nav>
    </>
  )
}

export default Navbar