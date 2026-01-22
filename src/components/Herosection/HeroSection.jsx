export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-gray-950">
      
      {/* Background glow */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-purple-300/40 rounded-full blur-[120px]" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-purple-400/30 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-sm bg-purple-100 text-purple-700 mb-6">
            ✨ Your Opinion Matters
          </span>

{/* Heading */}
<h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
  Transform <br />
  <span className="text-purple-600">QR Codes</span> <br />
  Into Reviews
</h1>


          {/* Description */}
          <p className="mt-6 text-gray-600 max-w-xl">
            The trust-first platform that makes collecting Google Reviews effortless.
            Let your customers vouch for your business with a simple scan.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="px-6 py-3 rounded-lg text-white font-medium bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg hover:opacity-90 transition">
              Start Free Trial →
            </button>

            <button className="px-6 py-3 rounded-lg border border-purple-300 text-purple-600 font-medium hover:bg-purple-50 transition">
              ▶ Watch Demo
            </button>
          </div>

          {/* Social proof */}
          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-purple-200 border-2 border-white"
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">
              <strong>25,000+</strong> Happy Businesses
            </span>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] rounded-3xl bg-gradient-to-br from-purple-200 to-purple-100 shadow-xl flex items-center justify-center">

            {/* QR */}
            <div className="w-40 h-40 rounded-2xl bg-purple-500 flex items-center justify-center">
              <div className="w-24 h-24 grid grid-cols-3 gap-2">
                {[...Array(9)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-sm"
                  />
                ))}
              </div>
            </div>

            {/* Floating card - Rating */}
            <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-md px-3 py-2 text-sm">
              ⭐ Rating
            </div>

            {/* Floating card - Scans */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-md px-3 py-2 text-sm">
              📈 Scans
            </div>

            {/* Footer text */}
            <div className="absolute bottom-6 text-center text-sm text-purple-700 font-medium">
              One scan away from <br />
              <span className="font-bold">Your Next 5-Star Review</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
