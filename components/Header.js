import { SearchIcon, FlagIcon } from '@heroicons/react/outline'


function Header() {
    return (
        
     <header className="sticky top-0 z-50  bg-white  ">


<div class="flex">
    <div class="w-auto md:w-full  flex">
    <FlagIcon className="h-5 w-5 ml-3"/>
<div class=" ml-1 mr-1 tracking-wide hidden md:block text-lg ">mirifiques</div>




    </div>



    <div class="flex w-full  md:w-full   ">
    <input className="pl-1 w-full   md:bg-transparent outline-none   placeholder-black" type="text" placeholder="Votre recherche ..." />
    <SearchIcon className="h-5 w-5 "/>	 



    </div>
    
    
    
    
    <div class="w-auto md:w-full  ml-1">
    <div class="text-right md:absolute right-5">loginsignup</div>

    </div>



</div>





</header>

        
    )
}

export default Header
