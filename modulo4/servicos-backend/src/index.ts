import axios from 'axios'
import { Address } from './types/types'

//Exercicio 1

const baseUrl = "https://viacep.com.br/ws"

export const getAddressInfo = async (zipcode: string): Promise<Address | null> => {

    try {
        const response = await axios.get(`${baseUrl}/${zipcode}/json/`);

        const address: Address = {
            Logradouro: response.data.logradouro,
            Bairro: response.data.bairro,
            Cidade: response.data.localidade,
            Estado: response.data.uf
        }
        
        return address;

    } catch (error) {
        console.error("Erro no serviço getAddressInfo: ", error.message)
        return null
    }
}

