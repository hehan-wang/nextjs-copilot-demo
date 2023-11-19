import { NextApiRequest, NextApiResponse } from 'next'
import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import { secret } from '../../../api/secret'
import { connectToDatabase } from '../../../utils/db'

export default async function login(req: NextApiRequest, res: NextApiResponse) {
  const { db } = await connectToDatabase()

  if (req.method === 'POST') {
    const user = await db.collection('users').findOne({ username: req.body.username })

    if (!user) {
      return res.status(400).json({ message: 'Invalid username or password' })
    }

    compare(req.body.password, user.password, function(err, isMatch) {
      if (!err && isMatch) {
        const token = sign({ userId: user._id }, secret, { expiresIn: '1h' })
        return res.status(200).json({ message: 'Login successful', token })
      } else {
        return res.status(400).json({ message: 'Invalid username or password' })
      }
    })
  } else {
    res.status(405).json({ message: 'We only support POST' })
  }
}