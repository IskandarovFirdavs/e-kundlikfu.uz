import fetch from "node-fetch";

export default async function handler(req, res) {
  const { path } = req.query; // array
  const endpoint = "/" + path.join("/"); // /users/login/ kabi
  const url = `https://api.e-kundalikfu.uz${endpoint}`;

  try {
    const response = await fetch(url, {
      method: req.method,
      headers: {
        "Content-Type": req.headers["content-type"] || "application/json",
        Authorization: req.headers["authorization"] || "",
      },
      body: req.method !== "GET" ? req.body : undefined,
    });

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
