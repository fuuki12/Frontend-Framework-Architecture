import { fetchData } from "@/lib/axios";
import { useQuery } from "react-query";

import { UserProfile } from "../types";

export const getUsers = (): Promise<UserProfile[]> => {
  return fetchData(`v2/users`);
};

type QueryFnType = typeof getUsers;

type UseUsersOptions = {
  config?: any;
};

export const useUsers = ({ config }: UseUsersOptions = {}) => {
  return useQuery<QueryFnType>({
    ...config,
    queryKey: ["users"],
    queryFn: () => getUsers(),
  });
};
