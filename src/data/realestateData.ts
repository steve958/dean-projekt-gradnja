import main1 from '../assets/realestate/1-Kuca-Vis-Rukavac/main.jpg'
import oneimg1 from '../assets/realestate/1-Kuca-Vis-Rukavac/img1.jpg'
import oneimg2 from '../assets/realestate/1-Kuca-Vis-Rukavac/img2.jpg'
import oneimg3 from '../assets/realestate/1-Kuca-Vis-Rukavac/img3.jpg'
import oneimg4 from '../assets/realestate/1-Kuca-Vis-Rukavac/img4.jpg'
import oneimg5 from '../assets/realestate/1-Kuca-Vis-Rukavac/img5.jpg'
import oneimg6 from '../assets/realestate/1-Kuca-Vis-Rukavac/img6.jpg'

export interface Realestate {
    id:number
    mainImage:string
    titleCro:string
    titleEng:string
    price:string
    images: string[]
    descriptionCro:string
    descriptionEng:string

}


export const realestate = [
    {
        id:1,
        mainImage:main1,
        titleCro:'Novogradnja - Vis Rukavac, Srebrna Plaža',
        titleEng:'New house - Vis Rukavac, Srebrna Plaža',
        price:'340.000€',
        images:[oneimg1,oneimg2,oneimg3,oneimg4,oneimg5,oneimg6],
        descriptionCro:'',
        descriptionEng:''
    },
    {
        id:2,
        mainImage:main1,
        titleCro:'Novogradnja - Vis Rukavac, Srebrna Plaža',
        titleEng:'New house - Vis Rukavac, Srebrna Plaža',
        price:'340.000€',
        images:[oneimg1,oneimg2,oneimg3,oneimg4,oneimg5,oneimg6],
        descriptionCro:'',
        descriptionEng:''
    },
    {
        id:3,
        mainImage:main1,
        titleCro:'Novogradnja - Vis Rukavac, Srebrna Plaža',
        titleEng:'New house - Vis Rukavac, Srebrna Plaža',
        price:'340.000€',
        images:[oneimg1,oneimg2,oneimg3,oneimg4,oneimg5,oneimg6],
        descriptionCro:'',
        descriptionEng:''
    },
    {
        id:4,
        mainImage:main1,
        titleCro:'Novogradnja - Vis Rukavac, Srebrna Plaža',
        titleEng:'New house - Vis Rukavac, Srebrna Plaža',
        price:'340.000€',
        images:[oneimg1,oneimg2,oneimg3,oneimg4,oneimg5,oneimg6],
        descriptionCro:'',
        descriptionEng:''
    },
]