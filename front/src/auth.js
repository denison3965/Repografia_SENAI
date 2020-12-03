
import axios from 'axios'

export const isAuthenticated = async() => {
    

    let retorno = false

    await axios.get("http://localhost:3000/v1/teste",  {
        method: 'GET',
        headers: {'X-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjA3MDI5MjMzLCJleHAiOjE2MDcwMjk1MzN9.iw2eMmzb3FN6emuva8TElEdiOcFXhpoRDPKR4wYMWKI'}
    })
    .then ((res) => {

        return res

    }).then((res) => {

        console.log(res.data[0].auth)
         
        if(res.data[0].auth) {
            console.log("aqui e true")
            retorno = true
        }else{
            console.log("aqui e false")
            retorno = false
        }

    }) .catch((err) => {

        console.log('token expirado ou token errado')
        return false
    })


    console.log(`o retorno esta com ${retorno}`)
    return retorno
 

 

}

// export const isAuthenticated = () => false
