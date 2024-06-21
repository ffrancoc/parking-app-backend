

export const OkResponse = (data: any) => {
    return {
        status: 200,
        data: data
    }
}

export const NotFoundResponse = {
    status: 404,
    message: 'Not Found'
}

export const BadRequestResponse = {
    status: 400,
    message: 'Bad Request'
}

export const InternalErrorResponse = {
    status: 500,
    message: 'Internal Server Error'
}