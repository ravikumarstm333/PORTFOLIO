const getLeetCodeStats = async (username) => {
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
                username
            }
        })
    });

    if (!response.ok) {
        throw new Error("LeetCode API request failed");
    }

    const data = await response.json();

    if (!data.data?.matchedUser) {
        throw new Error("LeetCode user not found");
    }

    const stats =
        data.data.matchedUser.submitStatsGlobal.acSubmissionNum;

    const getCount = (difficulty) => {
        const item = stats.find(
            (item) => item.difficulty === difficulty
        );

        return item ? item.count : 0;
    };

    return {
        username: data.data.matchedUser.username,
        total: getCount("All"),
        easy: getCount("Easy"),
        medium: getCount("Medium"),
        hard: getCount("Hard")
    };
};

export default getLeetCodeStats;