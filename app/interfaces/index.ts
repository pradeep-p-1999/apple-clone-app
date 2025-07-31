export interface User{
    name:string;
    age:number;
    gender:string;
}

export interface iBenefitCard {
    title: string;  
    icon: any;
    description: string;    }

export interface iExploreCard{
    title: string;
  description: string;
  price: string;
  imageSrc: string;
  learnMoreLink: string;
  buyLink: string;
  colors: string[];
}