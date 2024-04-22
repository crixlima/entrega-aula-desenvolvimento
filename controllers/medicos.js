import {getUsersData, getUserData, newUser, removeUser, editUser} from '../models/medicos.js'

export const getUsers = (req, res) => {
    const users = getUsersData();
    console.log(`Médico do sistema: ${users}`);
    res.send(users);
}

export const createUser = (req, res) => {   
    const user = req.body;
    newUser(user);
    const message = `Médico(a) ${user.username} incluído no sistema .`
    console.log(message);
    res.status(201).send(message)
};

export const getUser = (req, res) => {
    const user = getUserData(req.params.id);
    if (user){
        res.send(user)
    } else {
        res.status(404).send("Médico não encontrado")
    }
};

export const deleteUser = (req, res) => { 
    removeUser(req.params.id);
    const message = `O médico de id ${req.params.id} foi removido`
    console.log(message);
    res.status(200).send(message)
};

export const updateUser =  (req,res) => {
    editUser(req.params.id, req.body)
    const message = `Médico alterado para ${req.body.username}. Especialidade alterada para ${req.body.specialty}`
    console.log(message);
    res.status(200).send(message)    
};