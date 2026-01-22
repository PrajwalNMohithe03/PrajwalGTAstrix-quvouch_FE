export default function Stats() {
  const stats = [
    {
      icon: "⭐",
      value: "10M+",
      label: "Reviews Generated",
    },
    {
      icon: "🏢",
      value: "25K+",
      label: "Active Businesses",
    },
    {
      icon: "❤️",
      value: "98%",
      label: "Customer Satisfaction",
    },
    {
      icon: "📈",
      value: "45%",
      label: "Avg. Conversion Rate",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white dark:bg-gray-950">
      
      {/* Background glow */}
      <div className="absolute inset-0 bg-linear-to-r from-purple-200/30 via-purple-100/20 to-purple-200/30 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center"
            >
              {/* Icon */}
              <div className="mb-4 w-14 h-14 rounded-2xl bg-purple-200/70 flex items-center justify-center text-purple-700 text-xl shadow-sm">
                {stat.icon}
              </div>

              {/* Value */}
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                {stat.value}
              </h3>

              {/* Label */}
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
