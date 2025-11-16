import assets, { userDummyData } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ selectedUser, setSelectedUser }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`
        bg-[#8185B2]/10 h-full p-5 rounded-r-xl text-white 
        overflow-y-auto overflow-x-visible 
        scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent
        ${selectedUser ? "max-md:hidden" : ""}
      `}
    >
      {/* Top Section */}
      <div className="pb-5">
        {/* Logo + Menu */}
        <div className="flex justify-between items-center">
          <img
            src={assets.logo}
            alt="logo"
            onClick={() => window.location.reload()}
            className="max-w-36 cursor-pointer"
          />

          {/* Menu Dropdown */}
          <div className="relative group cursor-pointer">
            <img
              src={assets.menu_icon}
              alt="menu"
              className="max-h-5 select-none"
            />

            {/* Dropdown */}
            <div
              className="
                absolute top-full right-0 w-36 p-4 z-50
                bg-[#282142] border border-gray-600 rounded-lg text-gray-100
                opacity-0 pointer-events-none
                group-hover:opacity-100 group-hover:pointer-events-auto 
                transition-all duration-200
              "
            >
              <p
                onClick={() => navigate('/profile')}
                className="cursor-pointer text-sm hover:text-violet-300"
              >
                Edit Profile
              </p>

              <hr className="my-2 border-gray-500" />

              <p className="cursor-pointer text-sm hover:text-violet-300">
                Logout
              </p>
            </div>
          </div>
        </div>

        {/* Search Box */}
        <div className="bg-[#282142] rounded-full flex items-center gap-2 py-3 px-4 mt-5">
          <img src={assets.search_icon} alt="Search" className="w-3" />
          <input
            type="text"
            placeholder="Search User..."
            className="bg-transparent outline-none flex-1 text-white text-xs placeholder-gray-400"
          />
        </div>
      </div>

      {/* USERS LIST */}
      <div className="flex flex-col">
        {userDummyData.map((user, index) => (
          <div
            key={index}
            onClick={() => setSelectedUser(user)}
            className={`
              relative flex items-center gap-3 
              p-2 pl-4 pr-8 rounded-lg cursor-pointer 
              transition-all duration-150 
              max-sm:text-sm 
              hover:bg-[#282142]/40 
              ${selectedUser?._id === user._id ? "bg-[#282142]/60" : ""}
            `}
          >
            {/* Profile */}
            <img
              src={user?.profilePic || assets.avatar_icon}
              alt="profile"
              className="w-[38px] aspect-square rounded-full"
            />

            {/* Name + Status */}
            <div className="flex flex-col leading-4">
              <p className="font-medium text-sm">{user.fullName}</p>

              {index < 3 ? (
                <span className="text-green-400 text-xs">Online</span>
              ) : (
                <span className="text-neutral-400 text-xs">Offline</span>
              )}
            </div>

            {/* UNREAD BADGE */}
            {index > 1 && (
              <p
                className="
                  absolute 
                  right-3 
                  top-1/2 -translate-y-1/2
                  text-[11px] font-semibold 
                  h-5 w-5
                  flex justify-center items-center 
                  rounded-full 
                  bg-violet-600/70
                  pointer-events-none
                "
              >
                {index}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
