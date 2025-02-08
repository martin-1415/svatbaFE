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
    } catch (error) {
      console.error("Error fetching visitor data:", error);
    }
  }

  if(visitor==undefined){
    fetchData();
  }

  return (
    <div className="relative ">
      <section className="bg-base-100">
        <div className="relative w-full overflow-hidden">
          <Image
            src="/title.png"
            alt="Family Photo"
            width={1920}
            height={1080}
            className="w-full opacity-50"
          />
          <div className="absolute -right-12 rounded-full bg-gray-300  p-6 z-10 top-1/2  w-[55vw] h-24  text-center shadow-xl">
            <div className=" pr-8 font-dancing text-violet-900  ">Tak dlouho se hledali, </div>
            <div className=" pr-8 font-dancing text-violet-900  ">až na sebe zbyli.</div>
          </div>

          <div className="absolute bottom-8 left-4 pr-8 text-2xl font-dancing text-violet-900 text-left">A řeknou si své ANO.</div>

        </div>

        <div className="  w-full bg-violet-200 text-violet-900 flex flex-col items-center px-4 py-4 space-y-10 text-center">
          <h1 className="text-4xl font-light font-dancing ">Šárka</h1>
          <div className="flex items-center w-1/2">
            <div className="flex-grow border-t border-violet-900 "></div>
            <span className="mx-4 text-2xl font-dancing ">&</span>
            <div className="flex-grow border-t border-violet-900 "></div>
          </div>
          <h1 className="text-4xl font-dancing">Martin</h1>
        </div>
      </section>

      <section>
        <h1 className="text-4xl font-dancing px-16 py-6 text-violet-900">ANO si řekneme přesně za ...</h1>
        <Countdown />
        <div className="flex flex-col items-center space-y-10 my-10">

            <div className=" px-10 text-center">
              {visitor?.welcomeMessage} pozvali na naši svatbu, která se bude konat <b>9.srpna 2025</b>.
              Veškeré informace najdeš níže. Předem Ti děkujeme za potvrzení a vyplnění
              formuláře.
            </div>

        </div>
        {visitor && <FormJoinWedding visitor={visitor} />}
      </section>

      <OurDay/>

      <section className="bg-base-200 bg-white flex flex-col justify-center items-center" id="details">

        <section id="detaily">
            {/*CEREMONY*/}
            <div id="ceremony" className="flex flex-wrap items-start justify-center my-20 gap-40 w-full pb-20" >
              <div className="basis-1/2 flex flex-col justify-center space-y-4 text-center max-w-96  sm:h-auto">
                <div className="flex justify-center mb-3)">
                  <Image
                    src="/ceremonyb.png"
                    alt="Ceremony"
                    width={300}
                    height={300}
                    className="w-28 rounded-xl"
                  />
                </div>
                <h2 className="text-xl font-bold">Obřad</h2>
                <p className="text-md font-extrabold text-gray-800">9.8.2025 11:30 </p>
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
              <div id="party" className="flex flex-wrap items-start justify-center my-20 gap-40 w-full" >
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
                  <h2 className="text-xl font-bold">Svatební zábava</h2>
                  <p className="text-md font-extrabold text-gray-800">
                    13 :00
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
          <div id="accomodation" className="flex flex-wrap items-start justify-center my-20 gap-40 w-full" >
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
              <h2 className="text-xl font-bold">Ubytování</h2>
              <p className="text-md text-gray-600">Party</p>
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
          <div id="gift" className="flex flex-wrap items-start justify-center my-20 gap-40 w-full" >
            <div className="basis-1/2 flex flex-col justify-start space-y-4 text-center max-w-96 ">
              <div className="flex justify-center mb-3">
                <Image
                    src="/giftb.png"
                    alt="gift"
                    width={300}
                    height={300}
                    className="w-28 rounded-xl"
                />
              </div>
              <h2 className="text-xl font-bold">Svatební dary</h2>
              <p className="text-md text-gray-600">xxx</p>
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
                xxx
              </p>
              <div className="mt-auto">
                <ButtonInfo
                    title="Více informací"
                    url="/gifts"
                />
              </div>
            </div>
          </div>
        </section>

      </section>
    </div>
  );
}
