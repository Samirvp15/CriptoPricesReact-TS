import { create } from 'zustand';
import { devtools } from 'zustand/middleware'

import { Cryptocurrency } from './types';
import { getCryptos } from './services/CryptoService';


type CryptoStoreTypes = {
    cryptocurrencies: Cryptocurrency[]
    //result: CryptoPrice
    //loading: boolean
    fetchCryptos: () => Promise<void>
    //fetchData: (pair: Pair) => Promise<void>
}





export const useCryptoStore = create<CryptoStoreTypes>()(devtools((set) => ({

    cryptocurrencies: [],

    fetchCryptos: async () => {
        const cryptocurrencies = await getCryptos()
        set(() => ({
            cryptocurrencies
        }))

    }
})))