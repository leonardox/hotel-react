import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: "user",
    initialState: {
        user: "",
        isLogged: false,
        individual: "130,00",
        duplo: "150,00",
        triplo: "180,00"
    },
    reducers: {
        login(state, { payload }) {
            console.log(`AQUIIIII COM PAYLOAD   ` + payload);
            return {
                ...state,
                user: payload,
                isLogged: true
            }
        },
        logout(state) {
            return {
                ...state,
                isLogged: false,
                user: ""
            }
        },
        changeIndividual(state, { payload }) {
            return {
                ...state,
                individual: payload,

            }
        },
        changeDuplo(state, { payload }) {
            return {
                ...state,
                duplo: payload
            }
        },
        changeTriplo(state, { payload }) {
            return {
                ...state,
                triplo: payload
            }
        }
    }
})

export const { login, logout, changeIndividual, changeDuplo, changeTriplo } = slice.actions;

export const selectUser = state => state.user

export default slice.reducer;
