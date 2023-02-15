import CONFIG from '../../config/config'

const token = localStorage.getItem('id_token')

export const unprotectedGetRequest = async (apiEndpoint: string) => {
  const res = await fetch(`${CONFIG.api}/${apiEndpoint}`)
  return res.json()
}

export const unprotectedPostRequest = async (
  apiEndpoint: string,
  body: any
) => {
  console.log(body)
  const res = await fetch(`${CONFIG.api}/${apiEndpoint}`, {
    headers: {
      'Content-type':'application/json',
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
    },
    method: 'POST',
    body: JSON.stringify(body)
  })

  return res.json()
}
