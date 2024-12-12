import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Функция для генерации данных с учётом дней
const generateDynamicData = () => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const today = new Date();
    const currentMonthIndex = today.getMonth();
    const currentYear = today.getFullYear();

    // Функция для получения количества дней в месяце
    const getDaysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

    // Генерация данных с учётом месяцев и дней
    const data = [];
    for (let i = 0; i < 12; i++) {
        const monthIndex = (currentMonthIndex + i) % 12;
        const year = currentYear + Math.floor((currentMonthIndex + i) / 12);
        const daysInMonth = getDaysInMonth(monthIndex, year);

        for (let day = 1; day <= daysInMonth; day++) {
            data.push({
                day,
                month: months[monthIndex], // Указание месяца для каждого дня
                users: Math.floor(Math.random() * 20) + 5, // Случайное количество новых пользователей в день
                purchases: Math.floor(Math.random() * 1000) + 100, // Случайная сумма покупок на день
            });
        }
    }
    return data;
};

const LineChartComponent = () => {
    const [filter, setFilter] = useState('year'); // Состояние для фильтра
    const allData = generateDynamicData(); // Генерация всех данных

    // Фильтрация данных на основе выбранного периода
    const filteredData = (() => {
        switch (filter) {
            case '3months':
                return allData.slice(0, 90); // Последние 90 дней (3 месяца)
            case '6months':
                return allData.slice(0, 180); // Последние 180 дней (6 месяцев)
            case 'year':
            default:
                return allData; // Все 12 месяцев с днями
        }
    })();

    // Проверка, что данные для отображения существуют
    if (!filteredData || filteredData.length === 0) {
        return <div>No data available</div>;
    }

    // Уникальные месяцы для отображения на оси X
    const uniqueMonths = [...new Set(filteredData.map(data => data.month))];

    return (
        <div style={{ width: '100%', height: '350px' }}>
            <div style={{ marginBottom: 20 }}>
                <h4 className="h4 mb-10">Activity for</h4>
                <button onClick={() => setFilter('3months')} style={filter === '3months' ? activeButtonStyle : buttonStyle}>3 months</button>
                <button onClick={() => setFilter('6months')} style={filter === '6months' ? activeButtonStyle : buttonStyle}>6 months</button>
                <button onClick={() => setFilter('year')} style={filter === 'year' ? activeButtonStyle : buttonStyle}>Year</button>

            </div>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={filteredData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                        dataKey="month"
                        ticks={uniqueMonths} // Используем уникальные месяцы
                        interval="preserveStartEnd" // Показывать только уникальные месяца
                    />
                    <YAxis />
                    <Tooltip
                        content={({ active, payload }) => {
                            if (active && payload && payload.length) {
                                const { month, day, users, purchases } = payload[0].payload;
                                return (
                                    <div className="custom-tooltip">
                                        <p>{`${month} ${day}`}</p>
                                        <p>{`New Users: ${users}`}</p>
                                        <p>{`Purchases: $${purchases}`}</p>
                                    </div>
                                );
                            }
                            return null;
                        }}
                    />
                    <Legend />
                    <Line type="monotone" dataKey="users" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="purchases" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

// Стили кнопок
const buttonStyle = {
    padding: '10px 20px',

    margin: '10px',
    backgroundColor: '#f0f0f0',
    border: '1px solid #ccc',
    borderRadius: '5px',
    cursor: 'pointer',
};

const activeButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#4caf50',
    color: '#fff',
    border: '1px solid #4caf50',
};

export default LineChartComponent;
