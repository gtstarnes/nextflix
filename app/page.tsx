import Image from 'next/image'

export default function Home() {
  return (
      <>
      <div className="flex flex-col justify-center h-screen">
        <div className="flex flex-col self-center items-center mb-40 mt-[-240px]">
          <h1 className="text-red-600 font-extrabold text-[4rem]">NEXTFLIX</h1>
          <h3 className="">Dojo for tv, movies, documentaries, and more</h3>
        </div>
        <form className="flex flex-col w-[50%] self-center bg-red-600 rounded pt-8 px-2 mt-[-20px]">
          <fieldset className="flex flex-col gap-2 items-center justify-center w-auto">
            <label htmlFor="username">
              Username
              <input type='text' name="username" id="username" className="ml-4"></input>
            </label>
            <label htmlFor="password">
              Password
              <input type='password' name="password" id='password' className="ml-4"></input>
            </label>
            <button type="submit">Submit</button>
          </fieldset>
          <p className="self-end text-xs mt-6 m-4">Don't have an account? Create one <a href="#" className="text-blue-600">here</a></p>
        </form>
        
      </div>
      </>
  )
}
