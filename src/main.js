import './style.css'
import { distributors } from './data.js'

function renderDistributors(data) {
  const rows = data.map(distributor => `
    <tr>
      <td>${distributor.name}</td>
      <td>${distributor.lastMonth}</td>
      <td>${distributor.forecast}</td>
      <td>${distributor.ytdAvg}</td>
    </tr>
  `).join('')

  return `
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Last Month</th>
          <th>Forecast</th>
          <th>YTD Avg</th>
        </tr>
      </thead>
      <tbody>
        ${rows}
      </tbody>
    </table>
  `
}

function renderSummary(data) {
  const totalLastMonth = data.reduce((acc, d) => acc + d.lastMonth, 0)
  const totalForecast = data.reduce((acc, d) => acc + d.forecast, 0)
  const totalYTD = data.reduce((acc, d) => acc + d.ytdAvg, 0)

  return `
    <div class="summary">
      <p><strong>Total Last Month:</strong> ${totalLastMonth}</p>
      <p><strong>Total Forecast:</strong> ${totalForecast}</p>
      <p><strong>Total YTD Average:</strong> ${totalYTD}</p>
    </div>
  `
}

document.querySelector('#app').innerHTML = `
  <div class="container">
    <h1>Augur Dashboard</h1>
    ${renderSummary(distributors)}
    ${renderDistributors(distributors)}
  </div>
`
