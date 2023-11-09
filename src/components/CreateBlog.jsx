import React, { useState } from "react";
import ReactQuill from "react-quill"; // Import React-Quill
import "react-quill/dist/quill.snow.css"; // Import Quill styles
import { axiosClient } from "../utility/AxiosClient";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const CreateBlog = () => {
  const myprofile = useSelector(state => state.app.myprofile)

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [image, setImage] = useState(null);
  const [imageBase64, setImageBase64] = useState("");

  const setFileToBase64 = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      console.log("encoded file:", reader.result);
      setImageBase64(reader.result);
    };
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setFileToBase64(file);
  };

  const navigate = useNavigate()
  const [publishing, setpublishing]=useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setpublishing(true)
    try {
      const response = await axiosClient.post("/blog/create", {
        title,
        text: content,
        tags,
        image: imageBase64,
      });
      console.log("response", response);
      
      if(response.data.status == 'ok'){
        setpublishing(false)
        navigate(`/profile/${myprofile?._id}`)
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto  h-screen overflow-x-auto p-4 mt-20 create-blog">
      <h2 className="text-2xl font-semibold mb-4 mt-2">Create a New Post</h2>
      <div className="mb-4">
        <input
          type="text"
          className="w-full p-2 text-4xl outline-none border-b"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="mb-4 flex flex-col">
        <label htmlFor="image" className="text-xl font-semibold mb-4">
          Thumbnail of your blog
        </label>
        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={handleImageUpload}
          className=""
        />
      </div>
      {imageBase64 && (
        <div className="mb-4">
          <img src={imageBase64} alt="Uploaded" className="max-w-full" />
        </div>
      )}
      <div className="mb-4">
        <label htmlFor="content" className="text-lg font-semibold block mb-2">
          Content:
        </label>
        <ReactQuill
          value={content}
          onChange={(newContent) => setContent(newContent)}
          placeholder="Write your post content here"
          className="outline-none"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          className="w-full p-2 text-xl outline-none border-b"
          placeholder="tags"
          onChange={(e) => setTags(e.target.value)}
        />
      </div>

      <button
        onClick={handleSubmit}
        className="bg-blue-500 px-4 py-2 rounded-md text-white"
      >
        { publishing ? 'publishing':"publish"}
      </button>
    </div>
  );
};

export default CreateBlog;
