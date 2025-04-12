import { useState } from "react";

const tabs = ["About", "Resume", "Portfolio"];

const content = {
  About: (
    <>
      <h2 className="text-2xl font-semibold mb-4">About Me</h2>
      <p className="mb-4">
        I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.
      </p>
      <p>
        My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.
      </p>
    </>
  ),
  Resume: <p className="text-lg">This is the Resume tab content.</p>,
  Portfolio: <p className="text-lg">This is the Portfolio tab content.</p>
};

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("About");

  return (
    <div className="min-h-screen bg-zinc-900 text-white flex justify-center p-10">
      <div className="flex gap-4 max-w-6xl w-full">
        {/* Sidebar */}
        <div className="bg-zinc-800 rounded-xl p-6 flex flex-col items-center w-64 self-start">
          <div className="bg-zinc-700 rounded-xl p-6">
            <img
              src="https://avatars.githubusercontent.com/u/9919?v=4"
              alt="Avatar"
              className="rounded-full w-24 h-24 mb-4"
            />
          </div>
          <div className="flex gap-4 mt-6">
            <a href="#" className="text-purple-400 text-xl">
              <i className="fab fa-twitter" />
            </a>
            <a href="#" className="text-purple-400 text-xl">
              <i className="fab fa-instagram" />
            </a>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-zinc-800 rounded-xl flex">
          {/* Tab Buttons on the right */}
          <div className="flex flex-col items-end bg-zinc-900 rounded-tr-xl p-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`w-32 text-right px-4 py-2 mb-2 text-base font-semibold rounded-l-xl transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-yellow-400 text-zinc-900"
                    : "text-zinc-300 hover:text-white hover:bg-zinc-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="flex-1 p-6 text-zinc-200 text-base leading-relaxed bg-zinc-800 rounded-bl-xl">
            {content[activeTab]}
          </div>
        </div>
      </div>
    </div>
  );
}
