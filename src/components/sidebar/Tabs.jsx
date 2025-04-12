const Tabs = ({ activeTab, setActiveTab }) => {
    const tabs = ['About', 'Resume', 'Portfolio'];
  
    return (
      <div className="flex justify-center md:justify-end bg-gray-100 p-2 gap-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`py-1 px-3 border-b-2 ${
              activeTab === tab ? 'border-blue-500 text-blue-500 font-semibold' : 'border-transparent'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
    );
  };
  
  export default Tabs;
  