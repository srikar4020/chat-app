import React from 'react'
import assets from '../assets/assets'
import { userDummyData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

// // Dummy data (you can replace later with backend)
// const userDummyData = [
//   { _id: 1, fullName: "John Doe", profilePic: "" },
//   { _id: 2, fullName: "Jane Smith", profilePic: "" },
//   { _id: 3, fullName: "Alex Johnson", profilePic: "" },
//   { _id: 4, fullName: "Chris Brown", profilePic: "" },
//   { _id: 5, fullName: "Emma Wilson", profilePic: "" }
// ]

const Sidebar = ({ selectedUser, setSelectedUser }) => {

  const navigate = useNavigate();

  return (
    <div className={`bg-[#8185B2]/10 h-full p-5 rounded-r-xl overflow-y-scroll text-white ${selectedUser ? "max-md:hidden" : ""}`}>

      {/* 🔹 Top Section */}
      <div className='pb-5'>
        <div className='flex justify-between items-center'>

          <img src={assets.logo} alt="logo" className='max-w-40' />

          <div className="relative py-2 group">
            <img 
              src={assets.menu_icon} 
              alt="Menu" 
              className='max-h-5 cursor-pointer' 
            />

            {/* Dropdown */}
            <div className='absolute top-full right-0 z-20 w-32 p-5 rounded-md bg-[#282142] border border-gray-600 text-gray-100 hidden group-hover:block'>

              <p 
                onClick={() => navigate('/profile')} 
                className='cursor-pointer text-sm'
              >
                Edit Profile
              </p>

              <hr className="my-2 border-t border-gray-500" />

              <p className='cursor-pointer text-sm'>Logout</p>

            </div>
          </div>

        </div>
      </div>

      {/* 🔍 Search Section */}
      <div className='bg-[#282142] rounded-full flex items-center gap-2 py-3 px-4 mt-5'>
        <img 
          src={assets.search_icon} 
          alt="Search" 
          className='w-3'
        />

        <input 
          type="text"
          placeholder="Search User..."
          className='bg-transparent border-none outline-none text-white text-xs placeholder-[#c8c8c8] flex-1'
        />
      </div>

      {/* 👥 Users List */}
      <div className='flex flex-col mt-5'>
        {userDummyData.map((user, index) => (
          
          <div  onclick={() => setSelectedUser(user)}
            key={index}
            onClick={() => setSelectedUser(user)}
            className={`relative flex items-center gap-2 p-2 pl-4 rounded cursor-pointer max-sm:text-sm ${
              selectedUser?._id === user._id && 'bg-[#282142]/50'
            }`}
          >

            {/* Profile */}
            <img 
              src={user?.profilePic || assets.avatar_icon} 
              alt="" 
              className='w-[35px] aspect-[1/1] rounded-full'
            />

            {/* Name + Status */}
            <div className='flex flex-col leading-5'>
              <p>{user.fullName}</p>

              {
                index < 3
                  ? <span className='text-green-400 text-xs'>Online</span>
                  : <span className='text-neutral-400 text-xs'>Offline</span>
              }
            </div>

            {/* Notification badge */}
            {
              index > 2 &&
              <p className='absolute top-4 right-4 text-xs h-5 w-5 flex justify-center items-center rounded-full bg-violet-500/50'>
                {index}
              </p>
            }

          </div>

        ))}
      </div>

    </div>
  )
} 

export default Sidebar