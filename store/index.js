import { vuexfireMutations } from 'vuexfire'

export const mutations = {
    // このMutationsは、rootのstore、index.jsに作らないといけない
    ...vuexfireMutations
}