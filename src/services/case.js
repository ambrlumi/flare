import axios from "axios";
import config from "../config";
const { BLAZE_URL } = config;

const ti = axios.create({ baseURL: BLAZE_URL });

const cases = () =>
  new Promise(async (resolve, reject) => {
    try {
      const { data } = await ti.get("/tags");
      const { cases } = data.data;

      resolve(cases);
    } catch (e) {
      reject(e);
    }
  });

export default { cases };
