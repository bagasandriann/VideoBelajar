import Header from '../components/Header'
import CourseCard from '../components/CourseCard'
import Footer from '../components/Footer'
import bannerBackground from '../assets/banner_background.jpg'
import newsletterBackground from '../assets/call_to_action_img.jpg'
import courseImage1 from '../assets/BoxImg1.jpg'
import courseImage2 from '../assets/BoxImg2.jpg'
import courseImage3 from '../assets/BoxImg3.jpg'
import courseImage4 from '../assets/BoxImg4.jpg'
import courseImage5 from '../assets/BoxImg5.jpg'
import courseImage6 from '../assets/BoxImg6.jpg'
import courseImage7 from '../assets/BoxImg7.jpg'
import courseImage8 from '../assets/BoxImg8.jpg'
import courseImage9 from '../assets/BoxImg9.jpg'

const categories = ['Semua Kelas', 'Pemasaran', 'Desain', 'Pengembangan Diri', 'Bisnis']

const courses = [
  courseImage1,
  courseImage2,
  courseImage3,
  courseImage4,
  courseImage5,
  courseImage6,
  courseImage7,
  courseImage8,
  courseImage9,
].map((image) => ({
  image,
  title: 'Big 4 Auditor Financial Analyst',
  description: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik.',
  instructor: 'Jenna Ortega',
  role: 'Senior Accountant di Gojek',
  price: 'Rp 300K',
}))

function Home() {
  return (
    <main className="min-h-screen bg-[#FFFDF3]">
      <Header variant="landing" />

      <section className="px-6 py-7 md:px-28 md:py-16">
        <div
          className="relative flex min-h-[400px] items-center justify-center overflow-hidden rounded-lg bg-cover bg-center px-5 py-10 text-center md:min-h-[400px] md:px-24"
          style={{ backgroundImage: `url(${bannerBackground})` }}
        >
          <div className="absolute inset-0 bg-black/75"></div>

          <div className="relative z-10 max-w-[920px]">
            <h1 className="text-2xl font-bold leading-tight text-white md:text-5xl">
              Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!
            </h1>

            <p className="mx-auto mt-6 max-w-[840px] text-sm font-medium leading-relaxed text-white md:text-base">
              Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi.
              Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan
              pemahaman Anda.
            </p>

            <button className="mt-7 rounded-lg bg-[#3ECF4C] px-6 py-3 text-sm font-bold text-white hover:bg-[#35b943]">
              Temukan Video Course untuk Dipelajari!
            </button>
          </div>
        </div>
      </section>

      <section id="courses" className="px-6 pb-10 md:px-28 md:pb-16">
        <div>
          <h2 className="max-w-[640px] text-2xl font-bold leading-tight text-[#222325] md:text-4xl">
            Koleksi Video Pembelajaran Unggulan
          </h2>
          <p className="mt-2 text-sm font-medium text-gray-500 md:text-base">
            Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
          </p>
        </div>

        <div className="mt-8 overflow-x-auto">
          <nav className="flex min-w-max gap-8" aria-label="Kategori kelas">
            {categories.map((category, index) => (
              <a
                key={category}
                href="#courses"
                className={`border-b-4 pb-3 text-sm font-semibold ${index === 0
                  ? 'border-[#F64920] text-[#F64920]'
                  : 'border-transparent text-gray-500 hover:text-[#F64920]'
                  }`}
              >
                {category}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {courses.map((course, index) => (
            <CourseCard key={`${course.title}-${index}`} {...course} />
          ))}
        </div>
      </section>

      <section className="px-6 pb-10 md:px-28 md:pb-16">
        <div
          className="relative overflow-hidden rounded-lg bg-cover bg-center px-6 py-16 text-center md:px-20 md:py-24"
          style={{ backgroundImage: `url(${newsletterBackground})`, backgroundPosition: 'center 82%' }}
        >
          <div className="absolute inset-0 bg-black/70"></div>

          <div className="relative z-10 mx-auto max-w-[620px]">
            <p className="text-sm font-medium uppercase tracking-wide text-gray-300">Newsletter</p>
            <h2 className="mt-1 text-2xl font-bold leading-tight text-white md:text-4xl">
              Mau Belajar Lebih Banyak?
            </h2>
            <p className="mx-auto mt-2 max-w-[520px] text-sm leading-relaxed text-white md:text-base">
              Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran spesial dari program-program terbaik
              hariesok.id
            </p>

            <form className="mx-auto mt-8 flex max-w-[520px] flex-col gap-3 rounded-lg md:flex-row md:bg-white md:p-2">
              <input
                type="email"
                placeholder="Masukkan Emailmu"
                className="min-h-12 flex-1 rounded-lg bg-white px-5 text-center text-sm font-medium text-gray-600 outline-none md:text-left"
              />
              <button
                type="button"
                className="min-h-12 rounded-lg bg-[#FFBD3A] px-7 text-sm font-bold text-white hover:bg-[#f0ad25]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default Home
