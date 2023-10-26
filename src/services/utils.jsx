import api from "./api";

export const getItemTrainingSheet = async (id) => {
    try {
        const res = await api.get('/itemTrainingSheet/trainingSheet/'+id)
        return res
    } catch(err) {
        return err.message
    }
}