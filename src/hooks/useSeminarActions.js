import { useEffect, useState } from "react"

const API_URL = "http://localhost:3000/seminars"

export const useSeminarActions = () => {
    const [seminars, setSeminars] = useState([]);
    const [updateAddSeminars, setUpdateAddSeminars] = useState(false);
    const [updateDeleteSeminars, setUpdateDeleteSeminars] = useState(false);
    const [updateChangeSeminars, setUpdateChangeSeminars] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const fetchSeminars = () => {
        setIsLoading(true);
        fetch(API_URL)
            .then((response) => response.json())
            .then((loadedSeminars) => {
                setSeminars(loadedSeminars);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Ошибка при загрузке списка мероприятий: ", error);
                setError(error);
                setIsLoading(false);
            })
    }
    useEffect(() => {
        fetchSeminars()
    }, []);

    const addSeminar = (seminar) => {
        fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
            body: JSON.stringify(seminar),
        })
            .then((response) => {

                if (!response.ok) {
                    throw new Error("Ошибка при добавлении мероприятия");
                }
                return response.json();
            })
            .then((response) => {
                console.log("Новое мероприятие добавлена! Ответ сервера:", response);
                setUpdateAddSeminars(!updateAddSeminars);
            })
            .catch((error) => {
                error(error.message);
                setError(error);
            })
            .finally(() => {
            });
    };

    const deleteSeminar = (id) => {
        setUpdateDeleteSeminars(true)
        fetch(`${API_URL}/${id}`, {
            method: 'DELETE',
        })
            .then((rawResponse) => rawResponse.json())
            .then((response) => {
                console.log(` Удалено, ответ сервера: `, response);
                setUpdateDeleteSeminars(!updateDeleteSeminars);
            })
            .catch((error) => {
                console.error('Ошибка удаления мероприятия:', error);
                setError(error);
            })
            .finally(() => setUpdateDeleteSeminars(false));
    };

    const changeSeminar = (id, newData) => {
        setUpdateChangeSeminars(true);
        fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newData),
        })
            .then((response) => response.json())
            .then((responseData) => {
                console.log('Изменено:', responseData);
            })
            .catch((error) => {
                console.error('Ошибка изменения мероприятия:', error);
                setError(error);
            })

            .finally(() => setUpdateChangeSeminars(false));
    };

    return {
        addSeminar,
        changeSeminar,
        deleteSeminar,
        fetchSeminars,
        error,
        isLoading,
        seminars,
        setSeminars,
        updateAddSeminars,
        updateDeleteSeminars,
        updateChangeSeminars,
        setUpdateChangeSeminars
    };
}
