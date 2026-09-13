function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold">
          My Website
        </h1>

        <nav className="flex gap-8">
          <a href="#" className="hover:text-blue-600">
            Home
          </a>

          <a href="#" className="hover:text-blue-600">
            About
          </a>

          <a href="#" className="hover:text-blue-600">
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header