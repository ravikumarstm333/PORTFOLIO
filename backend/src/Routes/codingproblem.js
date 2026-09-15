import express from "express";

const router = express.Router();

router.get("/leetcode", async (req, res) => {
    try {
        const query = `
            query getUserProfile($username: String!) {
                matchedUser(username: $username) {
                    username
                    submitStatsGlobal {
                        acSubmissionNum {
                            difficulty
                            count
                        }
                    }
                }
            }
        `;

        const response = await fetch("https://leetcode.com/graphql", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "User-Agent": "Mozilla/5.0"
            },
            body: JSON.stringify({
                query,
                variables: {
                    username: "ravikumarstm333"
                }
            })
        });

        const data = await response.json();

        const stats =
            data.data.matchedUser.submitStatsGlobal.acSubmissionNum;

        const result = {
            username: data.data.matchedUser.username,
            total: stats.find(item => item.difficulty === "All").count,
            easy: stats.find(item => item.difficulty === "Easy").count,
            medium: stats.find(item => item.difficulty === "Medium").count,
            hard: stats.find(item => item.difficulty === "Hard").count
        };
        console.log(result)
        res.json(result);

    } catch (error) {
        console.error("LeetCode Error:", error.message);

        res.status(500).json({
            error: error.message
        });
    }
});


router.get("/geeksforgeeks", (req, res) => {
    res.json({
        message: "GeeksforGeeks working"
    });
});


export default router;