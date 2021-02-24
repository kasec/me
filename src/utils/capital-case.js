/**
 * @description send a text and return a string with capital case
 * @example text = "something" => "Something"
 */

export const capitalCase = (text) => { 
    const [ firstLetter, ...continueLetters ] = text.split("")

    return [ firstLetter.toUpperCase(), ...continueLetters ].join("")
}
