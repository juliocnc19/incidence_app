import axios from "axios";
import { EXPO_PUBLIC_API_URL } from "./environments";

const url = EXPO_PUBLIC_API_URL as string

export const api = axios.create({
  baseURL:url
})

