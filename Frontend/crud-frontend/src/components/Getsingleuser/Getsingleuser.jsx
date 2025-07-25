import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

const Getsingleuser = () => {
  const [user, setUser] = useState([]);
  const { id } = useParams();

  const fetchUser = async () => {
    try {
      const response = await axios.get(`https://front-end-wine-xi.vercel.app/api/users/${id}`);
      setUser([response.data]);
    } catch (error) {
      console.log("User not found", error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="min-h-screen bg-gray-800 flex flex-col items-center justify-center text-white font-sans p-5">
      <h1 className="text-4xl font-bold mb-8 text-yellow-300">User Details</h1>

      <div className="overflow-x-auto w-full max-w-4xl shadow-2xl rounded-xl backdrop-blur-md p-6 border border-white/30">
        <table className="w-full text-left table-auto border-separate border-spacing-y-4">
          <thead>
            <tr className="text-lg text-white uppercase tracking-wider">
              <th>
                <FaUser className="inline mr-2 text-yellow-400" />
                Name
              </th>
              <th>
                <FaEnvelope className="inline mr-2 text-pink-300" />
                Email
              </th>
              <th>
                <FaLock className="inline mr-2 text-red-300" />
                Password
              </th>
            </tr>
          </thead>
          <tbody>
            {user.map((user) => (
              <tr
                key={user._id}
                className="bg-white/10 hover:bg-white/20 transition-all duration-300 ease-in-out rounded-lg"
              >
                <td className="py-3 px-4 font-bold text-blue-300">
                  {user.name}
                </td>
                <td className="py-3 px-4 text-white">{user.email}</td>
                <td className="py-3 px-4 text-white">{user.password}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Getsingleuser;
