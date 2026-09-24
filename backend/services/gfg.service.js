const getGFGStats = async (username) => {
    try {
        const response = await fetch(
            `https://gfg-stats.tashif.codes/${username}`
        );

        if (!response.ok) {
            throw new Error(
                `GFG API request failed: ${response.status}`
            );
        }

        const data = await response.json();

        return {
            username,
            totalSolved: data.totalSolved ?? 0,
            activeDays: data.totalActiveDays ?? 0,
            contests: data.totalContests ?? 0,
            currentRating: data.currentRating ?? 0,
            maxRating: data.maxRating ?? 0,
            rank: data.rank ?? 0,
            badges: data.badgesCount ?? 0
        };
    } catch (error) {
        console.error("GFG Stats Error:", error);
        throw error;
    }
};

export default getGFGStats;