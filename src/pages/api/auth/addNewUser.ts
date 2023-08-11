import { type NextApiRequest, type NextApiResponse } from 'next'
import connectDB from '@/mongoDB/db'
import { User } from '@/mongoDB/models/user'

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  await connectDB().catch((err) => { console.error(err) })

  if (req.method === 'POST') {
    try {
      const newUser = req.body

      console.log(newUser)

      const query = { email: newUser.email }

      const existingUser = await User.findOne(query)

      console.log(existingUser)

      if (existingUser) {
        res.status(400).json({ error: 'User with the email already exists' }); return
      }

      const savedUser = await User.create(newUser)

      res.status(200).json(savedUser)
      console.log('User saved:', savedUser)
    } catch (error) {
      console.error('Error fetching user:', error)
      res.status(500).json({ error: 'Internal server error' })
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}
