import { sleep } from 'k6'
import http from 'k6/http'
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = {
  scenarios: {
    Scenario_1: {
      executor: 'constant-vus',
      gracefulStop: '1s',
      duration: '30s',
      vus: 1,
      exec: 'scenario_1',
    },
  },
}

export function handleSummary(data) {
  return {
    "summary.html": htmlReport(data),
  };
}
export function scenario_1() {
  let response

  // getdogid
  response = http.get('https://petstore.swagger.io/v2/pet/1000', {
    headers: {
      Accept: 'application/json',
    },
  })
  // Automatically added sleep
  sleep(5)
}
