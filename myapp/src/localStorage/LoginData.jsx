import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginData() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      alert("No user found. Please sign up.");
      return;
    }

    if (
      formData.email === storedUser.email &&
      formData.password === storedUser.password
    ) {
      alert(`Login successful as ${storedUser.role}`);

      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("role", storedUser.role);

      if (storedUser.role === "admin") navigate("/Home");
      else if (storedUser.role === "teacher") navigate("/Home");
      else navigate("/Home");

    } else {
      alert("Invalid credentials");
    }
  };

  return { formData, handleChange, handleLogin };
}

export default LoginData;
