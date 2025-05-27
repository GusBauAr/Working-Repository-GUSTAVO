import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todosApi = createApi({
    reducerPath:'todos',
    baseQuery: fetchBaseQuery({
        baseUrl:'http://jsonplaceholder.typicode.com'
    }),
    endpoints: (builder) => ({
        getTodos:builder.query({
            query: () => '/todos' //llamamos la url y concatenamos con el /todos
        }),
        getTodo:builder.query({
            query: (todoId) => `/todos/${todoId}` //llamamos la url y concatenamos con el /todos
        })
    })

})

export const {useGetTodosQuery, useGetTodoQuery,} = todosApi;//aqui nos permite crear custom hooks
//este custom hook es el que va tener todoa la informacion necesaria para saber cuando tenemos errores, cuando se carga