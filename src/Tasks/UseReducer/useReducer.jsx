import React, { useReducer, useState } from 'react';

// Initial state
const initialState = {
    items: []
};

// Reducer function
function reducer(state, action) {
    switch (action.type) {
        case 'CREATE':
            return {
                ...state,
                items: [...state.items, action.payload]
            };
        case 'READ':
            return state;
        case 'UPDATE':
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.payload.id ? action.payload : item
                )
            };
        case 'DELETE':
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload.id)
            };
        default:
            return state;
    }
}

// Main component
function UseReducer() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [input, setInput] = useState('');
    const [editId, setEditId] = useState(null);

    const handleCreate = () => {
        dispatch({ type: 'CREATE', payload: { id: Date.now(), text: input } });
        setInput('');
    };

    const handleUpdate = () => {
        dispatch({ type: 'UPDATE', payload: { id: editId, text: input } });
        setInput('');
        setEditId(null);
    };

    const handleEdit = (item) => {
        setInput(item.text);
        setEditId(item.id);
    };

    const handleDelete = (id) => {
        dispatch({ type: 'DELETE', payload: { id } });
    };

    return (
        <div>
            <h1>CRUD Operations with useReducer</h1>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={editId ? handleUpdate : handleCreate}>
                {editId ? 'Update' : 'Create'}
            </button>
            <ol>
                {state.items.map((item) => (
                    <li key={item.id}>
                        {item.text}
                        <button onClick={() => handleEdit(item)}>Edit</button>
                        <button onClick={() => handleDelete(item.id)}>Delete</button>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default UseReducer;
