const pool = require('./../database/config');
//             [email]
const getOne = (data) => {
    const nativeQuery = `
        SELECT *
        FROM users
        WHERE email = $1;
    `;
    return pool.query(nativeQuery, data);
}

const Users = {
    getOne
};

module.exports = Users;