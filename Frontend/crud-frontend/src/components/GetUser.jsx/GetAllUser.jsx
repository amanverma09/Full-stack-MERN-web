import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./user.css";
import Getsingleuser from "../Getsingleuser/Getsingleuser";
import { FaUser, FaEnvelope, FaLock, FaCog, FaAccusoft } from "react-icons/fa";

const GetAllUser = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    try {
      const response = await axios.get(
        "https://front-end-wine-xi.vercel.app/api/users"
      );
      setUsers(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching users:", error);
      setLoading(false);
    }
  };

  const deleteUser = async (id) => {
    console.log(id);
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (confirmDelete) {
      try {
        await axios.delete(
          `https://front-end-wine-xi.vercel.app/api/users/${id}`
        );
        fetchUser();
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    }
  };

  useEffect(() => {
    fetchUser();
  }, [users]);

  return (
    <div className="createtable overflow-x-auto w-full max-w-4xl shadow-2xl rounded-xl backdrop-blur-md p-6 border border-white/30">
      <div className="header">
        <h1 className="text-4xl font-bold mb-8 text-yellow-300 text-center underline underline-offset-8 decoration-4 ">
          User List
        </h1>
        <Link className="add-btn" to="/create">
          ➕ Add User
        </Link>
      </div>

      {loading ? (
        <h2 className="loader">Loading users...</h2>
      ) : users.length === 0 ? (
        <h2 className="loader" style={{ color: "red" }}>
          No Users Found
        </h2>
      ) : (
        <table>
          <thead>
            <tr>
              <th>
                <FaAccusoft className="inline mr-2 text-yellow-400" />
                S.No
              </th>

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
              <th>
                <FaCog className="inline mr-2 text-green-300" />
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td className="py-3 px-4 text-white">{index + 1}</td>
                <td className="user-name  text-blue-300">{user.name}</td>
                <td className="py-3 px-4 text-white">{user.email}</td>
                <td className="py-3 px-4 text-white">{user.password}</td>
                <td>
                  <Link to={`/view/${user._id}`}>
                    <i className="fas fa-eye text-blue-500 text-xl"></i>
                  </Link>

                  <Link className="update-btn" to={`/update/${user._id}`}>
                    <i className="fa-solid fa-pen-to-square text-green-600"></i>
                  </Link>
                  <button
                    className="delete-btn"
                    onClick={() => deleteUser(user._id)}
                  >
                    <i
                      className="fas fa-trash"
                      style={{ color: "red", fontSize: "20px" }}
                    ></i>{" "}
                    &nbsp;
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default GetAllUser;
