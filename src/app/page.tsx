import { prisma } from "@/lib/db"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import SignInButton from "@/components/SignInButton"
import { getAuthSession } from "@/lib/nextauth"
import { redirect } from "next/navigation"

export default async function Home() {
  const session = await getAuthSession()

  if (session?.user) {
    // The user is signed in
    redirect('/dashboard')
  }

  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <Card className="w-[300px]">
        <CardHeader>
          <CardTitle>Get ready to get Mindblown!</CardTitle>
          <CardDescription>You think you are an expert? Test out your skills here. <br />Mindblown is a Quiz app where you can test your knowledge using the power of AI</CardDescription>
        </CardHeader>
        <CardContent>
          <SignInButton text="Sign In with Google" />
        </CardContent>
      </Card>
    </div>
  )
}
