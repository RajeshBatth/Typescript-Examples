import {z} from 'zod'

function jsonParse(jsonStr: string): unknown {
    return JSON.parse(jsonStr)
}

const UserSchema = z.object({
    name: z.string(),
    age: z.number(),
    isShopper: z.boolean().optional()
})

type User = z.infer<typeof UserSchema>

let jsonStr = `
    {
        "name": "rajesh", 
        "age": 100 
    }
`;
const unsafeUser = jsonParse(jsonStr)
console.log("unsafeUser.name", unsafeUser.name)  // <-- Error

const safeUser = UserSchema.parse(unsafeUser) // throws error if unsafeUser is not of UserSchema shape
console.log("user1.name", safeUser.name) // <-- Ok
