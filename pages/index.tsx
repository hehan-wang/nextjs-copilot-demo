import Link from 'next/link'
import { NextPage } from 'next'

const HomePage: NextPage = () => {
  return (
    <div>
      <h1>Welcome to our website!</h1>
      <p>Please <Link href="/login">login</Link> or <Link href="/register">register</Link>.</p>
    </div>
  )
}

export default HomePage