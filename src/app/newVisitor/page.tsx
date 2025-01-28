"use client";

import { FormEvent } from 'react'

export default function Page() {

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const apiUrl:string|undefined = process.env.NEXT_PUBLIC_API_URL;
        const formData = new FormData(event.currentTarget)

        // try {
            const response: Response = await fetch(apiUrl!.concat("/newVisitor"), {
                method: 'POST',
                body: formData,
            })
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            // const json = await response.json();
            // console.log(json);
        // } catch{
        //     console.error("Saving visitor failed:" + response.toString());
        // }

        // Handle response if necessary
        //const data = await response.json()

    }

    return (
        <form  className="p-6" onSubmit={onSubmit}>
            <div className="m-2">
                <input name="name"/>
                <label htmlFor="name"> Jmeno</label>
            </div>
            <div className="m-2">
                <input name="welcomeMessage"/>
                <label htmlFor="welcomeMessage ">Uvitaci zprava</label>
            </div>
            <button type="submit" className="bg-blue-500 text-white rounded-md px-2 py-1">Submit</button>
         </form>
    )
}