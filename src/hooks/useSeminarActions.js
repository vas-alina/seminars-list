
import { useEffect, useState } from "react"
import { addSeminar, changeSeminar, deleteSeminar, fetchSeminars } from "../api";

export const useSeminarActions = () => {
    const [seminars, setSeminars] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const loadSeminars = async () => {
        setIsLoading(true);
        try {
            const loadedSeminars = await fetchSeminars();
            setSeminars(loadedSeminars);
        } catch (error) {
            console.error('Ошибка при загрузке списка мероприятий:', error);
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        loadSeminars();
    }, []);

    const handleAddSeminar = async (seminar) => {
        try {
            const response = await addSeminar(seminar);
            console.log('Новое мероприятие добавлено! Ответ сервера:', response);
            loadSeminars(); 
        } catch (error) {
            console.error(error.message);
            setError(error);
        }
    };

    const handleDeleteSeminar = async (id) => {
        try {
            const response = await deleteSeminar(id);
            console.log('Удалено, ответ сервера:', response);
            loadSeminars(); 
        } catch (error) {
            console.error('Ошибка удаления мероприятия:', error);
            setError(error);
        }
    };

    const handleChangeSeminar = async (id, newData) => {
        try {
            const response = await changeSeminar(id, newData);
            console.log('Изменено:', response);
            loadSeminars(); 
        } catch (error) {
            console.error('Ошибка изменения мероприятия:', error);
            setError(error);
        }
    };

    return {
        seminars,
        isLoading,
        error,
        addSeminar: handleAddSeminar,
        deleteSeminar: handleDeleteSeminar,
        changeSeminar: handleChangeSeminar,
    };
};

