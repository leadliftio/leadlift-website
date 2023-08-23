import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.getresponse.com/v3",
  headers: {
    "X-Auth-Token": "api-key 2ut5pg0kk3zs6v8851012zvl174nkmzb",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  withCredentials: false,
});

export const postGetresponseRequest = async (data: any) => {
  const { data: response } = await instance.post(
    `/${process.env.REACT_APP_TENANT_ID}/v1/Transactions/${data.paymentGatewayReferenceNumber}/verifications`,
    data
  );
  return response;
};
