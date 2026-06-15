import logo from '../assets/logo_videobelajar.png'

function Header() {
  return (
    <header className="w-full h-20 bg-white border-b border-gray-200 flex items-center px-6 md:px-28">
      <img src={logo} alt="VideoBelajar" className="h-7 md:h-8"/>
    </header>
  )
}

export default Header