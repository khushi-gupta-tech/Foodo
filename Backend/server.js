import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

// Route 1: Restaurant list
app.get("/api/restaurants", async (req, res) => {
  try {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7041&lng=77.1025&page_type=DESKTOP_WEB_LISTING",
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36",
          "Accept": "application/json, text/plain, */*",
          "Accept-Language": "en-US,en;q=0.9",
        },
      }
    );

    if (!response.ok) throw new Error("Swiggy API error");

    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error("❌ Error fetching restaurants:", err.message);
    res.status(500).json({ error: "Failed to fetch restaurants" });
  }
});

//  Route 2: Restaurant menu
app.get("/api/restaurants/menu/:resId", async (req, res) => {
  const { resId } = req.params;

  try {
    const response = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7041&lng=77.1025&restaurantId=${resId}`,
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36",
          "Accept": "application/json, text/plain, */*",
          "Accept-Language": "en-US,en;q=0.9",
        },
      }
    );

    if (!response.ok) throw new Error("Swiggy Menu API error");

    const data = await response.json();
    console.log(`✅ Menu fetched for restaurant ${resId}`);
    res.json(data);
  } catch (err) {
    console.error(`❌ Error fetching menu for ${resId}:`, err.message);
    res.status(500).json({ error: "Failed to fetch restaurant menu" });
  }
});

// ✅ Always put app.listen LAST
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Backend running at http://localhost:${PORT}`);
});
