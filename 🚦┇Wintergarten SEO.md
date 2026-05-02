```dataviewjs
const data = await dv.io.load("β┇workbench/research/keywords-v3.json");
const keywords = JSON.parse(data);

keywords.sort((a, b) => b.avg_monthly_searches - a.avg_monthly_searches);

// 1. Create the Legend and Wrapper using a Raw HTML string
this.container.innerHTML = `
    <div style="display: flex; align-items: center; gap: 20px; margin-bottom: 20px; padding: 12px; background: rgba(255,255,255,0.05); border-radius: 8px; font-family: sans-serif;">
        <span style="font-weight: bold; color: #888; font-size: 13px;">WETTBEWERB:</span>
        <div style="display: flex; align-items: center; gap: 6px;">
            <div style="width: 14px; height: 14px; background-color: rgba(255, 99, 132, 1); border-radius: 3px;"></div>
            <span style="color: rgba(255, 99, 132, 1); font-weight: bold; font-size: 13px;">Hoch</span>
        </div>
        <div style="display: flex; align-items: center; gap: 6px;">
            <div style="width: 14px; height: 14px; background-color: rgba(255, 206, 86, 1); border-radius: 3px;"></div>
            <span style="color: rgba(255, 206, 86, 1); font-weight: bold; font-size: 13px;">Mittel</span>
        </div>
        <div style="display: flex; align-items: center; gap: 6px;">
            <div style="width: 14px; height: 14px; background-color: rgba(75, 192, 192, 1); border-radius: 3px;"></div>
            <span style="color: rgba(75, 192, 192, 1); font-weight: bold; font-size: 13px;">Niedrig</span>
        </div>
    </div>
    <div id="chart-target" style="height: 1400px; width: 100%;"></div>
`;

// 2. Map colors for the chart
const colors = {
    "High": "rgba(255, 99, 132, 1)",
    "Medium": "rgba(255, 206, 86, 1)",
    "Low": "rgba(75, 192, 192, 1)"
};

// 3. Setup Chart Data
const chartData = {
    type: 'bar',
    data: {
        labels: keywords.map(k => k.keyword),
        datasets: [{
            label: 'Suchanfragen',
            data: keywords.map(k => k.avg_monthly_searches),
            backgroundColor: keywords.map(k => colors[k.competition] || "grey"),
            borderWidth: 0,
            borderRadius: 4,
        }]
    },
    options: {
        indexAxis: 'y',
        maintainAspectRatio: false,
        responsive: true,
        scales: {
            x: { beginAtZero: true, grid: { color: "rgba(255,255,255,0.1)" } },
            y: { ticks: { autoSkip: false, font: { size: 12 }, color: "#ccc" }, grid: { display: false } }
        },
        plugins: { legend: { display: false } }
    }
}

// 4. Render into our new ID-targeted div
window.renderChart(chartData, this.container.querySelector('#chart-target'));
```
