const axios = require("axios").default;

const auth = process.env.GITHUB_TOKEN;
const options = { headers: { Authorization: `token ${auth}` } };

export const get = async (url) => {
  try {
    const { data } = await axios.get(url, options);
    return data;
  } catch (error) {
    console.log({ error });
  }
};

export const post = async (url, body) => {
  try {
    const { data } = await axios.post(url, body, options);
    return data;
  } catch (error) {
    console.log({ error });
  }
};
