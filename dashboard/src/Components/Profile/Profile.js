import React, { useEffect, useState } from "react";
import "./Profile.css";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          window.location.href = "http://localhost:3000/login";
          return;
        }

        const response = await fetch(
          "http://localhost:3002/api/auth/me",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch profile");
        }

        setUser(data.user);
      } catch (error) {
        console.log("Profile error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) {
    return <div className="profile-page">Loading...</div>;
  }

  if (!user) {
    return <div className="profile-page">User not found</div>;
  }

  return (
    <div className="profile-page">
      <h2>My Profile</h2>
      <p className="profile-subtitle">
        Your account information
      </p>

      <div className="profile-card">
        <div className="profile-avatar">
          {user.name?.charAt(0).toUpperCase()}
        </div>

        <div className="profile-info">
          <div className="profile-row">
            <span>Name</span>
            <strong>{user.name}</strong>
          </div>

          <div className="profile-row">
            <span>User ID</span>
            <strong>{user._id}</strong>
          </div>

          <div className="profile-row">
            <span>Email</span>
            <strong>{user.email}</strong>
          </div>

          <div className="profile-row">
            <span>Account Type</span>
            <strong>Individual</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;