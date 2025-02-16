"use client";

import Countdown from "@/app/components/Countdown";
import Image from "next/image";
import ButtonInfo from "@/app/components/ButtonInfo";
import {useEffect, useState} from "react";
import {IVisitor} from "@/app/model/IVisitor";
import FormJoinWedding from "@/app/components/FormJoinWedding";
import OurDay from "@/app/components/OurDay/OurDay";

export default function Home() {
  const [id, setId] = useState<string>("");
  const [visitor, setVisitor] = useState<IVisitor | undefined>();

  useEffect(() => {
    // saving and loading Visitor ID
    const searchParams = new URLSearchParams(window.location.search);
    let load_id: string | null = localStorage.getItem("svatba825_id");
    if (load_id) {
      setId(load_id);
    } else {
      load_id = searchParams.get("id");
      if (typeof load_id === "string") {
        localStorage.setItem("svatba825_id", load_id);
      }
    }
    if (load_id) {
      setId(load_id);
    }

  },[]);


  const fetchData = async () => {
    try {
      if(id) {
        const params = new URLSearchParams({id: id});
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL!.concat("/getOne")}?${params.toString()}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        });
        const visitor: IVisitor= await response.json();
        setVisitor(visitor);
      }
    } catch {
      console.info("Visitor not loaded.");
    }
  }

  if(visitor==undefined){
    fetchData();
  }

  return (
    <div className="relative ">
      <section  id="imageAndGrayDiv"  className="bg-[url(/dekor.jpg)]">
        <div  className="relative   w-full overflow-hidden sm:w-[50%] sm:h-auto sm:mx-auto">

          <Image
            src="/title.png"
            alt="Family Photo"
            width={991}
            height={999}
            className="w-full sm:flex-shrink-0 sm:object-contain  sm:w-auto"
          />
          <div className="absolute -right-12 rounded-full bg-gray-300  p-6 top-1/2  w-[55vw] h-24  text-center shadow-xl sm:w-[30vw] sm:p-4 sm:h-auto sm:text-2xl">
            <div className=" pr-8 font-dancing text-violet-900  ">Tak dlouho se hledali, </div>
            <div className=" pr-8 font-dancing text-violet-900  ">až na sebe zbyli.</div>
          </div>

        </div>

        <div className="  w-full bg-violet-200 text-violet-900 flex flex-col items-center px-4 py-4 space-y-10 text-center sm:hidden">
          <h1 className="text-4xl font-light font-dancing ">Šárka</h1>
          <div className="flex items-center w-1/2">
            <div className="flex-grow border-t border-violet-900 "></div>
            <span className="mx-4 text-2xl font-dancing ">&</span>
            <div className="flex-grow border-t border-violet-900 "></div>
          </div>
          <h1 className="text-4xl font-dancing">Martin</h1>
        </div>

        {/*<div className="hidden sm:block sm:w-[50%]">*/}
        {/*  <OurDay/>*/}
        {/*</div>*/}

      </section>

      <section>
        <h1 className="text-4xl font-dancing px-16 py-6 text-violet-900">ANO si řeknou přesně za ...</h1>
        <Countdown />
        <div className="flex flex-col items-center space-y-10 my-10 text-2xl">

          {visitor ? (
              <div className=" px-10 text-center text-2xl">
                {visitor?.welcomeMessage} pozvali na naši svatbu, která se bude konat <b>9.srpna 2025</b>.
                Veškeré informace najdeš níže. Předem Ti děkujeme za potvrzení a vyplnění
                formuláře.
              </div>
          ) : (
              <div className=" px-10 text-center">
                Na těchto stránkách naleznete informace o naší svatbě. Pokud patříte mezi pozvané VIP lidi,
                pravděpodobně jsme vám poslali odkaz obsahující kód, který vás automaticky přihlásí na tyto stránky.
              </div>
          )}


        </div>

        {visitor && <FormJoinWedding visitor={visitor} />}
      </section>

      <div className="sm:hidden">
        <OurDay/>
      </div>


      <section id="details" className=" mx-auto flex flex-col justify-center items-center sm:flex sm:flex-row sm:flex-wrap" >

          {/*Ceremony*/}
          <div id="ceremony" className="flex flex-wrap items-start justify-center my-20 gap-40 w-full sm:w-[40vw]" >
            <div className="basis-1/2 flex flex-col justify-start space-y-4 text-center max-w-96 h-[90vh] sm:h-auto">
              <div className="flex justify-center mb-3">
                <Image
                    src="/ceremonyb.png"
                    alt="Celebration"
                    width={300}
                    height={300}
                    className="w-28 rounded-xl"
                />
              </div>
              <h2 className="text-xl font-bold text-violet-900" >Obřad</h2>
              <p className="text-md font-extrabold text-gray-800">
                9.8.2025 11:30
              </p>
              <p className="text-md text-gray-600">Zámek Dub</p>
              <div className="flex justify-center items-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-10 w-10 text-gray-800"
                >
                  <path
                      fillRule="evenodd"
                      d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                      clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-md text-gray-800 ">
                Adresa: Dub 1, 384 25 Dub
              </p>
              <div className="mt-auto">
                <ButtonInfo
                    title="Více informací"
                    url="/ceremony"
                />
              </div>
            </div>
          </div>



              {/*PARTY*/}
              <div id="party" className="flex flex-wrap items-start justify-center my-20 gap-40 w-full sm:w-[40vw]" >
                <div className="basis-1/2 flex flex-col justify-start space-y-4 text-center max-w-96 h-[90vh] sm:h-auto">
                  <div className="flex justify-center mb-3">
                    <Image
                      src="/celebrationb.png"
                      alt="Celebration"
                      width={300}
                      height={300}
                      className="w-28 rounded-xl"
                    />
                  </div>
                  <h2 className="text-xl font-bold text-violet-900" >Svatební hostina</h2>
                  <p className="text-md font-extrabold text-gray-800">
                    9.8.2025 13 :00
                  </p>
                  <p className="text-md text-gray-600">Párty</p>
                  <div className="flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-10 w-10 text-gray-800"
                    >
                      <path
                        fillRule="evenodd"
                        d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-md text-gray-800 ">
                    Tvrz Drahonice č.p. 32, okr. Strakonice
                  </p>
                  <div className="mt-auto">
                    <ButtonInfo
                      title="Více informací"
                      url="/party"
                    />
                  </div>
                </div>
              </div>

          {/*ACCOMODATION*/}
          <div id="accomodation" className="flex flex-wrap items-start justify-center my-20 gap-40 w-full sm:w-[40vw]" >
            <div className="basis-1/2 flex flex-col justify-start space-y-4 text-center max-w-96 h-[90vh] sm:h-auto">
              <div className="flex justify-center mb-3">
                <Image
                    src="/accomodationb.png"
                    alt="accomodation"
                    width={300}
                    height={300}
                    className="w-28 rounded-xl"
                />
              </div>
              <h2 className="text-xl font-bold text-violet-900">Ubytování</h2>
              <p className="text-md text-gray-800">9.8.2025 - 10.8.2025</p>
              <div className="flex justify-center items-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-10 w-10 text-gray-800"
                >
                  <path
                      fillRule="evenodd"
                      d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                      clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-md text-gray-800 ">
                Tvrz Drahonice č.p. 32, okr. Strakonice
              </p>
              <div className="mt-auto">
                <ButtonInfo
                    title="Více informací"
                    url="/accomodation"
                />
              </div>
            </div>
          </div>

          {/*GIFT*/}
          <div id="gift" className="flex flex-wrap items-start justify-center my-20 gap-40 w-full sm:w-[40vw]" >
            <div className="basis-1/2 flex flex-col justify-start space-y-4 text-center max-w-96 h-[90vh] sm:h-auto">
              <div className="flex justify-center mb-3">
                <Image
                    src="/giftb.png"
                    alt="gift"
                    width={300}
                    height={300}
                    className="w-28 rounded-xl"
                />
              </div>
              <h2 className="text-xl font-bold text-violet-900">Svatební dary</h2>
              <div className="flex justify-center items-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-10 w-10 text-gray-800"
                >
                  <path
                      fillRule="evenodd"
                      d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                      clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="mt-auto">
                <ButtonInfo
                    title="Více informací"
                    url="/gifts"
                />
              </div>
            </div>
          </div>

          {/*Gallery*/}
          <div id="gallery" className="flex flex-wrap items-start justify-center my-20 gap-40 w-full sm:w-[40vw]" >
            <div className="basis-1/2 flex flex-col justify-start space-y-4 text-center max-w-96 ">
              <div className="flex justify-center mb-3">
                <Image
                    src="/galleryb.png"
                    alt="gallery"
                    width={300}
                    height={300}
                    className="w-28 rounded-xl"
                />
              </div>
              <h2 className="text-xl font-bold text-violet-900">Galerie</h2>
              <p className="text-md text-gray-800">Fotky po svatbě</p>
              <div className="flex justify-center items-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-10 w-10 text-gray-800"
                >
                  <path
                      fillRule="evenodd"
                      d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                      clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="mt-auto">
                <ButtonInfo
                    title="Více informací"
                    url="/gallery"
                />
              </div>
            </div>
          </div>

      </section>
    </div>
  );
}
