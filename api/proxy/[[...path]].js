import fetch from "node-fetch";

export default async function handler(req, res) {
  const { path } = req.query; // array, masalan ["users","login"]
  const endpoint = "/" + path.join("/"); // /users/login
  const url = `https://api.e-kundalikfu.uz${endpoint}`;

  let body;
  if (req.method !== "GET") {
    try {
      body = await new Promise((resolve, reject) => {
        let data = "";
        req.on("data", (chunk) => {
          data += chunk;
        });
        req.on("end", () => resolve(data));
        req.on("error", (err) => reject(err));
      });
    } catch (err) {
      return res.status(400).json({ error: "Body parse error" });
    }
  }

  try {
    const response = await fetch(url, {
      method: req.method,
      headers: {
        "Content-Type": req.headers["content-type"] || "application/json",
        Authorization: req.headers["authorization"] || "",
      },
      body: req.method !== "GET" ? body : undefined,
    });

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
