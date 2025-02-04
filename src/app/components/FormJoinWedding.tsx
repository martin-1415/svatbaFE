"use client";

import {FormEvent, useEffect, useState} from "react";
import {IVisitor} from "@/app/model/IVisitor";

interface VisitorProps{
  visitor:IVisitor | undefined;
}

export default function FormJoinWedding({ visitor }:VisitorProps ) {

    const [ppl, setPpl] = useState<number | string>('');
    const [children, setChildren] = useState<number| string>('');
    const [oid, setOid] = useState<string>('');
    const [ceremony, setCeremony] = useState<boolean>(false);
    const [party, setParty] = useState<boolean>(false);

    useEffect(() => {
        setChildren(visitor?.weddingForm?.children ?? '');
        setPpl(visitor?.weddingForm?.ppl ?? '');
        setCeremony(visitor?.weddingForm?.ceremony ?? false);
        setParty(visitor?.weddingForm?.party ?? false);
        setOid(visitor?._id.$oid ?? '');

    },[]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const apiUrl:string = process.env.NEXT_PUBLIC_API_URL!;
    const formData = new FormData(event.currentTarget);


    const response:Response = await fetch(apiUrl.concat("/saveWeddingForm"), {
                                method: 'POST',
                                body: formData,
                                 })
    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
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
              value={ppl === undefined ? '' : ppl}
              name="ppl"
              type="number"
              min="0"
              step="1"
              onChange={e => {if(e.target.value) {setPpl(parseInt(e.target.value, 10))}else{setPpl('')}}}
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
              value={children === undefined ? '' : children}
              name="children"
              type="number"
              min="0"
              step="1"
              onChange={e => { if(e.target.value) {setChildren(parseInt(e.target.value, 10))}else{setChildren('')}}}
              onInput={(e: React.FormEvent<HTMLInputElement>) => {
                const input = e.target as HTMLInputElement;
                // Remove any non-digit characters
                input.value = input.value.replace(/[^0-9]/g, '');
              }}
          />
        </div>

        <div className="m-2">
            <label htmlFor="ceremony">Účast na obřadu</label>
            <input name="ceremony" type="checkbox" defaultChecked={ceremony}   />
        </div>

        <div className="m-2">
            <label htmlFor="party">Účast na oslavě</label>
            <input id="party" name="party" type="checkbox" defaultChecked={party} />
        </div>

        <input type="hidden" name="id"
               value={oid === undefined ? '' : oid}/>

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
