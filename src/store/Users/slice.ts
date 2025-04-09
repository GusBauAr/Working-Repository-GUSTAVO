import { PayloadAction, createSlice } from '@reduxjs/toolkit';


const DEFAULT_STATE = [
	{
		id: "1",
		name: "gustavo",
		email: "gustavo@gmail.com",
		github: "gustavo",
	},
	{
		id: "2",
		name: "carlos",
		email: "carlos@gmail.com",
		github: "carlos",
	},
	{
		id: "3",
		name: "erika",
		email: "erika@gmail.com",
		github: "erika",
	},
];
export interface UserWithId extends User {
	id: UserId;
}

const initialState: UserWithId[] = (() => {
	const persistedState = localStorage.getItem("__redux__state__");
	return persistedState ? JSON.parse(persistedState).users : DEFAULT_STATE;
})();
export const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		addNewUser: (state, action: PayloadAction<User>) => {
			const id = crypto.randomUUID()
			state.push({ id, ...action.payload })
		},
		deleteUserById: (state, action: PayloadAction<UserId>) => {
			const id = action.payload;
			return state.filter((user) => user.id !== id);
		},
		rollbackUser: (state, action: PayloadAction<UserWithId>) => {
			const isUserAlreadyDefined = state.some(user => user.id === action.payload.id)
			if (!isUserAlreadyDefined) {
				state.push(action.payload)
			}
		}
	},
});

export default usersSlice.reducer;

export const { addNewUser, deleteUserById, rollbackUser } = usersSlice.actions;