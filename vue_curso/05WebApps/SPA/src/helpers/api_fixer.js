import axios from 'axios'

const fixerUrl = 'http://api.fixer.io/latest'

export function getRates(base) {
    return axios.get(fixerUrl, {
            params: {
                base
            }
        })
        .then(res => {
            const { data } = res,
            currencyList = []

            currencyList.push({
                name: data.base,
                value: 1
            })
            for (let rate in data.rates) {
                currencyList.push({
                    name: rate,
                    value: data.rates[rate]
                })
            }
            return currencyList
        })
}

export function convertRates(base, target) {
    return axios.get(fixerUrl, {
        params: {
            base: base,
            simbols: target
        }
    }).then(res => {
        const { data } = res,
        currencyList = []
        return data.rates[target]
    })
}