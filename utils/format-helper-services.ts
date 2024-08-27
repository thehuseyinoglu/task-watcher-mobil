import dayjs from "dayjs";
import "dayjs/locale/tr";



const formatDate = async(value:string)=>{
   return  dayjs(value).format("MMM D")
}

export const formatHelperServices = {
    formatDate
}