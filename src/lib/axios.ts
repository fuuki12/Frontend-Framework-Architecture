import axios, { AxiosRequestConfig } from "axios";

export const fetchData = async (url: string) => {
  const config: AxiosRequestConfig = {
    method: "get",
    url,
  };

  try {
    const response = await axios(config);

    return response.data;
  } catch (error) {
    console.error("Error occurred while fetching data: ", error);
  }
};

interface Data {
  [key: string]: any;
}

export const postData = async (url: string, data: Data) => {
  const config: AxiosRequestConfig = {
    method: "post",
    url,
    data,
  };

  try {
    const response = await axios(config);

    return response.data;
  } catch (error) {
    console.error("Error occurred while posting data: ", error);
  }
};
