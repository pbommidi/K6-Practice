import http from 'k6/http'
//writing ramup and rampdown
export let options = {
    stages: [
        { duration: '30s', target: 5 }, // run test for 30 sec with 5 users
        { duration: '20s', target: 3 }, // again run test for 20 sec with 3 users
        { duration: '10s', target: 2 } // again run test for 10 sec with 2 users

    ]
}
export default function () {
    http.get('https://petstore.swagger.io/');
}