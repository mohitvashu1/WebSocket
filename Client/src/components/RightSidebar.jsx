import React from "react";
import assets, { imagesDummyData } from "../assets/assets";

const RightSidebar = ({ selectedUser }) => {
  return (
    selectedUser && (
      <div
        className={`
          bg-[#8185B2]/10 text-white w-full 
          relative flex flex-col 
          overflow-y-auto
          ${selectedUser ? "max-md:hidden" : ""}
        `}
      >
        {/* Top Section */}
        <div className="pt-16 flex flex-col items-center gap-3 text-xs font-light px-6">
          
          {/* Profile Image */}
          <img
            src={selectedUser?.profilePic || assets.avatar_icon}
            alt="profile"
            className="w-20 aspect-square rounded-full shadow-md"
          />

          {/* Name + Status */}
          <h1 className="text-xl font-medium flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span>
            {selectedUser.fullName}
          </h1>

          {/* Bio */}
          <p className="text-center opacity-80">{selectedUser.bio}</p>
        </div>

        <hr className="border-[#ffffff30] my-4 mx-6" />

        {/* MEDIA SECTION */}
        <div className="px-6 mb-24">
          <p className="text-xs">Media</p>

          <div className="mt-3 max-h-[220px] overflow-y-auto grid grid-cols-2 gap-3">
            {imagesDummyData.map((url, index) => (
              <div
                key={index}
                onClick={() => window.open(url)}
                className="cursor-pointer rounded-md overflow-hidden"
              >
                <img
                  src={url}
                  alt="chat media"
                  className="w-full h-24 object-cover rounded-md"
                />
              </div>
            ))}
          </div>
        </div>

        {/* LOGOUT BUTTON FIXED BOTTOM */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
          <button className="bg-gradient-to-r from-purple-400 to-violet-600 text-white text-sm font-light py-2 px-16 rounded-full shadow-md hover:opacity-90">
            Logout
          </button>
        </div>
      </div>
    )
  );
};

export default RightSidebar;
