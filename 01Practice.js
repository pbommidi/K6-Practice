import { sleep } from 'k6'
import http from 'k6/http'

export const options = {
//   ext: {
//     loadimpact: {
//       distribution: { 'amazon:us:ashburn': { loadZone: 'amazon:us:ashburn', percent: 100 } },
//       apm: [],
//     },
//   },
 // thresholds: {},
  scenarios: {
    Scenario_1: {
      executor: 'shared-iterations',
      gracefulStop: '30s',
      vus: 1,
      iterations: 1,
      maxDuration: '30s',
      exec: 'scenario_1',
    },
  },
}

export function scenario_1() {
  let response

  // 01-AddDog
  response = http.post(
    'https://petstore.swagger.io/v2/pet',
    '{\r\n  "id": 1010,\r\n  "category": {\r\n    "id": 0,\r\n    "name": "dogs1010"\r\n  },\r\n  "name": "doggie",\r\n  "photoUrls": ["string"],\r\n  "tags": [\r\n    {\r\n      "id": 0,\r\n      "name": "string"\r\n    }\r\n  ],\r\n  "status": "available"\r\n}\r\n',
    {
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  )
  console.log(response),

  // Automatically added sleep
  sleep(1)
}
