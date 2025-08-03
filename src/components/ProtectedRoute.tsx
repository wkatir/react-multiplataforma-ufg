import { useUser, RedirectToSignIn } from "@clerk/clerk-react"

interface ProtectedRouteProps{
    children: React.ReactNode
}

const ProtectedRoute = ({children}: ProtectedRouteProps) => {
 
    const {isSignedIn, isLoaded} = useUser();

    if(!isLoaded){
        return <div>Loading...</div>
    }

    if(!isSignedIn){
        return <RedirectToSignIn />
    }
    return (
    <div>{children}</div>
  )
}

export default ProtectedRoute