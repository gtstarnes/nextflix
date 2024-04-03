import Link from 'next/link'


const NavBar = () => {
    let isLoggedIn = false;
  return (
    <div className="flex justify-between p-8 z-50 bg-transparent absolute top-0 left-0 w-full">
        <h4 className="text-red-500 text-[1.8rem] lg:text-[3rem] font-bold">NEXTFLIX</h4>
        <nav>
            <ul>
                <li>
                    {!isLoggedIn ? 
                    <button className="bg-red-500 py-2 px-4 rounded-sm 
                                        hover:rounded-none hover:bg-red-700">
                        <Link href="/login">
                            Sign In
                        </Link>
                    </button>:
                    <button className="bg-red-500 py-2 px-4 rounded-sm 
                                        hover:rounded-none hover:bg-red-700">
                        <Link href="/">
                            Sign Out
                        </Link>
                    </button>}
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar