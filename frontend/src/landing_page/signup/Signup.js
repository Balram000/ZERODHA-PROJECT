import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      const response = await fetch(
        "/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Registration failed");
      }

      setMessage("Account created successfully!");

      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        fontFamily: "Inter, Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "430px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "32px",
            fontWeight: "500",
            color: "#424242",
            marginBottom: "10px",
          }}
        >
          Create your account
        </h1>

        <p
          style={{
            color: "#777",
            fontSize: "15px",
            marginBottom: "30px",
          }}
        >
          Start your investing journey with Zerodha
        </p>

        <div
          style={{
            border: "1px solid #e6e6e6",
            borderRadius: "8px",
            padding: "32px",
            textAlign: "left",
            boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
          }}
        >
          <form onSubmit={handleSubmit}>
            <label>Full name</label>

            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                boxSizing: "border-box",
                padding: "13px",
                marginTop: "8px",
                marginBottom: "20px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                fontSize: "14px",
              }}
            />

            <label>Email</label>

            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                boxSizing: "border-box",
                padding: "13px",
                marginTop: "8px",
                marginBottom: "20px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                fontSize: "14px",
              }}
            />

            <label>Password</label>

            <input
              type="password"
              name="password"
              placeholder="Minimum 6 characters"
              value={formData.password}
              onChange={handleChange}
              minLength={6}
              required
              style={{
                width: "100%",
                boxSizing: "border-box",
                padding: "13px",
                marginTop: "8px",
                marginBottom: "24px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                fontSize: "14px",
              }}
            />

            <button
              type="submit"
              disabled={loading}
              style={{
                width: "100%",
                padding: "13px",
                background: "#387ed1",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                fontSize: "15px",
                cursor: "pointer",
              }}
            >
              {loading ? "Creating account..." : "Sign up"}
            </button>
          </form>

          {message && (
            <p
              style={{
                textAlign: "center",
                marginTop: "18px",
                color: message.includes("success")
                  ? "#2e7d32"
                  : "#d32f2f",
                fontSize: "14px",
              }}
            >
              {message}
            </p>
          )}

          <p
            style={{
              textAlign: "center",
              marginTop: "22px",
              color: "#777",
              fontSize: "14px",
            }}
          >
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              style={{
                color: "#387ed1",
                cursor: "pointer",
                fontWeight: "500",
              }}
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
