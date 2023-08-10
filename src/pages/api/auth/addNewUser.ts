import connectDB from '@/mongoDB/db'
import { type NextApiRequest, type NextApiResponse } from 'next'

connectDB().catch((err) => { console.error(err) })

export default async function handler (req: NextApiRequest, res: NextApiResponse): Promise<void> {
  await connectDB().catch((err) => { console.error(err) })

  if (req.method === 'POST') {
    try {

    } catch (err) {
      console.log(err)
    }
  }
}
