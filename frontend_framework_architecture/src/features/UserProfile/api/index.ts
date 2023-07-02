import { fetchData } from "@/lib/axios";

const userProfileApiCall = async () => {
  const responce = fetchData("v2/user/profile");
  return responce;
};

export default userProfileApiCall;
