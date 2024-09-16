import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import React from "react"

const CafeCard = () =>{
    return(
        <Card className="m-8">
            <CardHeader>
                <CardTitle>
                    Locca Cafe
                </CardTitle>
                <CardDescription>
                    Locca Cafe is cafe that is located near Bandar Sri Permaisuri, it has a lot of food
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div>
                    <span>This is cafe testing</span>
                </div>
            </CardContent>
            <CardFooter>
                This is footer of the card
            </CardFooter>
        </Card>
    )
}

export default CafeCard