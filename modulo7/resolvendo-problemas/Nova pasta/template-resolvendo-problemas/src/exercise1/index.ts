// ideia inicial

// função recebe uma string
// normarlizar a nossa string
// verifique se é palindromo  {
//      transformar em array
//      inverter o array
//      juntar em string novamente
//}
// comparar as duas palavras

// pseudo-código

// ajustaString (string) =>
// toLowerCase
// replace   => carateres especiais/ acentos      ; outro método: normalize
// returna a string normalizada

// checaPalindromo (string): booleano =>
//  => ajustaString
// split("")
// reverse()
// join("")
// return a comparação das duas strings

// código

const formatText = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[óöõô]/gi, "o")
    .replace(/[éèê]/gi, "e")
    .replace(/[íìïî]/gi, "i")
    .replace(/[áãàâ]/gi, "a")
    .replace(/[ùûúü]/gi, "u")
    .replace(/[\,:.´`" "]/gi, "");
    // normalize
};

const checkPalyndrome = (text: string): boolean => {
  const formatedText = formatText(text);
  const newString = formatedText.split("").reverse().join("");
  return newString === formatedText;
};

// testes
console.log("1", "expected true", checkPalyndrome("ana"));
console.log("2", "expected false", checkPalyndrome("chapéu"));
console.log("3", "expected true", checkPalyndrome("subi no ônibus"));
console.log("4", "expected true", checkPalyndrome("ôóôéeóôô"));
console.log(
  "5",
  "expected true",
  checkPalyndrome("A dama admirou o rim da amada")
);
