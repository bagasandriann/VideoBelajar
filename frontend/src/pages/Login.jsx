import Header from '../components/Header'
import eyeIcon from '../assets/mdi_eye-off.svg'
import googleIcon from '../assets/logos_google-icon.svg'

function Login() {
  return (
    <main className="min-h-screen bg-[#FFFDF3]">
      <Header />

      <section id="login-section" className="flex min-h-[calc(100vh-80px)] items-center justify-center px-6 py-10">
        <div id="login-card" className="w-full max-w-[520px] rounded bg-white border border-gray-200 px-8 py-7">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-[#222325]">
              Masuk ke Akun
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Yuk, lanjutin belajarmu di videobelajar.
            </p>
          </div>
          <div className="mt-6">
            <label htmlFor="femail" className="text-sm text-gray-700">
              E-Mail <span className="text-red-500">*</span>
            </label>

            <input
              type="email"
              id="femail"
              name="email"
              className="mt-2 w-full rounded border border-gray-200 px-3 py-2 text-sm outline-none"
            />
          </div>
          <div className="mt-6">
            <label htmlFor="fpassword" className="text-sm text-gray-700">
              Kata Sandi <span className="text-red-500">*</span>
            </label>

            <div className="relative mt-2">
              <input
                type="password"
                id="fpassword"
                name="fpassword"
                className="w-full rounded border border-gray-200 px-3 py-2 pr-10 text-sm outline-none"
              />

              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              >
                <img src={eyeIcon} alt="Toggle Password Visibility" className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="my-3 flex justify-end">
            <a href="http://localhost:5173/register" className="text-sm font-medium text-gray-700 hover:text-green-600">Lupa Password?</a>
          </div>
          <div className="mt-6">
            <button id="login-button" className="w-full rounded-lg bg-green-600 px-3 py-2 text-sm font-medium text-white hover:bg-green-700">
              Masuk
            </button>
          </div>
          <div className="mt-2">
            <button id="register-button" className="w-full rounded-lg bg-green-200 px-3 py-2 text-sm font-medium text-green-700 hover:bg-green-300">
              Daftar
            </button>
          </div>
          <div className="my-5 flex items-center gap-3">
            <div className="h-px flex-1 bg-gray-200"></div>
            <span className="text-sm text-gray-500">atau</span>
            <div className="h-px flex-1 bg-gray-200"></div>
          </div>
          <div className="mt-2">
            <button
              id="google-login-button"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-white border border-gray-300 px-3 py-2 text-sm font-medium hover:bg-gray-50"
            >
              <img src={googleIcon} alt="Google Icon" className="h-5 w-5" />
              <span>Masuk dengan Google</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Login
