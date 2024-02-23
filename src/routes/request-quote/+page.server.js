// Since we are going to be hitting the API, we want the server to handle this
// so we don't reveal the endpoint or any API_keys to the client.
export const load = async () => {
    return {
        myData: "Testing:: will be removed with real data once API is complete",
    }
}