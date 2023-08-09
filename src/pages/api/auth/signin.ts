import { getUserByEmail } from '@/mongoDB/models/user'
import { setCurrentUser } from '@/redux/userSlice'
import { toggleAuthState } from '@/redux/authSlice'
import store from '@/redux/store'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler (req: NextApiRequest, res: NextApiResponse): Promise<void> {
  if (req.method !== 'POST') {
    res.status(405).end() // Method Not Allowed
    return
  }

  const { email, psw } = req.body

  try {
    const user = await getUserByEmail(email)

    if (user === null) {
      res.status(401).json({ error: 'User Not Found' })
    } else if (user.password === psw) {
      setCurrentUser(user)
      store.dispatch(toggleAuthState())
      res.status(200).json({ success: true })
    } else {
      res.status(401).json({ error: 'Wrong Password' })
    }
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}
