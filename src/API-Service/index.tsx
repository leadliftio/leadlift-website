import axios from "axios";

const instance = axios.create({
  baseURL: "https://getform.io/f",
  headers: {
    // "X-Auth-Token": "api-key 2ut5pg0kk3zs6v8851012zvl174nkmzb",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export const postGetresponseRequest = async (data: any) => {
  const response = await fetch(
    "https://getform.io/f/2bf58eab-5d0c-41ed-bb45-b586dfe9b0c1",
    {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    }
  );
  console.log(response);
  // return response;
};
