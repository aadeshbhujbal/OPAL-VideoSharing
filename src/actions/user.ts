'use server'

import { currentUser } from "@clerk/nextjs/server"

export const onAuthenticateUser = async () => {

try {
    const user = await currentUser()
if(!user) {
    throw new Error("User not found")
    return {status:403}
    }

// const existingUser = await db.user.findUnique({
//     where: {
//         clerkId: user.id
//     }
// })

} catch (error) {
    
    console.error(error)
}


}