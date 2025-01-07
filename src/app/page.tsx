import ButtonLink from "@/app/components/ButtonLink";
import Countdown from "@/app/components/Countdown";


export default function Home() {


    return (
        <div>

            <div className=" w-full h-32 overflow-hidden relative
                           sm:h-[80vh]">

                <img src="/main.jpg" alt="My dva"
                     className="h-auto w-full -z-5 mx-auto absolute opacity-45"/>

                <div className="bg-gradient-to-r from-violet-500 to-white relative top-4 max-w-[40vw] mx-auto p-4 sm:top-[40vh]
                                sm:h-40">
                    <div className="font-bold text-white text-2xl text-center
                                  sm:mt-12">Martin a Šárka
                    </div>
                </div>
            </div>
            <div>
                <Countdown />
            </div>

            Ahoj JMENO_CLOVEKA blabla a lorem ipsum

            <div className="flex-col">
                <ButtonLink title="Obřad" url="404"></ButtonLink>
                <ButtonLink title="O nás" url="about"></ButtonLink>
            </div>


        </div>
    );
}
