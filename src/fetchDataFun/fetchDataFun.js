import axios from "axios";

async function loadData() {
  try {
    const res = await axios.get("/data/data.json");
    return res.data;
  } catch (error) {
    return error;
  }
}

export { loadData };
