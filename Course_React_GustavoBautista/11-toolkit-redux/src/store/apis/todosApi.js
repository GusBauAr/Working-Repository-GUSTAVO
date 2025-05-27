import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const todosApi = createApi({
    reducerPath:'todos',
    baseQuery: fetchBaseQuery({
        baseUrl:'http://jsonplaceholder.typicode.com'
    }),
    endpoints: (builder) => ({
        getTodos:builder.query({
            query: () => '/todos' //llamamos la url y concatenamos con el /todos
        })
    })

})

export const {useGetTodosQuery} = todosApi;//aqui nos permite crear custom hooks
//este custom hook es el que va tener todoa la informacion necesaria para saber cuando tenemos errores, cuando se carga