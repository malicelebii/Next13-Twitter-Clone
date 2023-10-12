"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function UploadImage({ imgSrc }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState(imgSrc);
  const [uploadData, setUploadData] = useState();
  const router = useRouter();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleFileChange = (e) => {
    const reader = new FileReader();

    reader.onload = function (onLoadEvent) {
      setImageSrc(onLoadEvent?.target?.result);
      setUploadData(undefined);
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  const handleUpload = async (event) => {
    const url =`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_NAME}/image/upload` 
    
    event.preventDefault();

    const form = event.currentTarget;

    const fileInput = Array.from(form.elements).find(
      ({ name }) => name === "file"
    );

    const formData = new FormData();

    for (const file of fileInput.files) {
      formData.append("file", file);
    }

    formData.append("upload_preset", "my_uploads");

    const data = await fetch(
     url,
      {
        method: "POST",
        body: formData,
      }
    ).then((r) => r.json());

    setImageSrc(data.secure_url);
    setUploadData(data);

    const updateUser = await fetch("/api/upload/profileImg", {
      method: "POST",
      body: JSON.stringify(data.secure_url)
    }).then(r=>router.refresh());

  
    closeModal()
    
  };

  return (
    <>
      <button onClick={openModal}>
        <img
          src={imageSrc}
          alt="Profile Avatar"
          className="w-16 h-16 rounded-full"
        />
      </button>
      <div
        className={`${
          isModalOpen ? "block" : "hidden"
        } fixed inset-0 flex items-center justify-center z-50`}
      >
        <div className="modal fixed inset-0 flex items-center justify-center">
          <div className="modal-content bg-white w-1/2 p-6 rounded-lg shadow-md">
            <div className="modal-header flex justify-between items-center border-b-2 pb-2">
              <h5 className="modal-title text-2xl font-semibold">
                Resim Yükle
              </h5>
              <button
                type="button"
                className="close text-red-500 hover:text-red-700"
                onClick={closeModal}
              >
                <span>&times;</span>
              </button>
            </div>
            <form
              method="post"
              onChange={handleFileChange}
              onSubmit={handleUpload}
            >
              <div className="modal-body mt-4">
                <input
                  type="file"
                  name="file"
                  onChange={handleFileChange}
                  className="border rounded p-2 w-full"
                />
              </div>
              <div className="modal-footer flex justify-end mt-4">
                <button
                  type="submit"
                  className="btn bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                >
                  Yükle
                </button>
                <button
                  type="button"
                  className="btn bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 ml-2 rounded"
                  onClick={closeModal}
                >
                  İptal
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default UploadImage;
