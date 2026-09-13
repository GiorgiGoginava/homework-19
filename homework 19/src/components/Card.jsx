function Card() {
  return (
    <div className="w-72 overflow-hidden rounded-xl bg-white shadow-md">
      
      <div className="flex h-44 items-center justify-center bg-gray-200">
        <img src="https://img.magnific.com/free-photo/closeup-shot-beautiful-butterfly-with-interesting-textures-orange-petaled-flower_181624-7640.jpg?semt=ais_hybrid&w=740&q=80" alt="React" className="h-full w-full object-cover" />
      </div>

      <div className="p-6">
        <h2 className="text-xl font-bold">
          React
        </h2>

        <p className="mt-2 text-gray-600">
          Learn React step by step.
        </p>

        <button className="mt-5 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
          Learn More
        </button>
      </div>

    </div>
  )
}

export default Card