import { z } from "zod"

const login = z.object({
  email: z.string({ required_error: 'email is required!' }).email({ message: 'Provide a valid email' }),
  password: z.string({ required_error: 'password is required' }).min(6, { message: 'Password must be have atleast 6 characters!' })
})

const register = z.object({
  name: z.string({ required_error: 'name is required' }),
  email: z.string({ required_error: 'email is required!' }).email({ message: 'Provide a valid email' }),
  password: z.string({ required_error: 'password is required' }).min(6, { message: 'Password must be have atleast 6 characters!' }),
})


const authValidator = { login, register }
export default authValidator