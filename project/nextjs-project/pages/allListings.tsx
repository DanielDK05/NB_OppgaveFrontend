import { ListingObject } from "@/apiObjects";
import { useEffect, useState } from "react";
import Listing from "../components/listing";

export default function AllListings(props: {accessToken: string|undefined|null}) {
    const [listings, setListings] = useState<Object[]>([]);

    // Get listings when component first loads
    useEffect(() => {
        console.log("ALL LISTINGS");
        if (!props.accessToken) return;
        
        getListings(props.accessToken as string).then(result => {
            setListings(result)
        })
    }, [props.accessToken]);

    async function getListings(accessToken: string): Promise<Object[]> {
        const options: RequestInit = {
            headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-type': 'application/json'
            },
            method: 'GET'
        }

        const responseData = await fetch('https://api.noroff.dev/api/v1/auction/listings', options)
            .then(response => {
                return response.json();
            }).then(data => {
                return data
        });

        return responseData;
    }

    return (
        <>
            <h1 className="text-5xl text-center pt-10">Bid on these listings:</h1>
            <div className="grid grid-cols-3 w-screen h-auto gap-10 p-20">
                {  
                    listings.map(element => {
                        const el = element as ListingObject;
                        console.log(element);
                        return <Listing key={el.id} el={el} />
                    })
                }
            </div>
        </>
    )
}