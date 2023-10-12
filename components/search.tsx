"use client";
import Link from "next/link";
import React, { useState ,useEffect} from "react";
import { BiSearch } from "react-icons/bi";

function Search() {
  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState([]);
  const [showModal, setShowModal] = useState(false);
  
  const onSearchTextChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
    // findSearchRelated();
  };

  useEffect(() => {
    if (searchText.trim() === "") {
      setResults([]);
      setShowModal(false);
      return;
    }

    const fetchSearchResults = async () => {
      try {
        const response = await fetch(`/api/users/${searchText}`).then(r=>r.json());
        setResults(response);
        setShowModal(true);
      } catch (error) {
        console.error("API hatası:", error);
      }
    };

    fetchSearchResults();
  }, [searchText]); 

  // const findSearchRelated = async () => {
  //   const users = await fetch(`/api/users/${searchText}`, {
  //     method: "GET",
  //     headers: { "Content-type": "application/json" },
  //   })
  //   //   .then((data) => data.json())
  //   //   .then((data) => setResults(data));

  //   const data = await users.json();
  //   setResults(data);
  //   console.log(data);
  //   setShowModal(true);
  // };


  const closeModal = () => {
    // Modal'ı gizle
    setShowModal(false);
  };


  return (
    <div className="relative rounded-full border p-2">
        <div>
      <input
        type="text"
        placeholder="Ara..."
        className="w-full pl-10 pr-3 py-1 rounded-full outline-none focus:ring-2 focus:ring-blue-500"
        onChange={onSearchTextChange}
      />
      <div className="absolute inset-y-0 left-0 flex items-center pl-3">
        <BiSearch className="h-6 w-6 text-gray-400" /> {/* BiSearch simgesi */}
      </div>
      </div>
      <div>
      {showModal && (
        <div className="bg-white rounded-lg mt-2 max-w-md border border-gray-300">
        <button className="absolute top-2 right-2" onClick={closeModal}>
          X
        </button>
        <ul className="flex flex-col">
          {results.users.map((user) => (
            <Link href={`/${user.id}`} onClick={()=>{closeModal() ;}} key={user.id}>{user.name}</Link>
          ))}
        </ul>
      </div>
      )}
      </div>
    </div>
  );
}

export default Search;
