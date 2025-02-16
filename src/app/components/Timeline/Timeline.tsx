
import TimelineItem from "@/app/components/Timeline/TimelineItem";
import {SexEnum} from "@/app/components/Timeline/SexEnum";


export default function Timeline() {
    return (
        // Container with the vertical line
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">


                <TimelineItem date={'1985'} text={'Narození 9.12.1985, Chodov, okr. Sokolov '} sex={SexEnum.x}/>


                <TimelineItem date={'1986'} text={'Narození 20.3.1986, Strakonice'} sex={SexEnum.y} />


                <TimelineItem date={'1990'} text={'Úplně nevyniká v plavání a ve školce dostává diplom kapra.' +
                ' Myslí si, že želvu nikdo nikdy nedostane. Že je tam želva jen proto, aby se kapři necítili špatně.'} sex={SexEnum.y}/>


                <TimelineItem date={'1990'} text={'Dostává za plavání ve školce želvu.'} sex={SexEnum.x}/>

                <TimelineItem date={'1992'} text={'Nastupuje do školy. Na tělocviku je druhá nejvyšší a vyniká hlavně ve volejbale a běhu přes překážky. '} sex={SexEnum.x}/>

                <TimelineItem date={'1992'} text={'Je na tělocviku druhý nejmenší, vyniká hlavně v opičí dráze a úklidu náčiní.'} sex={SexEnum.y}/>

                <TimelineItem date={'2003'} text={'Spoluzakládá breakdance ve Strakonicích.'} imgUrl={'break.png'} sex={SexEnum.y}/>

                <TimelineItem date={'2005'} text={'Ukončuje střední pedagogickou školu a stává se učitelkou.'} sex={SexEnum.x}/>

                <TimelineItem date={'2006'} text={'Úspěšně ukončuje pátý rok čtyřletého gymnázia a nastupuje na vysokou s plánem strávit tam dalších pět let.'} imgUrl={'matura.jpg'}   sex={SexEnum.y}/>

                <TimelineItem date={'2007'} text={'Zakládá firmu Malíčkov.'} sex={SexEnum.x}/>

                <TimelineItem date={'2007'} text={'Kupuje dům v Libušíně.'} sex={SexEnum.x}/>

                <TimelineItem date={'2007'} text={'Na tělocviku VŠ si zapisuje kurz plavání. Opět exceluje při úklidu náčiní a už nikdy nechce být kaprem! '} sex={SexEnum.y} imgUrl={'plavani.jpg'}/>

                <TimelineItem date={'2010'} text={'Je omylem vybrán na stáž v Moskvě.'} imgUrl={'arab.jpg'} sex={SexEnum.y}/>

                <TimelineItem date={'2012'} text={'Odjíždí na univerzitu v ruském Čeljabinsku, s jeho kámošem Joshem se snaží přesvědčit místní STB zvanou OMON, že ' +
                    'nepřišli na demonstraci proti Putionovi, ale jako turisti si přišli večer udělat fotku s Leninovou sochou. Než je OMON vyhodí, ještě se stihnou ' +
                    'udělat fotku s hlavním OMONátorem, s červeným nosem a amplionem.'} sex={SexEnum.y} imgUrl={'chely.png'}/>

                <TimelineItem date={'2013'} text={'Odjíždí na stáž do nejlepšího jaderného ruského výzkumného centra Dubno obehnaného elektickým plotem.' +
                    ' Chtěli jsme zjistit, zda je v tom opravdu elektrika, ale bylo nám líto tý kočky. '} imgUrl={'el.png'} sex={SexEnum.y}/>

                <TimelineItem date={'2015'} text={'Na rok odjíždí na univerzitu v Manchesteru, kterému se tam přezdívá Gaychester.'} sex={SexEnum.y} imgUrl={'manch.jpg'}/>

                <TimelineItem date={'2014'} text={'Psi.'} sex={SexEnum.x}/>



                <TimelineItem date={'2015'} text={'Stává se potapěčkou.'} imgUrl={'potapec.jpg'}  sex={SexEnum.x}/>

                <TimelineItem date={'2015'} text={'Odjiždí na rok na TU Berlín, kde mezinárodní družbu ruší Syrský muslimové, co nevylezou z pokoje, ale posílají na vás Polizei za rušení klidu.'} sex={SexEnum.y} imgUrl={'berlin.png'}  />


                <TimelineItem date={'2016'} text={'Po deseti letech konečně slaví zakončení na střeše univerzity.'} imgUrl={'uni.png'}  sex={SexEnum.y}/>

                <TimelineItem date={'2017'} text={'Nastupuje do práce v německém maloměstě, kde se zastavil čas a osazenstvo místního baru se baví tím,' +
                'že nezná význam slova Tschechisches Ungeziefer. Což je dobře, jelikož po pár bavorskejch pivech má člověk pocit, že byl z celé třídy vždy nejvyšší a ramena takový, že na nich vynese celou bavorskou hospodu.'} sex={SexEnum.y}/>

                <TimelineItem date={'2018'} text={'Zamiluje si film Pan a Paní Adelmanovi a hlavně její nedostižitelnou představitelku Doriu Tillier. '} imgUrl={'tillier.png'}  sex={SexEnum.y}/>

                <TimelineItem date={'2018'} text={'Otráven samotou, píše svědkyni, která pracuje ve školce, zda pro něj v práci nemá nějakou učitelku. Nejlíp s výrazným bličejovým rysem, jako má Doria. "Máme, ale je to ředitelka a má 180 cm", zněla odpověď.'} imgUrl={'sarka.png'}  sex={SexEnum.y}/>

                <TimelineItem date={'2018'} text={'A tak po pár bavorskejch pivech, Martin píše motivační dopis, proč by pro Šárku chtěl pracovat. A že její školka ' +
                    'nutně potřebuje jeho IT řešení.'}   sex={SexEnum.y}/>


        </div>



    )
}