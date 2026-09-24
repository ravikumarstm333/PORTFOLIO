import { useEffect, useState } from "react";
function Stats() {
    const [stateData, setStateData] = useState({});
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_BASE_URL}/api/v1/stats/data`)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`Http Error : ${res.status}`);
                }
                return res.json();
            })
            .then(data => {
                setStateData(data.data);
            })
            .catch((error) => {
                console.error("state-data Error:", error);
            });
    }, []);

    console.log(stateData)
    return (
        <section id="stats">
            {Object.keys(stateData).length === 0 ? <div id="stats-loading">Loading..</div> :
                <div className="stats-row">
                    <div className="stat">
                        <div className="num">{stateData.cgpa}+</div>
                        <div className="lbl">CGPA</div>
                    </div>
                    <div className="stat">
                        <div className="num">{stateData.projects}+</div>
                        <div className="lbl">PROJECTS</div>
                    </div>
                    <div className="stat">
                        <div className="num">{stateData.technologies}+</div>
                        <div className="lbl">TECHNOLOGIES</div>
                    </div>
                    <div className="stat">
                        <div className="num">{stateData?.leetcode?.total}+</div>
                        <div className="lbl">CODING PROBLEMS</div>
                    </div>
                </div>}
        </section>
    )

}
export default Stats;