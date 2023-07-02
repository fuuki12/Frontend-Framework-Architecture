import { useState, useEffect } from "react";

const useUserProfileHook = () => {
  const [state, setState] = useState(false);

  useEffect(() => {
    setState(true);
  }, []);

  return state;
};

export default useUserProfileHook;
