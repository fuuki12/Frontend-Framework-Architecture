import React, { useEffect, useState } from "react";
import { getUsers } from "../api/getUser";
import { UserProfile } from "../types";

const UserProfileComponent = () => {
  const [profileData, setProfileData] = useState<UserProfile[] | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profile = await getUsers();
        setProfileData(profile);
      } catch (error) {
        console.error("Failed to fetch user profiles", error);
      }
    };

    fetchProfile();
  }, []);

  if (!profileData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {profileData.map((userProfile: UserProfile) => (
        <div
          key={userProfile.email}
          className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4"
        >
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                className="h-48 w-full object-cover md:w-48"
                src={userProfile.email}
                alt={userProfile.name}
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                {userProfile.name}
              </div>
              <a href={`mailto:${userProfile.email}`} className="text-blue-600">
                {userProfile.email}
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default UserProfileComponent;
