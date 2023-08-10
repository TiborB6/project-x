import { type NextApiRequest, type NextApiResponse } from 'next'
import connectDB from '@/mongoDB/db'
import { User } from '@/mongoDB/models/user'
// Initialize the database connection
connectDB().catch((err) => { console.error(err) })

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  await connectDB().catch((err) => { console.error(err) })

  if (req.method === 'POST') {
    try {
      const { emailInput, pswInput } = req.body
      const query = { email: emailInput }
      const user = await User.findOne(query).lean().exec()

      if (user === null) {
        res.status(200).json({ error: 'User email not found' })
      } else if (user.password !== pswInput) {
        res.status(200).json({ error: 'Wrong password entered' })
      } else {
        res.status(200).json({ user, error: '' })
      }
    } catch (error) {
      console.error('Error fetching user:', error)
      res.status(500).json({ error: 'Internal server error' })
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}
