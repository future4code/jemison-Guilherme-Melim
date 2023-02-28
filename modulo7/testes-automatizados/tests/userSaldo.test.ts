import { performPurchase } from "../src/function/funcUserSaldo"

describe('Teste para função do extrato do usuario', () =>{
    const user1 = {
        name: "guilherme",
        balance: 1200
    }
    test("test maior valor da compra", ()=>{
        return expect(performPurchase(user1, 200)).toEqual({"balance": 1000, "name": "guilherme"})
    })

    test("test igual valor da compra", ()=>{
        return expect(performPurchase(user1, 1200)).toEqual({"balance": 0, "name": "guilherme"})
    })

    test("test menor valor da compra", ()=>{
        return expect(performPurchase(user1, 1400)).not.toEqual({ balance: 0})
    })
    
})

