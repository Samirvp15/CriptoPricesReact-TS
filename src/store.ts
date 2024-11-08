import { create } from 'zustand';
import { devtools } from 'zustand/middleware'

import { Cryptocurrency, CryptoPrice, Pair } from './types';
import { getCryptos, fetchCurrentCryptoPrice } from './services/CryptoService';


type CryptoStoreTypes = {
    cryptocurrencies: Cryptocurrency[]
    result: CryptoPrice
    //loading: boolean
    fetchCryptos: () => Promise<void>
    fetchData: (pair: Pair) => Promise<void>
}





export const useCryptoStore = create<CryptoStoreTypes>()(devtools((set) => ({

    cryptocurrencies: [],
    result: {} as CryptoPrice,
    fetchCryptos: async () => {
        const cryptocurrencies = await getCryptos()
        set(() => ({
            cryptocurrencies
        }))

    },
    fetchData: async (pair) => {
        
        const result = await fetchCurrentCryptoPrice(pair)
        set(() => ({
            result,
        }))

    }
})))