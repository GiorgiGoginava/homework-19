function Footer() {
  return (
    <footer className="bg-gray-900 px-6 py-8 text-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <p>© 2026 My Website</p>

        <div className="flex gap-6">
          <a href="#" className="hover:text-gray-300">
            GitHub
          </a>

          <a href="#" className="hover:text-gray-300">
            Instagram
          </a>

          <a href="#" className="hover:text-gray-300">
            Facebook
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer