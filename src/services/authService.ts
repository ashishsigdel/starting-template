import { myAxios } from "./apiService";

export const login = async (formData: any) => {
  try {
    const response = await myAxios.post("/auth/login", {
      email: formData.email,
      password: formData.password,
    });
    return response.data;
  } catch (error: any) {
    throw error;
  }
};
