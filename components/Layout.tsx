import Header from "./Header";

export default function Layout({ children, Menu }: any) {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <header className="bg-yellow-100 sticky top-0 h-14 flex justify-center items-center font-semibold uppercase">
          Blind Market
        </header>
        <div className="flex flex-col md:flex-row flex-1">
          <aside className="bg-fuchsia-100 w-full md:w-60">
            <Header />
          </aside>
          <main className="flex-1">{children}</main>
        </div>
      </div>
    </>
  );
}
