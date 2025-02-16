
import TimelineItem from "@/app/components/Timeline/TimelineItem";
import {SexEnum} from "@/app/components/Timeline/SexEnum";


export default function Timeline() {
    return (
        // Container with the vertical line
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">


                <TimelineItem date={'1985'} text={'Narození nevěsty, Chodov, okr. Sokolov '} imgUrl={'bride_born.jpg'} sex={SexEnum.x}/>


                <TimelineItem date={'1986'} text={'Narození ženicha, Řepice okr. Strakonice'} sex={SexEnum.y} />


                <TimelineItem date={'1990'} text={'Martin úplně nevyniká v plavání a ve školce dostává diplom kapra.' +
                ' Myslí si, že želvu nikdo nikdy nedostane. Že je tam želva jen proto, aby se kapři necítili špatně.'}sex={SexEnum.y}/>


                <TimelineItem date={'1990'} text={'Šárka dostává za plavání ve školce želvu.'} sex={SexEnum.x}/>

                <TimelineItem date={'1992'} text={'Šárka nastupuje do školy. Na tělocviku je druhá nejvyšší a vyniká hlavně ve volejbale a basketu. '} sex={SexEnum.x}/>

                <TimelineItem date={'1992'} text={'Martin je na tělocviku druhý nejmenší, vyniká hlavně v opičí dráze a úklidu náčiní.'} sex={SexEnum.y}/>

                <TimelineItem date={'2006'} text={'Martin úspěšně ukončuje pátý rok čtyřletého gymnázia a nastupuje na vysokou s plánem strávit tam dalších pět let.'} imgUrl={'matura.jpg'}   sex={SexEnum.y}/>

                <TimelineItem date={'2016'} text={'Po deseti letech Martin slaví zakončení na střeše univerzity.'} imgUrl={'uni.png'}  sex={SexEnum.y}/>

                <TimelineItem date={'2017'} text={'Martin po 28 letech strávených ve vzdělávacích zařízení vydělal prvních 150 korun za celodenní práci v cihelně uprostřed laoské džungle.'} sex={SexEnum.y}/>

                <TimelineItem date={'2017'} text={'Martin nastupuje do práce v malém německém městě, kde se zastavil čas a osazenstvo místního baru se baví tím,' +
                'že nezná význam slova Tschechisches Ungeziefer. Což je dobře, jelikož po pár bavorskejch pivech má člověk pocit, že byl z celé třídy vždy nejvyšší a ramena takový, že na nich vynese celou bavorskou hospodu.'} sex={SexEnum.y}/>

                <TimelineItem date={'2018'} text={'Martin si zamiluje film Pan a Paní Adelmanovi a hlavně její představitelku Doriu Tillier. '} imgUrl={'tillier.png'}  sex={SexEnum.y}/>

                <TimelineItem date={'2018'} text={'Otráven samotou, Martin píše svědkyni, která pracuje ve školce, zda pro něj v práci nemá nějakou učitelku. Nejlíp s ostrym nosem. "Máme, ale je to ředitelka, má 180 cm a je zadaná", zněla odpověď.'} imgUrl={'sarka.png'}  sex={SexEnum.y}/>

                <TimelineItem date={'2018'} text={'A tak po pár bavorskejch pivech, Martin píše motivační dopis, proč by pro Šárku chtěl pracovat. A že její školka ' +
                    'nutně potřebuje jeho IT řešení.'}   sex={SexEnum.y}/>

                <TimelineItem date={'2018'} text={'Zacalo to pracovni schuzkou a po mesici prislo prvni rande. I kdyz jsme se znali jen krátce, připadalo nám, že se známe roky.'}   sex={SexEnum.x}/>

                <TimelineItem date={'2018'} text={'Kvuli covidu se prodlouzila rekonstrukce domu'}   sex={SexEnum.y}/>

            <TimelineItem date={'2018'} text={'Mame spoust dalsich planu, jen je treba je zprioritizovat.'}   sex={SexEnum.x}/>

        </div>

    )
}