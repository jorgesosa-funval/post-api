import instance from ".";

export const profile =async  ()=>{
  try {
    const {data} = await instance.get('/users/profile'); 
    return data
  } catch (error) {
    throw error
  }   
}