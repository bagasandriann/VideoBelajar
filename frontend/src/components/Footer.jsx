import logo from '../assets/logo_videobelajar.png'

const footerGroups = [
  {
    title: 'Kategori',
    links: ['Digital & Teknologi', 'Pemasaran', 'Manajemen Bisnis', 'Pengembangan Diri', 'Desain'],
  },
  {
    title: 'Perusahaan',
    links: ['Tentang Kami', 'FAQ', 'Kebijakan Privasi', 'Ketentuan Layanan', 'Bantuan'],
  },
  {
    title: 'Komunitas',
    links: ['Tips Sukses', 'Blog'],
  },
]

const socialLinks = ['in', 'f', 'ig', 'x']

function Footer() {
  return (
    <footer id="footer" className="border-t border-gray-200 bg-white px-6 py-8 md:px-28 md:py-14">
      <div className="grid gap-8 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <img src={logo} alt="VideoBelajar" className="h-7 md:h-8" />

          <p className="mt-4 max-w-[360px] text-base font-bold leading-snug text-[#222325]">
            Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!
          </p>

          <address className="mt-3 not-italic text-sm leading-relaxed text-gray-600">
            Jl. Usman Effendi No. 50 Lowokwaru, Malang
            <br />
            +62-877-7123-1234
          </address>
        </div>

        {footerGroups.map((group) => (
          <div key={group.title}>
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-[#222325]">{group.title}</h3>
              <span className="text-xl text-gray-500 md:hidden">&gt;</span>
            </div>

            <ul className="mt-3 hidden space-y-3 md:block">
              {group.links.map((link) => (
                <li key={link}>
                  <a href="#footer" className="text-sm font-medium text-gray-500 hover:text-[#F64920]">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-8 border-t border-gray-200 pt-6 md:mt-12 md:flex md:flex-row-reverse md:items-center md:justify-between">
        <div className="flex gap-3">
          {socialLinks.map((item) => (
            <a
              key={item}
              href="#footer"
              aria-label={item}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-xs font-bold text-gray-600 hover:border-[#F64920] hover:text-[#F64920]"
            >
              {item}
            </a>
          ))}
        </div>

        <p className="mt-4 text-sm font-medium text-gray-500 md:mt-0">
          @2023 Gerobak Sayur All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
