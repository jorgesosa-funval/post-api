import instance from "."


export const login = async (body) => {
    try {
        const {data, status} = await instance.post('/auth/login', body);
        return {data, status}
    } catch (error) {
        throw error
    }
}

export const logout = async () => {
    try {
        const {data, status} = await instance.get('/auth/logout'); 
    } catch (error) {
        throw error
    }
}


