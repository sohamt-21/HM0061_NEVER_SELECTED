import React from 'react'
import { SignedOut, SignedIn } from "@clerk/clerk-react";
import Landing from './Landing';
import NewLandPage from './NewLandPage';


const MainRender = () => {
    return (
        <>
            <SignedOut>
                <Landing />
            </SignedOut>

            <SignedIn>
               <NewLandPage />
            </SignedIn>
        </>
    )
}

export default MainRender