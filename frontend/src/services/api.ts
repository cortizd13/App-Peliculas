import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.Backend_url ?? 'http://localhost:3000',
  headers: {
    'Content-Type' : 'application/json'
  }
})