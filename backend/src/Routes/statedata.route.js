import express from "express";
import getGFGStats from "../../services/gfg.service.js";
import getLeetCodeStats from "../../services/leetcode.service.js";

const router = express.Router();

router.get("/data", async (req, res) => {
    try {
        const [leetcodeResult, gfgResult] = await Promise.allSettled([
            getLeetCodeStats("ravikumarstm333"),
            getGFGStats("ravikumauhjj")
        ]);

        const result = {
            leetcode:
                leetcodeResult.status === "fulfilled"
                    ? leetcodeResult.value
                    : null,

            geeksforgeeks:
                gfgResult.status === "fulfilled"
                    ? gfgResult.value
                    : null,

            cgpa: 8.9,
            projects: 10,
            technologies: 15
        };

        if (leetcodeResult.status === "rejected") {
            console.error("LeetCode error:", leetcodeResult.reason);
        }

        if (gfgResult.status === "rejected") {
            console.error("GFG error:", gfgResult.reason);
        }

        res.status(200).json({
            success: true,
            data: result
        });

    } catch (error) {
        console.error("Portfolio data error:", error);

        res.status(500).json({
            success: false,
            message: "Failed to fetch portfolio data"
        });
    }
});


export default router;