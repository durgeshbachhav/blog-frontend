import React, { useEffect, useState } from "react";
import FeedData from "./FeedData";
import EditUserProfileModal from "./EditUserProfileModal "; // Import the modal component
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getUserProfile } from "../reduxStore/slices/userSlice";
import { axiosClient } from "../utility/AxiosClient";
import { KEY_ACCESS_TOKEN, removeItem } from "../utility/LocalStorageManager";

const Profile = () => {
  const { myprofile } = useSelector((state) => state.app);
  const { userprofile } = useSelector((state) => state.user);
  const { userId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (userId) {
      dispatch(getUserProfile(userId));
    }
  }, [dispatch, userId]);

  const [isEditingProfile, setIsEditingProfile] = useState();

  const handleEditProfile = () => {
    if (myprofile?._id === userprofile?._id) {
      setIsEditingProfile(true);
    }
  };

  const handleSaveProfile = (updatedUser) => {
    // Logic to save the updated user profile
    console.log("Updated user profile:", updatedUser);
    setIsEditingProfile(false); // Close the edit profile modal
  };

  const handleLogout = async () => {
    try {
      await axiosClient.post("/auth/logout");
      removeItem(KEY_ACCESS_TOKEN);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{ width: "100%", height: "100vh" }}
      className="flex items-start justify-evenly mt-16"
    >
      <div
        style={{ width: "70%", height: "100vh" }}
        className="border-r overflow-x-auto scrollable-container"
      >
        <div className="mt-2 rounded-lg">
          <div className="w-full">
            <div className="w-full bg-black rounded-md text-white h-32 flex items-center justify-center">
              <h1 className="font-bold text-2xl">
                "Blogium: Where Ideas Unleash, Words Inspire."
              </h1>
            </div>
          </div>
          <div className="w-full p-4">
            <h2 className="text-2xl text-start text-gray-800 font-bold">
              {userprofile?.blogs?.length > 0
                ? `Hello🖐️, I'm ${userprofile?.fullname}, and these are my blogs.`
                : `Hello🖐️, I'm ${userprofile?.fullname}, and I'm about to create some captivating blogs. Stay tuned for my upcoming literary adventures!`}
            </h2>
          </div>
        </div>
        <div>
          {userprofile ? (
            userprofile?.blogs?.map((blog, index) => (
              <FeedData blog={blog} key={index} />
            ))
          ) : (
            <p>no blog found</p>
          )}
        </div>
      </div>
      <div
        style={{ width: "30%", height: "100vh" }}
        className="overflow-x-auto p-4 "
      >
        <div className="flex flex-col items-center justify-center rounded-lg p-4 bg-white">
          <img
            src={
              userprofile?.avatar?.url ||
              "https://images.unsplash.com/photo-1611162619969-50b02487f71b?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt="person-male"
            className="w-32 h-32 rounded-full"
          />
          <div className="flex flex-col mt-2 items-center justify-center gap-2">
           <div className="flex flex-col items-center justify-center gap-3">
           <h2 className="text-xl font-semibold">{userprofile?.fullname}</h2>
            <h4 className="text-sm text-gray-600">
              {userprofile?.blogs?.length} blogs
            </h4>
            
           </div>
            {myprofile?._id === userprofile?._id && (
              <div className="flex items-center justify-center flex-col gap-2">
                <button
                  onClick={handleEditProfile}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                  Edit
                </button>
                <button
                  onClick={handleLogout}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Render the EditUserProfileModal when isEditingProfile is true */}
      {isEditingProfile && (
        <div className="modal-overlay">
          <div className="modal-content">
            <EditUserProfileModal
              user={userprofile}
              onClose={() => setIsEditingProfile(false)}
              onSave={handleSaveProfile}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
