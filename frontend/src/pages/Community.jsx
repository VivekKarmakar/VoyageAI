function Community() {
  const posts = [
    {
      id: 1,
      avatar: "👨🏻‍💻",
      name: "Alex Traveler",
      location: "Paris, France",
      time: "2 hours ago",
      image: "🗼",
      text: "Exploring the beautiful streets of Paris. Every corner feels like a new adventure!",
      likes: 124,
      comments: 18,
    },
    {
      id: 2,
      avatar: "👩🏻‍🎨",
      name: "Maya Explorer",
      location: "Bali, Indonesia",
      time: "5 hours ago",
      image: "🏝️",
      text: "A peaceful morning in Bali. Definitely one of my favorite travel experiences.",
      likes: 218,
      comments: 31,
    },
    {
      id: 3,
      avatar: "🧑🏻‍✈️",
      name: "Ryan Journeys",
      location: "Tokyo, Japan",
      time: "1 day ago",
      image: "🗾",
      text: "Tokyo at night is absolutely incredible. So much energy, culture and amazing food!",
      likes: 176,
      comments: 24,
    },
  ]

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">

      {/* Animated Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute -left-40 top-20 h-96 w-96 animate-pulse rounded-full bg-blue-600/10 blur-3xl" />

        <div className="absolute right-[-120px] top-40 h-[500px] w-[500px] animate-pulse rounded-full bg-cyan-500/10 blur-3xl [animation-delay:1s]" />

        <div className="absolute bottom-[-150px] left-1/3 h-[450px] w-[450px] animate-pulse rounded-full bg-indigo-600/10 blur-3xl [animation-delay:2s]" />

        {/* Floating Travel Icons */}
        <div className="absolute left-[8%] top-[20%] animate-[travelFloat_5s_ease-in-out_infinite] text-3xl opacity-20">
          ✈️
        </div>

        <div className="absolute right-[12%] top-[25%] animate-[travelFloat_6s_ease-in-out_infinite] text-3xl opacity-20 [animation-delay:1s]">
          🌍
        </div>

        <div className="absolute left-[12%] bottom-[20%] animate-[travelFloat_7s_ease-in-out_infinite] text-3xl opacity-20 [animation-delay:2s]">
          🧳
        </div>

        <div className="absolute right-[20%] bottom-[15%] animate-[travelFloat_5s_ease-in-out_infinite] text-3xl opacity-20 [animation-delay:3s]">
          🧭
        </div>

      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-16">

        {/* Header */}
        <section className="animate-[fadeInUp_0.8s_ease-out]">

          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300 backdrop-blur-sm">
            <span className="animate-pulse">✦</span>
            VoyageAI Community
          </div>

          <div className="mt-6 flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <div>

              <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
                Travel.
                <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                  Share. Inspire.
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 md:text-lg">
                Discover real travel experiences, share your adventures
                and connect with travelers from around the world.
              </p>

            </div>

            {/* Create Post Button */}
            <button
              type="button"
              className="group relative overflow-hidden rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-blue-600/30"
            >
              <span className="relative z-10 flex items-center gap-2">
                ✨ Create Post
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>

              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </button>

          </div>

        </section>

        {/* Community Stats */}
        <section className="mt-10 grid gap-4 sm:grid-cols-3">

          <div className="group rounded-2xl border border-slate-800/80 bg-slate-900/60 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30">

            <div className="flex items-center gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-2xl">
                🌍
              </div>

              <div>
                <p className="text-2xl font-bold text-white">
                  12K+
                </p>

                <p className="text-sm text-slate-500">
                  Travelers
                </p>
              </div>

            </div>

          </div>

          <div className="group rounded-2xl border border-slate-800/80 bg-slate-900/60 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30">

            <div className="flex items-center gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-2xl">
                📸
              </div>

              <div>
                <p className="text-2xl font-bold text-white">
                  35K+
                </p>

                <p className="text-sm text-slate-500">
                  Travel Posts
                </p>
              </div>

            </div>

          </div>

          <div className="group rounded-2xl border border-slate-800/80 bg-slate-900/60 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30">

            <div className="flex items-center gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-2xl">
                ❤️
              </div>

              <div>
                <p className="text-2xl font-bold text-white">
                  98K+
                </p>

                <p className="text-sm text-slate-500">
                  Connections
                </p>
              </div>

            </div>

          </div>

        </section>

        {/* Feed Layout */}
        <section className="mt-12 grid gap-8 lg:grid-cols-[1fr_320px]">

          {/* Posts */}
          <div className="space-y-6">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
                  Community Feed
                </p>

                <h2 className="mt-1 text-2xl font-bold">
                  Latest Adventures
                </h2>
              </div>

              <select className="rounded-xl border border-slate-800 bg-slate-900 px-4 py-2.5 text-sm text-slate-300 outline-none focus:border-blue-500">
                <option>Latest</option>
                <option>Popular</option>
                <option>Trending</option>
              </select>

            </div>

            {posts.map((post, index) => (

              <article
                key={post.id}
                className="group relative overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-900/70 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-900/10"
                style={{
                  animation: `fadeInUp 0.7s ease-out ${index * 0.15}s both`,
                }}
              >

                {/* Post Header */}
                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-3">

                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-500/20 bg-blue-500/10 text-xl">
                      {post.avatar}
                    </div>

                    <div>

                      <h3 className="font-semibold text-white">
                        {post.name}
                      </h3>

                      <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                        <span>📍 {post.location}</span>
                        <span>•</span>
                        <span>{post.time}</span>
                      </div>

                    </div>

                  </div>

                  <button
                    type="button"
                    className="rounded-lg px-3 py-2 text-slate-500 transition hover:bg-slate-800 hover:text-white"
                  >
                    ⋯
                  </button>

                </div>

                {/* Travel Visual */}
                <div className="relative mt-5 flex h-64 items-center justify-center overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-br from-blue-950/50 via-slate-900 to-cyan-950/30">

                  <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-blue-500/10 blur-2xl" />

                  <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-2xl" />

                  <div className="relative text-8xl transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-3">
                    {post.image}
                  </div>

                  <div className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-slate-950/60 px-3 py-1.5 text-xs text-slate-300 backdrop-blur-md">
                    📍 {post.location}
                  </div>

                </div>

                {/* Post Content */}
                <p className="mt-5 leading-7 text-slate-300">
                  {post.text}
                </p>

                {/* Actions */}
                <div className="mt-5 flex items-center justify-between border-t border-slate-800 pt-4">

                  <div className="flex items-center gap-5">

                    <button
                      type="button"
                      className="group/like flex items-center gap-2 text-sm text-slate-500 transition hover:text-red-400"
                    >
                      <span className="text-lg transition-transform duration-300 group-hover/like:scale-125">
                        ❤️
                      </span>
                      {post.likes}
                    </button>

                    <button
                      type="button"
                      className="flex items-center gap-2 text-sm text-slate-500 transition hover:text-blue-400"
                    >
                      <span className="text-lg">
                        💬
                      </span>
                      {post.comments}
                    </button>

                    <button
                      type="button"
                      className="flex items-center gap-2 text-sm text-slate-500 transition hover:text-cyan-400"
                    >
                      <span className="text-lg">
                        ↗️
                      </span>
                      Share
                    </button>

                  </div>

                  <button
                    type="button"
                    className="text-sm text-slate-500 transition hover:text-yellow-400"
                  >
                    🔖
                  </button>

                </div>

              </article>

            ))}

          </div>

          {/* Sidebar */}
          <aside className="space-y-6">

            {/* Trending Destinations */}
            <div className="rounded-3xl border border-slate-800/80 bg-slate-900/70 p-6 backdrop-blur-xl">

              <div className="flex items-center gap-2">
                <span className="text-xl">
                  🔥
                </span>

                <h2 className="text-lg font-bold">
                  Trending Destinations
                </h2>
              </div>

              <div className="mt-5 space-y-3">

                {[
                  ["🇯🇵", "Tokyo", "2.4K posts"],
                  ["🇫🇷", "Paris", "2.1K posts"],
                  ["🇮🇩", "Bali", "1.8K posts"],
                  ["🇮🇹", "Rome", "1.5K posts"],
                  ["🇦🇪", "Dubai", "1.2K posts"],
                ].map(([emoji, name, posts]) => (

                  <button
                    key={name}
                    type="button"
                    className="group flex w-full items-center gap-3 rounded-xl p-3 text-left transition-all duration-300 hover:bg-slate-800"
                  >

                    <div className="text-2xl">
                      {emoji}
                    </div>

                    <div className="flex-1">

                      <p className="font-medium text-slate-200 group-hover:text-blue-300">
                        {name}
                      </p>

                      <p className="text-xs text-slate-500">
                        {posts}
                      </p>

                    </div>

                    <span className="text-slate-600 transition group-hover:translate-x-1 group-hover:text-blue-400">
                      →
                    </span>

                  </button>

                ))}

              </div>

            </div>

            {/* Community Tip */}
            <div className="relative overflow-hidden rounded-3xl border border-blue-500/20 bg-blue-500/5 p-6">

              <div className="absolute right-[-30px] top-[-30px] h-24 w-24 rounded-full bg-blue-500/10 blur-2xl" />

              <div className="relative">

                <div className="text-3xl">
                  💡
                </div>

                <h2 className="mt-4 text-lg font-bold">
                  Travel Tip
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Share useful travel tips, hidden places and
                  memorable experiences to help other travelers.
                </p>

                <button
                  type="button"
                  className="mt-5 text-sm font-semibold text-blue-400 transition hover:text-blue-300"
                >
                  Share your experience →
                </button>

              </div>

            </div>

            {/* Join Community */}
            <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-blue-950/30 p-6">

              <div className="flex -space-x-3">

                {["👨🏻", "👩🏻", "🧑🏽", "👩🏽", "👨🏾"].map(
                  (avatar, index) => (
                    <div
                      key={index}
                      className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-slate-900 bg-slate-800 text-sm"
                    >
                      {avatar}
                    </div>
                  )
                )}

              </div>

              <h2 className="mt-5 text-lg font-bold">
                Join the Journey
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Connect with travelers, share your stories and
                discover your next adventure.
              </p>

              <button
                type="button"
                className="mt-5 w-full rounded-xl border border-blue-500/30 bg-blue-500/10 px-4 py-3 text-sm font-semibold text-blue-300 transition-all duration-300 hover:bg-blue-500/20"
              >
                Explore Travelers
              </button>

            </div>

          </aside>

        </section>

      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(25px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes travelFloat {
            0%, 100% {
              transform: translateY(0) rotate(0deg);
            }

            50% {
              transform: translateY(-14px) rotate(3deg);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            *,
            *::before,
            *::after {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              scroll-behavior: auto !important;
            }
          }
        `}
      </style>

    </div>
  )
}

export default Community