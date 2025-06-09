import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false, //bandera buleana
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

        savingNewNote: (state) =>{
            state.isSaving = true;
        },
        addNewEmptyNote: (state, action) => {
            state.notes.push(action.payload);
            state.isSaving = false;
        },
        setActiveNote: (state, action) => {
            state.active = action.payload;

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
savingNewNote,
} = journalSlice.actions;
