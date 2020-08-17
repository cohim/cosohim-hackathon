import axios from "axios"

// IE에서 axios 통신 결과 캐싱되는 현상 방지
axios.defaults.headers.common = {
    Pragma: "no-cache",
  };

const BACKEND_URL = "http://192.168.0.9:8000/makeweb/";

export const productListApi = axios.create({
    baseURL: `${BACKEND_URL}/ product`,
  });