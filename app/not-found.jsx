import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='text-4xl font-extrabold w-screen pt-80 grid justify-center'>
      <h2>404- Page Not Found</h2>
      <Link href="/" className='text-gray-600 text-center pt-4'>Return Home</Link>
    </div>
  )
}

