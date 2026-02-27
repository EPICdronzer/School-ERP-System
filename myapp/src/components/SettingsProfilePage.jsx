import { useEffect, useState } from "react";
import { FaUserCircle, FaSave } from "react-icons/fa";

export default function SettingsProfilePage() {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    role: ""
  });

  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);

      setProfile({
        name: parsedUser.name || "",
        email: parsedUser.e4mail || parsedUser.email || "",
        role: parsedUser.role || ""
      });
    }
  }, []);

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    const updatedUser = {
      ...storedUser,
      name: profile.name,
      e4mail: profile.email // keeping your existing key structure
    };

    localStorage.setItem("user", JSON.stringify(updatedUser));
    setSuccess(true);

    setTimeout(() => setSuccess(false), 2000);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">

      {/* HEADER */}
      <div>
        <div className="text-2xl font-semibold flex items-center gap-3">
          <FaUserCircle className="text-blue-700" />
          Profile Settings
        </div>
        <p className="text-gray-500 mt-1">
          Manage your account information
        </p>
      </div>

      {/* PROFILE CARD */}
      <div className="bg-white !rounded-2xl shadow-md border p-8">

        {/* Profile Info */}
        <div className="mb-8">
          <div className="text-lg font-semibold">{profile.name}</div>
          <div className="text-sm text-gray-500 capitalize">
            Role: {profile.role}
          </div>
        </div>

        {/* FORM */}
        <div className="grid md:grid-cols-2 gap-6">

          <div>
            <label className="block text-sm font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
              className="w-full border !rounded-xl px-3 py-2 focus:ring-2 focus:ring-blue-700 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              className="w-full border !rounded-xl px-3 py-2 focus:ring-2 focus:ring-blue-700 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Role
            </label>
            <input
              type="text"
              value={profile.role}
              disabled
              className="w-full border !rounded-xl px-3 py-2 bg-gray-100 cursor-not-allowed"
            />
          </div>

        </div>

        {/* SAVE BUTTON */}
        <div className="mt-8 text-right">
          <button
            onClick={handleSave}
            className="bg-blue-700 text-white px-6 py-2 !rounded-xl hover:bg-blue-600 transition flex items-center gap-2"
          >
            <FaSave />
            Save Changes
          </button>
        </div>

        {success && (
          <div className="mt-4 text-green-600 font-medium">
            Profile updated successfully!
          </div>
        )}
      </div>
    </div>
  );
}