import { useSession } from 'next-auth/react'

export default function Logged() {
  const { data, status } = useSession()

  return (
    <div>
      {status === 'authenticated' && data && (
        <>
          <h1>logged in</h1>
          <span>name: {data?.user?.name}</span>
          <span>email: {data?.user?.email}</span>
        </>
      )}
      {status === 'unauthenticated' && (<h1>usuário não logado</h1>)}
    </div>
  )
}