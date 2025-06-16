const URL="http://localhost:9000"

export const loginAPI = async (login, senha)=>{

    let headersList = {
        "Accept": "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        "Content-Type": "application/json"
        }

        let bodyContent = JSON.stringify({
        "username":`${login}`,
        "password":`${senha}`
        });

        console.log(bodyContent)

        let response = await fetch(`${URL}/auth/login`, { 
        method: "POST",
        body: bodyContent,
        headers: headersList
        });
        console.log("oi",response)

        if (response.status == 401){
            return null
        }

        let data = await response.text();
        console.log(data);
        return  JSON.parse(data)
}


export const buscaUserAPI = async (login, token)=>{

    let headersList = {
        "Accept": "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
        }
        let response = await fetch(`${URL}/users`, { 
        method: "GET",
        headers: headersList
        });

        let usuarios = JSON.parse( await response.text() );

        return  usuarios.filter(u => u.username == login)


}

export const saveAnimalAPI = async (form, token)=>{
    let headersList = {
    "Accept": "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    "Authorization": `Bearer ${token}`,
    "Content-Type": "application/json"
    }

    // let bodyContent = JSON.stringify({
    // "nome":"Duck",
    // "tipo":"ze@123",
    // "dono":1,
    // "raca":"vira lata"
    // });

    let response = await fetch(`${URL}/animal`, { 
        method: "POST",
        body: JSON.stringify(form),
        headers: headersList
    });

    return await response.text();

}

export const getAllAnimais = async (idUser, nome, token)=>{
    let headersList = {
    "Accept": "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    "Authorization": `Bearer ${token}`
    }

    let response = await fetch(`${URL}/animal`, { 
    method: "GET",
    headers: headersList
    });

    let data = ( await response.json()) ;
    console.log( data );
    let animals = data.filter( a => a.dono == idUser)
    console.log( animals );

    let animaisTratados = animals.map(a => {
        return {
           "nome": a.nome, 
           "tipo": (a.tipo==1)?"Cachorro":"Gato",
           "dono": nome,
           "raca": a.raca
        }
    })
    console.log( animaisTratados );

    return animaisTratados

}

