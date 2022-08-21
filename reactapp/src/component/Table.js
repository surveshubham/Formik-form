import React, { useContext, useEffect, } from 'react'
import NoteContext from '../Context/NoteContext'

const Table = ({ data }) => {

    const context = useContext(NoteContext);
    const { notes, getnotes} = context;

    useEffect(() => {
        // addnotes(data.name,data.mobile,data.gender,data.email);
        getnotes();
        console.log(notes)
    }, [2]);



    return (
        <div className="container border">
            <h1 className="alert alert-primary" >Datatable</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">name</th>
                        <th scope="col">mobile</th>
                        <th scope="col">gender</th>
                        <th scope="col">email</th>
                    </tr>
                </thead>
                <tbody>
                    {notes.map((notes, index) => {

                        return <>
                            <tr index={index}>
                                <th scope="row" index={index}>{index}</th>
                                <td>{notes.name}</td>
                                <td>{notes.mobile}</td>
                                <td>{notes.gender}</td>
                                <td>{notes.email}</td>
                            </tr>
                        </>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Table



