import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Addlanding = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState("");
  const baseUrl = import.meta.env.VITE_REACT_APP_BASE_URL;
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("data...");
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", desc);
      formData.append("img", img);
      const response = await axios.post(`${baseUrl}addlanding`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response, "eee");
      console.log(formData, "formdata");
      navigate("/landingpage");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-slate-400">
        <div className="w-full max-w-screen-lg">
          <form
            onSubmit={handleSubmit}
            className="bg-red-50  shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col md:flex-row"
          >
            <div className="w-full md:w-1/2 p-4">
              {/* <!-- Your form content --> */}

              <div className="mb-4">
                <label className="block text-gray-700 text-base font-DancingScript mb-2  ">
                  Add Title
                </label>
                <input
                  className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-gray-700"
                  id="phone"
                  type="text"
                  placeholder=" "
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-base font-DancingScript mb-2  ">
                  Add Description
                </label>
                <textarea
                  className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-gray-700"
                  id="password"
                  type="password"
                  placeholder="description add"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                />
              </div>
              <label htmlFor="" className="block font-bold mb-1">
                Image
              </label>
              <input
                type="file"
                onChange={(e) => {
                  console.log(img, "images");
                  setImg(e.target.files[0]);
                }}
                name="img"
                className="file-input w-full max-w-xs"
              />
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-DancingScript py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-6"
                  type="submit"
                >
                  Add
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Addlanding;
