import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { MessageCircle, User } from "lucide-react";
import useAuth from "../utils/AuthContext";

const Messages = () => {
  const [connections, setConnections] = useState([]);
  const navigate = useNavigate();
  const userId = Cookies.get("id");
  const { token } = useAuth();
     
  useEffect(() => {
    if (!token) {
      navigate('/');
    }
  }, [token, navigate]);

  useEffect(() => {
    const fetchConnections = async () => {
      try {
        const response = await axios.get(`https://ncc-server-production.up.railway.app/api/connections/${userId}`);
        setConnections(response.data.connections);
      } catch (error) {
        console.error("Error fetching connections:", error);
      }
    };
    fetchConnections();
  }, [userId]);

  const handleNavigate = (receiverId) => {
    navigate(`/messages/${userId}/${receiverId}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-indigo-700 text-center">
            My Connections
          </h1>
          <p className="text-center text-indigo-500 mt-2">
            Chat with your professional network
          </p>
        </header>

        {connections.length === 0 ? (
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <User className="w-12 h-12 mx-auto text-indigo-400 mb-4" />
            <h3 className="text-xl font-semibold text-indigo-800 mb-2">No connections yet</h3>
            <p className="text-indigo-600">Connect with others to start messaging</p>
          </div>
        ) : (
          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {connections.map((connection) => (
              <div
                key={connection.connection_id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
              >
                <div className="p-4 flex items-center space-x-4">
                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-indigo-100 overflow-hidden border-2 border-indigo-200">
                      {connection.profile_pic ? (
                        <img
                          src={`https://ncc-server-production.up.railway.app/uploads/${connection.profile_pic}`}
                          alt={`${connection.name}'s profile`}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.style.display = 'none';
                            e.target.parentNode.querySelector('.fallback-icon').style.display = 'flex';
                          }}
                        />
                      ) : null}
                      <div 
                        className="fallback-icon absolute inset-0 flex items-center justify-center bg-indigo-100 text-indigo-400"
                        style={{ display: connection.profile_pic ? 'none' : 'flex' }}
                      >
                        <User className="w-8 h-8" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h2 className="text-lg font-semibold text-indigo-900 truncate">
                      {connection.name}
                    </h2>
                    <p className="text-sm text-indigo-600 truncate">
                      {connection.role && connection.college 
                        ? `${connection.role} at ${connection.college}`
                        : connection.role || connection.college || "Connection"}
                    </p>
                  </div>
                </div>
                
                <div className="px-4 pb-4 flex justify-end">
                  <button
                    onClick={() => handleNavigate(connection.user_id)}
                    className="flex items-center space-x-2 py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Message</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Messages;