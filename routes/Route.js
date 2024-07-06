import axios from "axios";

const API_KEY = import.meta.env.VITE_CLERK_API_KEY;

const axiosClient = axios.create({
  baseURL: "http://localhost:1337/api",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
});

const getUserResume = async (userEmail) => {
  try {
    const response = await axiosClient.get("/resume-users", {
      params: {
        filters: {
          userEmail: {
            $eq: userEmail,
          },
        },
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching resume: ${error.message}`);
    throw new Error(`Error fetching resume: ${error.message}`);
  }
};

export { getUserResume };
export default { getUserResume };
