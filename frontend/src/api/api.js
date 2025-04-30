import axios from "axios";

const ENV_EMAIL = import.meta.env.VITE_TEST_TEST_USER_EMAIL;
const ENV_PASSWORD= import.meta.env.VITE_TEST_TEST_USER_PASSWORD;

export const loginUser = async (email, password) => {
  try {
    // Validate environment variables
    if (!ENV_EMAIL || !ENV_PASSWORD) {
      throw new Error("Environment variables not configured");
    }

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Mock user object
    const user = {
      email: ENV_EMAIL,
      name: "Test User" // You might want to add VITE_TEST_USER_NAME to env vars
    };

    if (email === ENV_EMAIL && password === ENV_PASSWORD) {
      return { data: user };
    }
    throw new Error("Invalid Credentials");
  } catch (error) {
    throw error;
  }
};
