import { Route, Routes } from "react-router-dom";
import UserProfileComponent from "../components/UserProfileComponent";

const UserProfileRoutes = () => (
  <Routes>
    <Route path="/user-profile" Component={UserProfileComponent} />
  </Routes>
);

export default UserProfileRoutes;
