import React from "react";

export default function SummerRecipesUI() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <div className="relative">
        <img
          src="/images/hero.jpg"
          alt="Hero"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute top-10 left-10 bg-white rounded-xl p-6 shadow-lg w-80">
          <div className="bg-yellow-400 text-white font-semibold text-center rounded-t-xl py-1">
            Recipe of the day
          </div>
          <div className="p-3">
            <h3 className="text-pink-500 font-bold text-xl">Salad Caprese</h3>
            <p className="text-sm mt-1">
              Classic Italian Salad Caprese (ripe tomatoes, fresh mozzarella, pesto, olive oil, and balsamic vinegar).
            </p>
            <div className="mt-3">
              <p className="text-sm text-gray-500">Salad Caprese</p>
              <button className="mt-2 bg-pink-500 text-white py-1 px-3 rounded-lg text-sm">
                View now →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* This Summer Recipes */}
      <section className="text-center py-10">
        <h2 className="text-pink-600 text-2xl font-bold mb-2">This Summer Recipes</h2>
        <p className="text-gray-600 mb-6">We have all your Independence Day sweets covered.</p>
        <div className="grid grid-cols-4 gap-6 px-10">
          {[
            { title: "Italian-style tomato", time: "20 minutes" },
            { title: "Spaghetti with vegetables", time: "25 minutes" },
            { title: "Lotus delight salad", time: "20 minutes" },
            { title: "Snack cakes", time: "21 minutes" },
          ].map((item, index) => (
            <div key={index} className="bg-white shadow rounded-xl p-4">
              <div className="h-40 bg-gray-100 mb-4 rounded"></div>
              <p className="font-semibold text-sm">{item.title}</p>
              <p className="text-xs text-pink-500 mt-1">{item.time}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Recipes With Videos */}
      <section className="text-center py-10">
        <h2 className="text-pink-600 text-2xl font-bold mb-2">Recipes With Videos</h2>
        <p className="text-gray-600 mb-6">Cooking Up Culinary Creations with Step-by-Step Videos</p>
        <div className="grid grid-cols-4 gap-6 px-10">
          {[
            "Salad with cabbage and shrimp",
            "Salad of cove beans, shrimp and potatoes",
            "Sunny-side up fried egg",
            "Lotus delight salad",
          ].map((title, index) => (
            <div key={index} className="bg-white shadow rounded-xl p-4">
              <div className="h-36 bg-gray-100 mb-4 rounded"></div>
              <p className="font-semibold text-sm">{title}</p>
              <p className="text-xs text-pink-500 mt-1">20 minutes</p>
            </div>
          ))}
        </div>
      </section>

      {/* Editor's pick */}
      <section className="text-center py-10">
        <h2 className="text-pink-600 text-2xl font-bold mb-2">Editor's pick</h2>
        <p className="text-gray-600 mb-6">
          Curated Culinary Delights: Handpicked Favorites by Our Expert Editors!
        </p>
        <div className="grid grid-cols-2 gap-6 px-10">
          {[
            {
              title: "Stuffed sticky rice ball",
              author: "Jennifer King",
              time: "35 minutes",
              desc: "Delightful Asian treat with chewy, glutinous rice and flavorful surprise filling.",
            },
            {
              title: "Strawberry smoothie",
              author: "Matthew Martinez",
              time: "40 minutes",
              desc: "Made with ripe strawberries, this creamy blender drink offers...",
            },
            {
              title: "Latte Art",
              author: "Sarah Hill",
              time: "15 minutes",
              desc: "The art of creating captivating designs on the surface of a latte...",
            },
            {
              title: "Butter fried noodles",
              author: "Julia Lopez",
              time: "30 minutes",
              desc: "Savory noodles cooked in butter for a delicious and satisfying meal...",
            },
          ].map((item, index) => (
            <div key={index} className="bg-white shadow rounded-xl p-5 text-left flex gap-4">
              <div className="h-28 w-28 bg-gray-200 rounded"></div>
              <div>
                <h4 className="font-semibold">{item.title}</h4>
                <p className="text-xs text-gray-400">{item.time}</p>
                <p className="text-sm mt-1 text-gray-600">{item.desc}</p>
                <p className="text-sm mt-2 text-pink-500">{item.author}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white px-10 py-10">
        <div className="grid grid-cols-4 gap-6">
          <div>
            <h4 className="font-bold mb-2">About Us</h4>
            <p className="text-sm mb-2">
              Welcome to our website, a wonderful place to explore and learn how to cook like a pro.
            </p>
            <div className="flex">
              <input
                className="p-1 px-2 rounded-l-md text-black text-sm"
                placeholder="Enter your email"
              />
              <button className="bg-pink-500 text-sm px-3 py-1 rounded-r-md">Send</button>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-2">Learn More</h4>
            <ul className="text-sm space-y-1">
              <li>Our Cooks</li>
              <li>See Our Features</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Shop</h4>
            <ul className="text-sm space-y-1">
              <li>Gift Subscription</li>
              <li>Send Us Feedback</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Recipes</h4>
            <ul className="text-sm space-y-1">
              <li>What to Cook This Week</li>
              <li>Pasta</li>
              <li>Vegan</li>
              <li>Christmas</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 text-center text-sm text-gray-400">© 2025 Cheffify Company. Terms of Service | Privacy Policy</div>
      </footer>
    </div>
  );
}