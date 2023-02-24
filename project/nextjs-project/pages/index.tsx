import { useRouter } from "next/router"
import AllListings from "./allListings";
import LoginPage from "./loginpage"

export default function Main() {
  const router = useRouter()
  const { accessToken } = router.query;

  if (accessToken !== undefined || "") {
    return (
      <>
        <AllListings accessToken={accessToken as string}/>
      </>
    )
  } else {
    return (
      <div className="flex flex-col justify-center items-center h-full">
        <LoginPage />
      </div>
    )
  }
}
