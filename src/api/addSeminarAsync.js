import { API_URL } from "../constants/apiConstants";

export const addSeminar = async (seminar) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json;charset=utf-8' },
        body: JSON.stringify(seminar),
    });
    if (!response.ok) {
        throw new Error('Ошибка при добавлении мероприятия');
    }
    return response.json();
};