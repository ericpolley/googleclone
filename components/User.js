import {useSession, signIn, signOut} from 'next-auth/react'

export default function User() {
  const {data:session} = useSession();
  if(session){
   return (
    <>
    <img onClick={signOut} src={session.user.image} alt='ME' className='h-10 rounded-full w-10 bg-gray-200 cursor-pointer p-1' />
    </>
   )
  }
  return (
    <>
    <button className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:shadow-md" onClick={signIn}>Sign in</button></>
  )
}
