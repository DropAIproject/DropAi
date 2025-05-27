import axios from "axios";
import { Airdrop } from "../types";

export const getProjects = async (): Promise<Airdrop[]> => {
  try {
    const response = await axios.get<Airdrop[]>(
      "http://localhost:3000/api/airdrops"
    );
    console.log("response", response);

    return response.data;
  } catch (error) {
    console.error("Failed to fetch airdrops:", error);
    return [];
  }
};
