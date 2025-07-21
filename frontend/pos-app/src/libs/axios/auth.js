import instance from "."


export const login = async (body) => {
    try {
        const {data, status} = instance.post('/auth/login', body);
        return {data, status}
    } catch (error) {
        throw error
    }
}



