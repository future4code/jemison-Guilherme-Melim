const  edit = (strA: string, strB: string): boolean => {

    if ((strA.length - strB.length) > 1) 
    return false

    if (strA.length > strB.length)
    return strA.includes(strB)

    if (strB.length > strA.length) 
    return strB.includes(strA)


    let difference = 0
    for (let i = 0; i < strA.length; i++){
        if (strA[i] !== strB[i]) difference++
    }
    return difference === 1
}

const stringCompression = (input: string) => {
    const sub = []
    let lastChar = input[0]
    let charCount = 0
  
    for (const char of input) {
      if (char !== lastChar) {
        sub.push(lastChar + charCount)
        lastChar = char
        charCount = 0
      }
      charCount++
    }
  
    sub.push(lastChar + charCount)
    let result = ""
    for (const key of sub) {
      result += key + " "
    }
  
    return result.length > input.length ? input : result
  };

// testes

console.log("1", "expected false", edit("banana", "bananiiii"))
console.log("2", "expected true", edit("banana", "bananai"))
console.log("3", "expected true", edit("panana", "banana"))
console.log("4", "expected a3 e3 i3", stringCompression("aaaeeeiii"))
console.log("5", "expected aprender", stringCompression("aprender"))