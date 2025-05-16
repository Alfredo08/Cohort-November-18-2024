const pool = require('./../database/config');

const getTodosByUserId = (data) => {
    const nativeQuery = `
        SELECT description, status
        FROM todos
        WHERE user_id = $1;
    `;

    return pool.query(nativeQuery, data);
}

const Todos = {
    getTodosByUserId
};

module.exports = Todos;