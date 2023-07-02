import { useState } from "react";

export const useForm = <T extends { [key: string]: any }>(initialState: T) => {
  const [values, setValues] = useState<T>(initialState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return { values, handleChange };
};
