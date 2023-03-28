import { sleep } from 'k6'
import http from 'k6/http'

export const options = {
  scenarios: {
    Scenario_1: {
      executor: 'constant-vus',
      gracefulStop: '10s',
      duration: '2m',
      vus: 1,
      exec: 'scenario_1',
    },
  },
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
