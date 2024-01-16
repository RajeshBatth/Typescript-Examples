// this is very basic

function setState(state: string | ((oldState: string) => string)) {
    console.log("state.length", state.toUpperCase()) // --> ERROR: state is not necesarily a string
    state("old_val") // --> ERROR: state is not necesarily a function

    if (typeof state === 'string') {
        console.log("state.length", state.toUpperCase()) // works now. Type is narrowed to string
    }
    if (typeof state === 'function') {
        console.log("state.length", state("old_val")) // works now. Type is narrowed to function
    }
}

