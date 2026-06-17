import logo from '../assets/logo_videobelajar.png'
import avatar from '../assets/avatar.png'

function Header({ variant = 'simple' }) {
  const isLanding = variant === 'landing'

  return (
    <header className="w-full h-20 bg-white border-b border-gray-200 flex items-center justify-between px-6 md:px-28">
      <img src={logo} alt="VideoBelajar" className="h-7 md:h-8" />

      {isLanding && (
        <>
          <div className="hidden items-center gap-9 md:flex">
            <a href="#courses" className="text-sm font-medium text-gray-600 hover:text-[#f64920]">
              Kategori
            </a>
            <img src={avatar} alt="Profil" className="h-10 w-10 rounded-xl object-cover" />
          </div>

          <button type="button" aria-label="Buka menu" className="flex h-10 w-10 items-center justify-center md:hidden">
            <span className="flex flex-col gap-1.5">
              <span className="block h-0.5 w-5 rounded bg-gray-600"></span>
              <span className="block h-0.5 w-5 rounded bg-gray-600"></span>
              <span className="block h-0.5 w-5 rounded bg-gray-600"></span>
            </span>
          </button>
        </>
      )}
    </header>
  )
}

export default Header
