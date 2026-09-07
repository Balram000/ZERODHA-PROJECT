import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
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
        "http://localhost:3002/api/auth/login",
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
        throw new Error(data.message || "Login failed");
      }

      // Save JWT
      localStorage.setItem("token", data.token);

      // Save user
      localStorage.setItem("user", JSON.stringify(data.user));

      setMessage("Login successful!");

      setTimeout(() => {
        navigate("/dashboard");
      }, 700);
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
          Welcome back
        </h1>

        <p
          style={{
            color: "#777",
            fontSize: "15px",
            marginBottom: "30px",
          }}
        >
          Login to your Zerodha account
        </p>

        <div
          style={{
            border: "1px solid #e6e6e6",
            borderRadius: "8px",
            padding: "32px",
            textAlign: "left",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.04)",
          }}
        >
          <form onSubmit={handleSubmit}>
            <label
              style={{
                display: "block",
                color: "#424242",
                fontSize: "14px",
                marginBottom: "8px",
              }}
            >
              Email
            </label>

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
                marginBottom: "20px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                fontSize: "14px",
                outline: "none",
              }}
            />

            <label
              style={{
                display: "block",
                color: "#424242",
                fontSize: "14px",
                marginBottom: "8px",
              }}
            >
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                boxSizing: "border-box",
                padding: "13px",
                marginBottom: "24px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                fontSize: "14px",
                outline: "none",
              }}
            />

            <button
              type="submit"
              disabled={loading}
              style={{
                width: "100%",
                padding: "13px",
                background: loading ? "#8db9e8" : "#387ed1",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                fontSize: "15px",
                fontWeight: "500",
                cursor: loading ? "not-allowed" : "pointer",
              }}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          {message && (
            <p
              style={{
                textAlign: "center",
                marginTop: "18px",
                color: message.includes("successful")
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
            Don't have an account?{" "}
            <span
              onClick={() => navigate("/signup")}
              style={{
                color: "#387ed1",
                cursor: "pointer",
                fontWeight: "500",
              }}
            >
              Sign up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
