"use client";

import {FormEvent} from "react";

interface IdProps{
  id:string;
}

export default function FormJoinWedding({ id }:IdProps ) {


  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    //event.preventDefault()

    const apiUrl:string = process.env.NEXT_PUBLIC_API_URL!;
    const formData = new FormData(event.currentTarget);

    try {

      const response:Response = await fetch(apiUrl.concat("/saveWeddingForm"), {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
    } catch(e: unknown){
      console.error("Saving wedding form failed:"+e );
      return;
    }
  }

  return (
    <div className="flex flex-col items-center space-y-10 py-10">
      <h1 className="text-7xl font-light font-dancing text-center m-4">
        Prosíme vyplňte formulář
      </h1>

      <form className="p-6" onSubmit={onSubmit}>

        <div className="m-2">
          <label htmlFor="numberOfPpl">Počet dospělých</label>
          <input
              id="ppl"
              name="ppl"
              type="number"
              min="0"
              step="1"
              onInput={(e: React.FormEvent<HTMLInputElement>) => {
                const input = e.target as HTMLInputElement;
                // Remove any non-digit characters
                input.value = input.value.replace(/[^0-9]/g, '');
              }}
          />
        </div>

        <div className="m-2">
          <label htmlFor="numberOfChildren">Počet dětí</label>
          <input
              id="children"
              name="children"
              type="number"
              min="0"
              step="1"
              onInput={(e: React.FormEvent<HTMLInputElement>) => {
                const input = e.target as HTMLInputElement;
                // Remove any non-digit characters
                input.value = input.value.replace(/[^0-9]/g, '');
              }}
          />
        </div>

        <div className="m-2">
          <input id="ceremony" name="ceremony" type="checkbox"/>
          <label htmlFor="ceremony">Účast na obřadu</label>
        </div>

        <div className="m-2">
          <input id="party" name="party" type="checkbox"/>
          <label htmlFor="party">Účast na oslavě</label>
        </div>

        <input type="hidden" name="id" value={id}/>

        <div className="m-2 flex gap-4">
          <button
              type="submit"
              className="bg-blue-500 text-white rounded-md px-4 py-2 font-bold"
          >
            Odeslat
          </button>
        </div>
      </form>

    </div>
  );
}
