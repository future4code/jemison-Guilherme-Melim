import { performPurchase } from "../src/function/funcUserSaldo"

describe('Teste para função do extrato do usuario', () =>{
    test("test maior valor da compra", ()=>{
        const user1 = {
            name: "guilherme",
            balance: 1200
        }
        return expect(performPurchase(user1, 200)).toEqual({"balance": 1000, "name": "guilherme"})
    })

    test("test igual valor da compra", ()=>{
        const user2= {
            name: "guilherme",
            balance: 1200
        }
        return expect(performPurchase(user2, 1200)).toEqual({"balance": 0, "name": "guilherme"})
    })

    test("test menor valor da compra", ()=>{
        const user3 = {
            name: "guilherme",
            balance: 1200
        }
        return expect(performPurchase(user3, 1400)).not.toEqual({ balance: 0})
    })
    
})

