"use client";

import Countdown from "@/app/components/Countdown";
import Image from "next/image";
import ButtonLocation from "@/app/components/ButtonLocation";
import {useEffect, useState} from "react";
import {VisitorI} from "@/app/model/VisitorI";
import FormJoinWedding from "@/app/components/FormJoinWedding";

export default function Home() {
  const [id, setId] = useState<string>("");
  const [visitor, setVisitor] = useState<VisitorI | null>();

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
  }, []);

  useEffect(() => {
    // load visitor details
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
          const visitor: VisitorI= await response.json();
          setVisitor(visitor);
          console.log(visitor);
        }
      } catch (error) {
        console.error("Error fetching visitor data:", error);
      }
    }
    fetchData();

  }, [id]);

  return (
    <div>
      <section className="bg-base-100">
        <img src="/curlies.svg" alt="Icon" className="absolute top-2 left-2 z-10 w-1/2 opacity-50" />

        <div className="absolute z-10 top-14 font-dancing left-14 text-2xl m-2">
          Tak dlouho se hledali, až na sebe zbyli.
        </div>
        <div className="relative w-full">
          <Image
            src="/galerie/title3.jpg"
            alt="Family Photo"
            width={1920}
            height={1080}
            className="w-full opacity-50"
          />
          <div className=" absolute bottom-0 w-full bg-violet-200 text-violet-900 flex flex-col items-center px-4 py-4 space-y-10 text-center">
            <h1 className="text-4xl font-light font-dancing ">Šárka</h1>
            <div className="flex items-center w-1/2">
              <div className="flex-grow border-t border-violet-900 "></div>
              <span className="mx-4 text-2xl font-dancing ">&</span>
              <div className="flex-grow border-t border-violet-900 "></div>
            </div>
            <h1 className="text-4xl font-dancing">Martin</h1>
          </div>

        </div>
      </section>

      <section>
        <div className="flex flex-col items-center space-y-10 my-10">
          <h1 className="text-7xl text-center">
            <p className="text-xl  px-10">
              {visitor?.welcomeMessage} pozvali na naši svatbu, která se uskuteční 9. srpna 2025 v
              09:00. Pokud se na tomto vyjímečném dnu setkáme, prosíme o vyplnění a odeslání následujícího dotazníku [Link].
            </p>
          </h1>
          <Countdown />
        </div>
        <FormJoinWedding id={id} ></FormJoinWedding>
      </section>
      <section className="bg-base-200">
        <div className="bg-white flex flex-col justify-center items-center">
          <div className="flex flex-col items-center -space-y-36">
            <div className="flex justify-center">
              <Image
                src="/line-flowers.jpg"
                width={150}
                height={300}
                alt="Decorative Flower"
                className="opacity-30 max-w-sm w-auto"
              />
            </div>
            <div className="flex flex-col items-center text-center space-y-6 z-10">
              <h1 className="text-7xl font-sans text-gray-800">
                Wedding Schedule
              </h1>
              <div className="flex items-center space-x-4 w-1/2">
                <div className="flex-grow border-t border-black"></div>
                <span className="text-4xl font-dancing">Save The Date</span>
                <div className="flex-grow border-t border-black"></div>
              </div>

              <p className="text-xl font-extrabold text-gray-700">
                Saturday, August 9, 2025
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-start justify-center my-20 gap-40 w-full" >
            <div className="basis-1/2 flex flex-col justify-center space-y-4 text-center max-w-96   h-[100vh] sm:h-auto">
              <div className="flex justify-center mb-10">
                <Image
                  src="/ceremony.png"
                  alt="Ceremony"
                  width={300}
                  height={300}
                  className="w-28 rounded-xl"
                />
              </div>
              <h2 className="text-xl font-bold">Wedding Ceremony</h2>
              <p className="text-md font-extrabold text-gray-800">09:00 hrs.</p>
              <p className="text-md text-gray-600">Ceremony</p>
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
                Kostel sv. Markéty, U Sv. Markéty, 386 01 Strakonice 1
              </p>
              <div className="mt-auto">
                <ButtonLocation
                  title="Location"
                  url="https://goo.gl/maps/7Z3Z9Z9Z9Z9Z9Z9Z9"
                />
              </div>
            </div>
            <div className="basis-1/2 flex flex-col justify-start space-y-4 text-center max-w-96 h-[100vh] sm:h-auto">
              <div className="flex justify-center mb-10">
                <Image
                  src="/celebration.png"
                  alt="Celebration"
                  width={300}
                  height={300}
                  className="w-28 rounded-xl"
                />
              </div>
              <h2 className="text-xl font-bold">Wedding Reception</h2>
              <p className="text-md font-extrabold text-gray-800">
                12 :00 hrs.
              </p>
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
                Pension Regina U Rybníka 8, 382 11 Větřní
              </p>
              <div className="mt-auto">
                <ButtonLocation
                  title="Location"
                  url="https://goo.gl/maps/7Z3Z9Z9Z9Z9Z9Z9Z9"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
