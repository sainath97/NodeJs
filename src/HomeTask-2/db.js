const { v4: uuidv4 } = require('uuid');
const db = [];

const getUserById = (id) => {
    const user = filterById(id);
    return user;
};

const createUser = (req) => {
    req.body.id = uuidv4();
    req.body.isDeleted = false;
    db.push(req.body);
};

const filterById = (id) => {
    return db.find((item) => {
        return item.id === id;
    });
};

const deleteUser = (id) => {
    const user = filterById(id);
    user.isDeleted = true;
};

const updateUser = (req) => {
    const user = filterById(req.params.id);
    return user ? Object.assign(user, req.body) : null;
};

const searchUser = (loginSubString, limit) => {
    const requestedUsers = db.filter(user => {
        return user.login.indexOf(loginSubString) !== -1;
    });
    return requestedUsers.length <= limit ? requestedUsers : requestedUsers.slice(0, limit);
};

module.exports = { getUserById, createUser, deleteUser, updateUser, searchUser };
