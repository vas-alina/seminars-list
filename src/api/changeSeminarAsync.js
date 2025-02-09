import { API_URL } from "../constants/apiConstants";

export const changeSeminar = async (id, newData) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newData),
    });
    if (!response.ok) {
        throw new Error('Ошибка изменения мероприятия');
    }
    return response.json();
};