module.exports = function toReadable (number) {
    //if (number === 0 ) return 'zero'
    number = number.toString()
    const ONES = {'0':'zero','1':'one','2':'two', '3':'three', '4':'four',
    '5':'five', '6':'six', '7':'seven', '8':'eight',
    '9':'nine'}

    const TEENS = {'10':'ten', '11':'eleven', '12':'twelve', '13':'thirteen',
                   '14':'fourteen','15':'fifteen', '16':'sixteen','17':'seventeen',
                   '18':'eighteen','19':'nineteen'
    }

    const TENS = {'10':'ten', '20':'twenty', '30':'thirty', '40':'forty',
                  '50':'fifty', '60':'sixty', '70':'seventy', '80':'eighty',
                  '90':'ninety'

    }

    if (ONES[number] !== undefined) return ONES[number]
    if (TEENS[number] !== undefined) return TEENS[number]
    if (TENS[number] !== undefined) return TENS[number]
    if (number.length == 2) {
        return `${TENS[number.slice(0,1) * 10]} ${ONES[number.slice(-1)]}`
    } else if (number.length == 3) {
        if (number.slice(-1) === '0' && number[1] === '0') {
            return `${ONES[number.slice(0,1)]} hundred`
        }
        else if (number[1] === '0' && number.slice(-1) !== '0') {
            return `${ONES[number.slice(0,1)]} hundred ${ONES[number.slice(-1)]}`
        } else {
            return `${ONES[number.slice(0,1)]} hundred ` + toReadable(number.slice(1))
        }
    }
}
