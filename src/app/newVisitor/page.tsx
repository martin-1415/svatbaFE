"use client";

import { FormEvent } from 'react'
import { useEffect, useState } from "react";
import {VisitorI} from "../model/VisitorI";

export default function Page() {
    const [listOfVisitors, setData] = useState< VisitorI[] | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(process.env.NEXT_PUBLIC_API_URL!.concat('/getAll'));
                const list:VisitorI[] = await response.json();
                setData(list);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        //event.preventDefault()

        const apiUrl:string = process.env.NEXT_PUBLIC_API_URL!;
        const formData = new FormData(event.currentTarget)
        let response: Response;
        let hash: string = " ";

        try {
            response = await fetch(apiUrl.concat("/newVisitor"), {
                            method: 'POST',
                            body: formData,
                            })
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            // Await the response parsing
            hash = await response.text();

        } catch{
            console.error("Saving visitor failed");
            return;
        }

        alert(process.env.NEXT_PUBLIC_URL!.concat('?id=').concat(hash));
    }

    return (
        <form  className="p-6" onSubmit={onSubmit}>
            <div className="m-2">
                <input name="name"/>
                <label htmlFor="name"> Jméno</label>
            </div>
            <div className="m-2">
                <input name="welcomeMessage"/>
                <label htmlFor="welcomeMessage ">Uvítací zpráva (...pozvali na)</label>
            </div>
            <button type="submit" className="bg-blue-500 text-white rounded-md px-2 py-1">Odeslat</button>

            {listOfVisitors && listOfVisitors.length > 0 ? (
                listOfVisitors.map((visitor) => (
                    <ul key={visitor._id.$oid}>
                        <li><a className="text-blue-600" href={process.env.NEXT_PUBLIC_URL!.concat('?id=').concat(visitor._id.$oid)}>{process.env.NEXT_PUBLIC_URL!.concat('?id=').concat(visitor._id.$oid)}</a>  {visitor.name}     {visitor.welcomeMessage}   </li>
                    </ul>
                ))
            ) : (
                <p>Loading...</p>
            )}

         </form>
    )
}