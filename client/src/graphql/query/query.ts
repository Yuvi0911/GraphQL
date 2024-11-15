import { gql } from "@apollo/client"

export const getUsers = gql(`
    query Query {
        sampleUsers {
            name
            age
            gender
        }
    }
`
)
export const addUser = gql(`
    mutation Mutation($name:String!, $age: Int!, $gender: String!){
        newUser(name: $name, age: $age, gender: $gender)
    }
`
)