import z from 'zod'

const userSchema = z.object({
  username: z.string({
    invalid_type_error: 'Name must be a string',
    required_error: 'Name is required'
  }).min(3, 'Name must be at least 3 characters'),
  email: z.string({
    invalid_type_error: 'Email must be a string',
    required_error: 'Email is required'
  }).email(),
  password: z.string({
    invalid_type_error: 'Password must be a string',
    required_error: 'Password is required'
  }).min(6, 'Password must be at least 6 characters')
})

export function validateUser (object) {
  const result = userSchema.safeParse(object)
  if (result.error) throw new Error(result.error.issues[0].message)

  return result.data
}
