function jsonParse(jsonStr: string): unknown {
    return JSON.parse(jsonStr)
}
function jsonParse_UNSAFE(jsonStr: string): any {
    return JSON.parse(jsonStr)
}

function main() {
    const anyResult = jsonParse_UNSAFE(`{"name": "rajesh"}`)
    console.log(anyResult.name) // <-- OK. But unsafe

    const unknownResult = jsonParse(`{"name": "rajesh"}`)
    console.log(unknownResult.name) // <-- Error. result is unknown
    /*
    * unknown =
    *   | null
    *   | undefined
    *   | string
    *   | number
    *   | boolean
    *   | number
    *   | function
    *   | object
    *
    * */

    //region Fix for unknown

    // let's eliminate null and undefined and make sure result is an object

    // noinspection PointlessBooleanExpressionJS
    if (typeof unknownResult !== 'undefined'
        && unknownResult !== null
        && typeof unknownResult === 'object') {

        console.log(unknownResult.name) // <-- Error. result is OK, but not sure of name

        if('name' in unknownResult && typeof unknownResult.name === 'string'){
            console.log(unknownResult.name) // <-- OK now
        }
    }
    //endregion
}
