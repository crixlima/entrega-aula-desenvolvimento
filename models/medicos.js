import { v4 as uuid } from 'uuid';

let users = [];

export const getUsersData = () => users;

//Carregar API
export const getUserData = (id) => {
    return users.find((user) => user.id === id);
};

//Criar cadastro
export const newUser = (user) => {
    users.push({...user, id: uuid()});
};

//Remover cadastro
export const removeUser = (id) => {
    users = users.filter((user) => user.id !== id);
    return
};

//Editar cadastro
export const editUser = (id, data) => {
    const user = users.find((user) => user.id === id);
    user.username = data.username;
    user.specialty = data.specialty;
    return
};

    