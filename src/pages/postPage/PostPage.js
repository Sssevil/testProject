import React, {useEffect, useState} from 'react';
import {useModalContext} from "../../context/ModalProvider";

function PostPage() {

    const [users,setUsers]= useState([])
    const [user, setUser] = useState({
        name:"",
        email:"",
        username:""
    })

    const {openModal, openModalDelete} = useModalContext()
    async function getUsers(){
        const response= await fetch('http://localhost:8000/users')
        const data = await response.json()

        setUsers(data)
    }

    const changeInput =(event)=>{
        const {value, name}=event.target;

        setUser({
            ...user,
            [name]:value
        })
    }

    async function createUser(event){
        event.preventDefault()
        setUser({
            name:"",
            email:"",
            username:""
        })
        const todo = {
            name:user.name,
            email:user.email,
            username:user.username
        }



        const  response = await fetch('http://localhost:8000/users', {
            method:'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(todo)
        })

        if (response.ok){
            getUsers()
            openModal()
        }
    }

    async function deleteUser (id){
        const response = await fetch(`http://localhost:8000/users/${id}`,{
            method:'DELETE'
        })

        if (response.ok){
            getUsers()
            openModalDelete()
        }


    }



    useEffect(() => {
        getUsers()
    }, [])

    return (
        <div>
            <form onChange={changeInput} onSubmit={createUser}>
                <input type="text" name='name' placeholder='name' value={user.name} required={true}/>
                <input type="text" name='email' placeholder='email' value={user.email} required={true}/>
                <input type="text" name='username' placeholder='username' value={user.username} required={true}/>

                <button className="btn_create">create</button>
            </form>

            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>email</th>
                        <th>username</th>
                        <th>action</th>
                    </tr>
                </thead>

                <tbody>
                {users.length > 0 ?
                    users.map( user =>
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.username}</td>
                            <td><button className="btn_delete" onClick={()=>deleteUser(user.id)}>delete</button></td>
                        </tr>
                    ) :
                    <tr>
                        <td>Список пуст</td>
                    </tr>

                }
                </tbody>

            </table>
        </div>
    );
}

export default PostPage;