import { SearchIcon, FlagIcon } from '@heroicons/react/outline'


function Header() {
    return (
        
     <header className="sticky top-0 z-50 grid grid-cols-3 bg-white  ">
  {/* logo section */}
 
  <div className="relative flex  items-center  cursor-pointer my-auto bg-green-400 md:w-auto ">
  <FlagIcon className="h-6 w-6 " />
  <p className="text-xl font-bold pl-4 align-middle hidden md:block md:relative">
              mirifiques
            </p>

  </div>
  {/* search section  */}
<div>

<div className="relative  text-black flex-grow items-center">
  <div className="flex items-center border-b border-b-1 border-black py-2 bg-yellow-600">
	<input className="bg-transparent w-full border-none mr-3 px-2 leading-tight focus:outline-none text-black" type="text" placeholder="Votre recherche ici..."></input>
	<SearchIcon className="h-5 w-5"/>
 
</div>
</div>



</div>


        


 
{/* login section  */}
  <div className="relative bg-blue-400">
  <div class="absolute right-8 ">login / Sign up</div>
  </div>



</header>

        
    )
}

export default Header
