export const getPokemons = async() => {
    let response = {
        isSuccess: null,
        results: [],
    }

    try {
        const result = await fetch('https://pokeapi.co/api/v2/pokemon');
        const data = await result.json()
        response.isSuccess = true;
        response.results = data.results
    } catch (error) {
        response.isSuccess = false;        
    }

    return response
}