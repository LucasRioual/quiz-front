// gameService.js

const BASE_URL = "http://localhost:8080";

export const createGame = async (userName) => {
    try {
        const response = await fetch(`${BASE_URL}/addnewsession?playerName=${userName}`);
        const result = await response.text(); 
        return result;
    }
    catch (e) {
        console.log("Connexion à l'API impossible", e);
    }
  
};


export const joinGame = async (gameCode, userName) => {
    try {
        const response = await fetch(`${BASE_URL}/rejoindresession?playerName=${userName}&CodeSession=${gameCode}`);
        const result = await response.json(); 
        return result;
    }
    catch (e) {
        console.log("Connexion à l'API impossible", e);
    }
  
};
