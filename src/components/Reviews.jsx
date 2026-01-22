export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Owner, Downtown Bistro",
      initials: "SM",
      quote:
        "Quvouch transformed how we collect reviews. We've seen a 300% increase in Google reviews since implementation. Our customers love how easy it is!",
    },
    {
      name: "Dr. James Carter",
      role: "Dental Clinic Director",
      initials: "JC",
      quote:
        "The QR code approach is genius. Patients scan right at checkout and our review rate jumped from 5% to 45%. Best investment for our practice.",
    },
    {
      name: "Maria Rodriguez",
      role: "Salon Owner",
      initials: "MR",
      quote:
        "Simple, elegant, and effective. The analytics help us understand our customers better. Quvouch pays for itself in new business every month.",
    },
  ];

  return (
    <section
      id="reviews"
      className="relative overflow-hidden bg-white dark:bg-gray-950"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-200/30 via-purple-100/10 to-transparent blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-24">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-purple-600">
            💬 Customer Stories 💬
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            What Our Customers Say
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Real businesses, real results. See how Quvouch has transformed
            review collection.
          </p>
        </div>

        {/* Testimonials */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-purple-200/60 bg-white/70 dark:bg-gray-900/70 backdrop-blur p-8 shadow-sm"
            >
              {/* Stars */}
              <div className="flex gap-1 text-purple-600 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                “{item.quote}”
              </p>

              {/* User */}
              <div className="mt-6 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-purple-200 text-purple-700 flex items-center justify-center font-semibold text-sm">
                  {item.initials}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
