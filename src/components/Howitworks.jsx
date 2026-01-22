export default function HowItWorks() {
  const steps = [
    {
      icon: "🔲",
      title: "Create Your QR Code",
      desc: "Generate a custom QR code linked to your Google Business Profile in seconds.",
    },
    {
      icon: "🌍",
      title: "Place Strategically",
      desc: "Print and display your QR code at checkout, on receipts, table tents, or anywhere customers interact.",
    },
    {
      icon: "📱",
      title: "Customer Scans",
      desc: "Customers scan with their phone camera — no app needed. Instant access to leave a review.",
    },
    {
      icon: "📈",
      title: "Watch It Grow",
      desc: "Track scans and reviews in real time. See your reputation grow and business thrive.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-white dark:bg-gray-950"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-linear-to-b from-purple-200/30 via-purple-100/10 to-transparent blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-24">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-purple-600">
            💡 Simple Process 💡
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            How Quvouch Works
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Get started in minutes. No technical knowledge required.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 relative">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative rounded-2xl border border-purple-200/60 bg-white/70 dark:bg-gray-900/70 backdrop-blur p-8 shadow-sm text-center"
            >
              {/* Icon */}
              <div className="mx-auto mb-6 w-14 h-14 rounded-2xl bg-purple-200/70 flex items-center justify-center text-purple-700 text-xl">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {step.desc}
              </p>

              {/* Arrow (desktop only) */}
              {index !== steps.length - 1 && (
                <span className="hidden lg:block absolute top-1/2 -right-6 text-purple-300 text-2xl">
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
