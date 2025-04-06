// pages/dashboard.tsx
import React from "react";

const Dashboard = () => {
  const user = {
    name: "Rahul", // You can later replace this with dynamic data
    progress: 65,  // out of 100
    status: {
      scanned: true,
      videoWatched: true,
      completed: false,
    },
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow-md">
        <h1 className="text-2xl font-bold mb-4">Welcome, {user.name} 👋</h1>

        {/* Progress Bar */}
        <div className="mb-6">
          <h2 className="font-semibold mb-2">Your Progress</h2>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div
              className="bg-purple-500 h-4 rounded-full transition-all duration-500"
              style={{ width: `${user.progress}%` }}
            />
          </div>
          <p className="text-sm mt-1 text-gray-600">{user.progress}% completed</p>
        </div>

        {/* Legend Section */}
        <div className="mt-4">
          <h2 className="font-semibold mb-2">Status Legend</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex items-center space-x-2">
              <span
                className={`w-4 h-4 rounded-full ${
                  user.status.scanned ? "bg-green-500" : "bg-gray-300"
                }`}
              />
              <span>Scanned</span>
            </div>
            <div className="flex items-center space-x-2">
              <span
                className={`w-4 h-4 rounded-full ${
                  user.status.videoWatched ? "bg-blue-500" : "bg-gray-300"
                }`}
              />
              <span>Video Watched</span>
            </div>
            <div className="flex items-center space-x-2">
              <span
                className={`w-4 h-4 rounded-full ${
                  user.status.completed ? "bg-purple-600" : "bg-gray-300"
                }`}
              />
              <span>Completed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
