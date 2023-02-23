import { ListingObject } from "@/apiObjects";
import { useRouter } from "next/router";
import Image from "next/image";
import { useEffect, useState } from "react";
import Listing from "./listing";

export default function AllListings() {
    const [listings, setListings] = useState<Object[]>([]);

    const router = useRouter();
    const { accessToken } = router.query

    // Get listings when component first loads
    useEffect(() => {
        if (!accessToken) return;

        getListings(accessToken as string).then(result => {
            setListings(result)
        })
    }, [accessToken]);

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
            <h1>Hello World!!</h1>
            {  
                listings.map(element => {
                    const el = element as ListingObject;
                    console.log(element);
                    return <Listing key={el.id} el={el} />
                })
            }
        </>
    )
}