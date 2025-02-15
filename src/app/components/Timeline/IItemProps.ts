import {SexEnum} from "@/app/components/Timeline/SexEnum";

export interface IItemProps {
    date:string;
    text:string;
    sex:SexEnum;
    imgUrl?:string;
}