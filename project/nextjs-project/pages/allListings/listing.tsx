import { ListingObject } from "@/apiObjects";
import Image from "next/image";

export default function Listing(props: { el: ListingObject }) {
    const listEl = props.el;

    return(
        <div key={listEl.id}>
            <h1>{listEl.title}</h1>
            <div>
                <p>
                    Created: 
                    {
                        new Date(listEl.created).getDay() + "-" +
                        new Date(listEl.created).getMonth() + "-" +
                        new Date(listEl.created).getFullYear()
                    }
                </p>
                <p>
                    Last updated: 
                    {
                        new Date(listEl.updated).getDay() + "-" +
                        new Date(listEl.updated).getMonth() + "-" +
                        new Date(listEl.updated).getFullYear()
                    }
                </p>
                <p>
                    Ends at:
                    {
                        new Date(listEl.endsAt).getDay() + "-" +
                        new Date(listEl.endsAt).getMonth() + "-" +
                        new Date(listEl.endsAt).getFullYear()
                    }
                </p>
            </div>
            <p>{listEl.description}</p>
            { 
                listEl.media.map((image, index) => {
                    return (<Image loader={(() => image)} key={index} src={image} alt="Image not found" width={100} height={100}/>);
                }) 
            }
            <p>{listEl._count.bids}</p>
        </div>
    )
}