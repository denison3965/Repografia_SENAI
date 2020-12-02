export const isAuthenticated = () => {

    const headers = new Headers()

    headers.append('x-access-token', "qualquerbaboseira")
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Origin','http://localhost:3000/v1');

    fetch ("http://localhost:3000/v1/teste",  {
        method: 'GET',
        headers: headers
})
    .then ((res) => {
        console.log(res);
    }) 
}
