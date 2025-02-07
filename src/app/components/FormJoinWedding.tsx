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
    const [ceremony, setCeremony] = useState<boolean>();
    const [party, setParty] = useState<boolean>();
    const [notAttending, setNotAttending] = useState<boolean>();

    useEffect(() => {
        setChildren(visitor?.weddingForm?.children ?? '');
        setPpl(visitor?.weddingForm?.ppl ?? '');
        setCeremony(visitor?.weddingForm?.ceremony ?? false);
        setParty(visitor?.weddingForm?.party ?? false);
        setOid(visitor?._id.$oid ?? '');
        setNotAttending(visitor?.weddingForm?.notAttending ?? false);
    },[]);

    function clearForm() {
        if (!notAttending) {
            setChildren(0);
            setPpl(0);
            setCeremony(false);
            setParty(false);
        }
    }

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const apiUrl:string = process.env.NEXT_PUBLIC_API_URL!;
        const formData = new FormData(event.currentTarget);

         fetch(apiUrl.concat("/saveWeddingForm"), {
                                    method: 'POST',
                                    body: formData,
                                     }).then(response => {
                                    if (!response.ok) {
                                        throw new Error('Network response was not ok ' + response.statusText);
                                    }else{
                                        window.location.reload();
                                    }

                                })
    }

  return (
    <div className="flex flex-col items-center space-y-2 py-10 bg-gray-300">
      <h1 className="text-4xl  text-center m-4 font-dancing">
          { (visitor?.weddingForm?.ppl || visitor?.weddingForm?.notAttending) ? "Děkujeme za vyplnění formuláře" : "Prosíme vyplňte formulář"}
      </h1>

        <form className="p-6 flex flex-col" onSubmit={onSubmit}>
            <div className="inline-flex items-center mb-3">
                <label className="flex items-center cursor-pointer relative mr-2">
                    <input type="checkbox"
                           className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-white checked:bg-slate-800 checked:border-slate-800"
                           name="ceremony"
                           checked={ceremony}
                           onChange={e => {setCeremony(e.target.checked); setNotAttending(false);}}

                    />
                    <span
                        className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                           className="w-3.5 h-3.5">
                        <path
                            d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z"/>
                      </svg>
                    </span>
                </label>
                Potvrzuji účast na obřadu
            </div>

            <div className="inline-flex items-center mb-3">
                <label className="flex items-center cursor-pointer relative mr-2">
                    <input type="checkbox"
                           className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-white checked:bg-slate-800 checked:border-slate-800"
                           name="party"
                           checked={party}
                           onChange={e => {setParty(e.target.checked);setNotAttending(false);}}

                    />
                    <span
                        className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                           className="w-3.5 h-3.5">
                        <path
                            d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z"/>
                      </svg>
                    </span>
                </label>
                Potvrzuji účast na oslavě
            </div>

            <div className="w-full mb-6 max-w-sm min-w-[200px]">
                <label className="block mb-1 text-sm text-slate-600">
                    Počet dospělých
                </label>
                <input
                    className="w-full bg-white placeholder:text-slate-400 text-slate-700 text-sm border border-white rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                    placeholder="0"
                    value={ppl === undefined ? '' : ppl}
                    name="ppl"
                    type="number"
                    min="0"
                    step="1"
                    onChange={e => {
                        if (e.target.value) {
                            setPpl(parseInt(e.target.value, 10));
                            setNotAttending(false);
                        } else {
                            setPpl('')
                        }
                    }}
                    onInput={(e: React.FormEvent<HTMLInputElement>) => {
                        const input = e.target as HTMLInputElement;
                        // Remove any non-digit characters
                        input.value = input.value.replace(/[^0-9]/g, '');
                    }}
                />
            </div>

            <div className="w-full mb-6 max-w-sm min-w-[200px]">
                <label className="block mb-1 text-sm text-slate-600">
                    Počet dětí
                </label>
                <input
                    className="w-full bg-white placeholder:text-slate-400 text-slate-700 text-sm border border-white rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                    placeholder="0"
                    value={children === undefined ? '' : children}
                    name="children"
                    type="number"
                    min="0"
                    step="1"
                    onChange={e => {
                        if (e.target.value) {
                            setChildren(parseInt(e.target.value, 10));
                            setNotAttending(false);
                        } else {
                            setChildren('')
                        }
                    }}
                    onInput={(e: React.FormEvent<HTMLInputElement>) => {
                        const input = e.target as HTMLInputElement;
                        // Remove any non-digit characters
                        input.value = input.value.replace(/[^0-9]/g, '');
                    }}
                />
            </div>



            <div className="inline-flex items-center">
                <label
                    className="relative flex cursor-pointer items-center rounded-full p-3"
                    htmlFor="ripple-on"
                    data-ripple-dark="true"
                >
                    <input
                        name="notAttending"
                        type="checkbox"
                        checked={notAttending}
                        onChange={e => {setNotAttending(e.target.checked); clearForm()}}

                        className="peer relative h-5 w-5 cursor-pointer appearance-none rounded border border-white shadow hover:shadow-md transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-slate-400 before:opacity-0 before:transition-opacity checked:border-slate-800 checked:bg-slate-800 checked:before:bg-slate-400 hover:before:opacity-10"
                    />
                    <span
                        className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3.5 w-3.5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-width="1"
                      >
                        <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                </label>
                <label className="cursor-pointer text-slate-600 text-sm"
                       htmlFor="ripple-on">
                    Bohužel nedorazím
                </label>
            </div>

            <input type="hidden" name="id"
                   value={oid === undefined ? '' : oid}/>

            <div className="m-2 flex gap-4">
                <button
                    type="submit"
                    className="bg-blue-500 text-white rounded-md px-4 py-2 font-bold">
                    {visitor?.weddingForm?.ppl ? "Znovu odeslat" : "Odeslat"}
                </button>
            </div>
        </form>

    </div>
  );
}
