import Image from "next/image";

export default function Layout({ children }: {children: React.ReactNode}) {
  return (
    <>
      <div className="w-screen h-screen flex flex-col justify-between">
        <div className="h-full">
          <main className="h-full">{children}</main>
        </div>

        <footer className="text-center p-5 bg-slate-100 fixed w-screen bottom-0 flex flex-row justify-evenly">
          <p>Created by Daniel Kalstad</p>
          <a href="https://github.com/DanielDK05/NB_OppgaveFrontend" target="_blank" className="text-purple-600 underline">Github</a>
        </footer>
      </div>
    </>
    )
}
