import { SearchIcon } from '@heroicons/react/solid'


function Header() {
    return (
        
     <div className="grid grid-cols-3">
  {/* logo section */}
 
  <div className="hidden md:block">
  <p className="text-2xl font-bold pl-4">
              mirifiques
            </p>

  </div>
  {/* search section  */}
<div>

<div className="relative  text-black">
  <div className="flex items-center border-b border-b-1 border-black py-2">
	<input className="bg-transparent w-full border-none mr-3 px-2 leading-tight focus:outline-none text-black" type="text" placeholder="Votre recherche ici..."></input>
	<SearchIcon className="h-5 w-5"/>
 
</div>
</div>



</div>


        


 
{/* login section  */}
  <div className="">
  <div class="absolute right-8">login / Sign up</div>
  </div>



</div>

        
    )
}

export default Header
