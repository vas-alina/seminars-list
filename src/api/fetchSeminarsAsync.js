import { API_URL } from "../constants/apiConstants";

export const fetchSeminars = async () => {
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error('Ошибка при загрузке списка мероприятий');
    }
    return response.json();
};