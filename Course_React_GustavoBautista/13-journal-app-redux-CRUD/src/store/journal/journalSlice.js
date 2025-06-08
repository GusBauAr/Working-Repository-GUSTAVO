import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: true, //bandera buleana
        messageSaved:'',
        notes:[],
        active:null,
        // active:{
        //     id: 'ABC123',
        //     title: '',
        //     body:'',
        //     date:1234567,
        //     imageUrl: [], //https://foto1.jpg

        // }
    },
    reducers: {
        addNewEmptyNote: (state, action) => {

        },
        setActiveNote: (state, action) => {

        },
        setNotes: (state, action) => {

        },
        setSaving: (state) => {

        },
        updateNote: (state, action) => {

        },
        deleteNodeById: (state, action) => {

        },
    }
});
// Action creators are generated for each case reducer function
export const { addNewEmptyNote,
setActiveNote,
setNotes,
setSaving,
updateNote,
deleteNodeById, 
} = journalSlice.actions;
