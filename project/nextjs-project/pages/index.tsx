import { useRouter } from 'next/router'
import { useEffect } from "react"

export default function Main() {
  const router = useRouter()

  useEffect(() => {
    router.push('/loginpage')
  })

  return (
    <>
      
    </>
  )
}