import { API_URL } from "../constants/apiConstants";

export const deleteSeminar = async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        throw new Error('Ошибка удаления мероприятия');
    }
    return response.json();
};