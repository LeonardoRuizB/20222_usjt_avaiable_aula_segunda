//dotemv
require('dotenv').config()
const axios = require ('axios')
const appid = process.env.appid

const q = 'Sao Paulo'

//Metric celsius
//Imperail fazhnheit
const units = 'metric'

const lang = 'pt_BR'

const cnt = 10

const base_url = 'https://api.openweathermap.org/data/2.5/forecast'

const url = `${base_url}?q=${q}&units=${units}&lang=${lang}&cnt=${cnt}&appid=${appid}`

const p = axios.get(url)

p
.then((res) => {
  console.log(res.data)
  return res.data
})

axios
    .get(url)
    .then((res) => {
        //Mostra o resultado e devolve somente a parte de interesse
        console.log(res)
        return res.data
    })
    .then((res) => {
        //mostra o total e devolve o resultado
        console.log(res.cnt)
        return res
    })
    .then((res) => {
        //devolve somente a lista de previsões
        console.log("aqui", res)
        return res['list']
    })
    .then((res) => {
        //para cada resultado, mostra algumas informações
        for(let previsao of res)
        console.log(`
            ${new Date(previsao.dt * 1000).toLocaleString()},
            ${'Min: ' + previsao.main.temp_min}\u00B0C,
            ${'Max: ' + previsao.main.temp_max}\u00B0C,
            ${'Umd: ' + previsao.main.humidity}%
            ${previsao.weather[0].description}
        `)
    })
