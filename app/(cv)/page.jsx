import {Fotter, InfoWithMe, MenuTop, Proyects} from "../components"


export default async function Home() {




 
  return (
    <>
    
   
    <div className="grid grid-cols-1 sm:grid-cols-2">
    <InfoWithMe/>
    <Proyects/>
    </div>
    
   

    </>
  );
}