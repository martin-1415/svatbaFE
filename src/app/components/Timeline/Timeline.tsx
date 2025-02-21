
import TimelineItem from "@/app/components/Timeline/TimelineItem";
import {SexEnum} from "@/app/components/Timeline/SexEnum";


export default function Timeline() {
    return (
        // Container with the vertical line
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">


            <TimelineItem date={'1985'} text={'Narodila se 9.12. ve znamení ,,střelce” a dostala jméno podle pověsti o Ctiradovi a Šárce (snad mužského protějška nezradí stejně jako hrdinka pověsti)'} sex={SexEnum.x}/>


            <TimelineItem date={'1986'} text={'Narození 20.3.1986.'} sex={SexEnum.y} />


            <TimelineItem date={'1992'} text={'Nastupuje do školy. Na tělocviku je druhá nejvyšší a vyniká hlavně ve volejbale a běhu přes překážky. '} sex={SexEnum.x}/>

            <TimelineItem date={'1992'} text={'Je na tělocviku druhý nejmenší, vyniká hlavně v opičí dráze a úklidu náčiní.'} sex={SexEnum.y}/>


            <TimelineItem date={'1993'} text={'Chodí na ,,diskotance” a vystupuje s kroužkem na diskotékách a pořádaných akcích města'} sex={SexEnum.x}/>



             <TimelineItem date={'1995'} text={'Úplně nevyniká v plavání a ve školce dostává diplom kapra.' +
                    ' Myslí si, že želvu nikdo nikdy nedostane. Že je tam želva jen proto, aby se kapři necítili špatně.'} sex={SexEnum.y}/>


             <TimelineItem date={'1995'} text={'Dostává za plavání ve školce želvu. Má panickou hrůzu z vody.'} sex={SexEnum.x}/>

            <TimelineItem date={'2001'} text={'Má jedinečný a charakteristický zpěvný hlas podobný vrzání pantů \n' +
                'a proto úspěšné složení talentových zkoušek a přijetí na střední pedagogickou školu považuje za velký úspěch. Možná srovnatelný s diplomem plavání.'} sex={SexEnum.x}/>

            <TimelineItem date={'2002'} text={'Stala se pirátem silnic v bledě modrém favoritu - získala řidičák. S tátou udělala na silnici hodiny....táta: ,,co to bylo" Šárka: ,,nic, zachránila jsem nás!"'} sex={SexEnum.x}/>

            <TimelineItem date={'2003'} text={'Spoluzakládá breakdance ve Strakonicích.'} imgUrl={'break.png'} sex={SexEnum.y}/>

            <TimelineItem date={'2005'} text={'Odmaturovala a stala se učitelkou. Byla přijata na vysokou školu do velkých měst, ale bohužel nevyšla Praha, která ji očarovala…chtěla se pokusit studovat na ,,akademického malíře” v příštím roce a tak se stěhuje do Prahy plnit si sen být ilustrátorkou dětských knih. '} sex={SexEnum.x}/>

            <TimelineItem date={'2006'} text={'Úspěšně ukončuje pátý rok čtyřletého gymnázia a nastupuje na vysokou s plánem strávit tam dalších pět let.'} imgUrl={'matura.jpg'}   sex={SexEnum.y}/>


            <TimelineItem date={'2006'} text={'Začala pracovat, aby mohla platit nájem. Našla si práci ve školce a práce s dětmi ji nadchla a přivedla k novému cíli - založit si svou školku'} sex={SexEnum.x}/>

            <TimelineItem date={'2007'} text={'Zakládá si soukromou školku v Praze a maká od nevidím do nevidím.'} sex={SexEnum.x}/>

            <TimelineItem date={'2007'} text={'Pořizuje si RD, kousek od Prahy. Po letech zjišťuje, že dům jí byl souzen - objevuje se totiž ve filmu "Červnové dny /1961/", kde se v něm odehrává hlavní děj, je totiž domem hlavní hrdinky Šárky '} sex={SexEnum.x}/>

            <TimelineItem date={'2007'} text={'Na tělocviku VŠ si zapisuje kurz plavání. Opět exceluje při úklidu náčiní a už nikdy nechce být kaprem! '} sex={SexEnum.y} imgUrl={'plavani.jpg'}/>

            <TimelineItem date={'2010'} text={'Je, vlastně omylem, vybrán na stáž v Moskvě.'} imgUrl={'arab.jpg'} sex={SexEnum.y}/>

            <TimelineItem date={'2012'} text={'Odjíždí na největší ruskou univerzitu v Čeljabinsku, s jeho kámošem Joshem se snaží přesvědčit místní STB zvanou OMON, že ' +
                'nepřišli na demonstraci proti Putionovi, ale jako turisti si přišli večer udělat fotku s Leninovou sochou. Než je OMON vyhodí, ještě se stihnou ' +
                'udělat fotku s hlavním OMONátorem, s červeným nosem a amplionem.'} sex={SexEnum.y} imgUrl={'chely.png'}/>

            <TimelineItem date={'2013'} text={'Odjíždí na stáž do nejlepšího jaderného ruského výzkumného centra Dubno obehnaného elektickým plotem.' +
                ' Chtěli zjistit, zda je v tom opravdu elektrika, ale bylo jim líto tý kočky. '} imgUrl={'el.png'} sex={SexEnum.y}/>

            <TimelineItem date={'2014'} text={'Na rok odjíždí na univerzitu v Manchesteru, kterému se tam přezdívá Gaychester.'} sex={SexEnum.y} imgUrl={'manch.jpg'}/>

            <TimelineItem date={'2014'} text={'15.10. se jí narodilo první "miminko", který ji posunulo život zase' +
                ' jiným směrem a potkala zase nové zajímavé lidi. Začala s ním cvičit, chodit na obrany a jezdit po' +
                ' výstavách i do zahraničí - v EU i mimo. '} sex={SexEnum.x} imgUrl={'psi.png'}/>


            <TimelineItem date={'2015'} text={'Úspěšně složila kurz potápění a začala se aktivně potápět. Zamilovala se do ticha, který pod hladinou vládne a do pocitu beztíže /jak fyzické, tak psychické/'} imgUrl={'potapec.jpg'}  sex={SexEnum.x}/>

            <TimelineItem date={'2015'} text={'Odjiždí na rok na TU Berlín, kde mezinárodní družbu ruší Syrský imigranti, ' +
                'co prostě musí kazit zábavu a posílaj na vás Polizei, jen pro to, že oni se bavit nechtějí.'} sex={SexEnum.y} imgUrl={'berlin.png'}  />


            <TimelineItem date={'2016'} text={'A po deseti letech konečně slaví zakončení univerzity.'} imgUrl={'uni.png'}  sex={SexEnum.y}/>

            <TimelineItem date={'2017'} text={'Nastupuje do práce v německém maloměstě, kde se zastavil čas a osazenstvo místního baru se baví tím,' +
            'že nezná význam slova Tschechisches Ungeziefer. Což je dobře, jelikož po pár bavorskejch pivech má člověk pocit, že byl z celé třídy vždy nejvyšší a ramena takový, že na nich vynese celou bavorskou hospodu.'} sex={SexEnum.y}/>

            <TimelineItem date={'2018'} text={' V německu si zamiluje film Pan a Paní Adelmanovi a hlavně její představitelku Doriu Tillier. '} imgUrl={'tillier.png'}  sex={SexEnum.y}/>

            <TimelineItem date={'2018'} text={'Otráven samotou, píše svědkyni, která pracuje ve školce, zda pro něj v práci nemá nějakou učitelku. Nejlíp s výrazným bličejovým rysem, jako má Doria. "Máme, ale je to ředitelka a má 180 cm", zněla odpověď.'} imgUrl={'sarka.png'}  sex={SexEnum.y}/>

            <TimelineItem date={'2018'} text={'Nechce mít děti jen cizí ve školce a začne hledat toho pravého a v tom se do toho vloží ženichovo svědkyně "Já mám jednoho kamaráda"'} sex={SexEnum.x}/>

            <TimelineItem date={'2018'} text={'Po pár bavorskejch pivech, Martin píše motivační dopis, proč by pro Šárku chtěl pracovat. A že její školka ' +
                'nutně potřebuje jeho IT řešení.'}   sex={SexEnum.y}/>


        </div>



    )
}