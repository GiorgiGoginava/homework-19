function Hero() {
  return (
    <section className="bg-gray-100 px-6 py-24">
      <div className="mx-auto max-w-5xl text-center">
        <h1 className="text-5xl font-bold">
          Welcome to My Website
        </h1>

        <p className="mt-6 text-lg text-gray-600">
          This is my first React project.
        </p>

        <button className="mt-8 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700">
          Get Started
        </button>
      </div>
    </section>
  )
}

export default Hero