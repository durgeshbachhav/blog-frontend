import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { editProfile } from "../reduxStore/slices/appSlice";

const EditUserProfileModal = ({ user, onClose, onSave }) => {
  const [editedUser, setEditedUser] = useState({ ...user });
  const [fullname, setFullname] = useState("");
  const [image, setImage] = useState(null);
  const [imageBase64, setImageBase64] = useState("");

  const setFileToBase64 = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImageBase64(reader.result);
    };
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setFileToBase64(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      onSave(editedUser);
      
      const response = dispatch(
        editProfile({
          fullname,
          avatar: imageBase64,
        })
      );
      console.log('response',response);
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(editProfile({}));
  }, [dispatch]);

  return (
    <div className="w-full">
      <div className="">
        <h2 className="text-center" style={{ fontFamily: "Agbalumo" }}>
          Edit Profile
        </h2>
        <div>
          <div className="mb-2 input-user-img">
            <label
              htmlFor="profileImage"
              className="flex items-center justify-center cursor-pointer"
            >
              <img
                className="rounded-full w-40 h-40"
                src={imageBase64 || "https://your-default-image-url.jpg"}
                alt=""
              />
            </label>
            <input
              type="file"
              accept="image/*"
              id="profileImage"
              className="hidden"
              onChange={handleImageUpload}
            />
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-4 mt-6 mb-6"
        >
          <input
            type="text"
            placeholder="fullname"
            onChange={(e) => setFullname(e.target.value)}
            className="block outline-none bg-gray-200 px-8 py-2 rounded-md"
          />
        </form>
        <div className="flex gap-2 ">
          <button
            className="bg-green-400 hover:bg-green-500 px-10 py-2 rounded-md text-white"
            onClick={handleSubmit}
          >
            Save
          </button>
          <button
            className="flex items-center justify-center gap-1 bg-slate-500 px-10 py-2 rounded-md text-white"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditUserProfileModal;
