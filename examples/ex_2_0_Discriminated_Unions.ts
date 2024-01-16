type SuccessResponse = {
    status: 'success'
    data: unknown
}
type ErrorResponse = {
    status: 'failure'
    error: {
        message: string
        code: string
    }
}
type ApiResponse = SuccessResponse | ErrorResponse

function processApiResponse(response: ApiResponse) {
    console.log(response.data) // <- ERROR. response might be of type `ErrorResponse`
    console.log(response.error.message) // <- ERROR. response might be of type `SuccessResponse`

    if (response.status === 'success') {
        console.log(response.data) // <- OK
        console.log(response.error.message) // <- ERROR. response is not `ErrorResponse`
    }
    if (response.status === 'failure') {
        console.log(response.data) // <- ERROR. response is not `SuccessResponse`
        console.log(response.error.message) // <- OK
    }
}
