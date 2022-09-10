
export const formatError = (err) => {
    if (err && err.response && err.response.data && err.response.data.message) {
        return err.response.data.message;
    }
    return 'Something Went Wrong!'
}