import { ListingObject } from "@/apiObjects";
import Image from "next/image";

export default function Listing(props: { el: ListingObject }) {
    const listEl = props.el;

    return(
        <div key={listEl.id} className=" col-span-1 text-center p-10 bg-slate-400 hover:bg-slate-500 shadow-inner shadow-slate-100 rounded-2xl flex flex-col justify-evenly items-center">
            <h1 className="text-3xl p-3">{listEl.title}</h1>
            <div className=" text-sm p-3 flex flex-row justify-evenly items-center w-full">
                <p>
                    Created: <br/> 
                    {
                        new Date(listEl.created).getDay() + "-" +
                        new Date(listEl.created).getMonth() + "-" +
                        new Date(listEl.created).getFullYear()
                    }
                </p>
                <p>
                    Last updated: <br/>
                    {
                        new Date(listEl.updated).getDay() + "-" +
                        new Date(listEl.updated).getMonth() + "-" +
                        new Date(listEl.updated).getFullYear()
                    }
                </p>
                <p>
                    Ends at: <br/>
                    {
                        new Date(listEl.endsAt).getDay() + "-" +
                        new Date(listEl.endsAt).getMonth() + "-" +
                        new Date(listEl.endsAt).getFullYear()
                    }
                </p>
            </div>
            <p className="p-3 ">{listEl.description}</p>
             
            <Image loader={(() => listEl.media[0])} src={listEl.media[0]} alt="Image not found" width={200} height={100} />

            {
                // listEl.media.map((image, index) => {
                //     return (<Image loader={(() => image)} key={index} src={image} alt="Image not found" width={200} height={100}/>);
                // }) 
            }
            <p>{listEl._count.bids}</p>
        </div>
    )
}