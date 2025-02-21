const Header = ({ searchValue, onHandleChange }) => {
  return (
        <header id="header" className="bg-primary w-full px-6 py-5 z-50 fixed top-0 shadow-lg transition-all transform ease-in-out duration-500">
            <div className="max-w-2xl lg:max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-y-4 gap-x-10">
                <a className="flex items-center" href="/">
                    <img className="h-8 w-8" src="/brain.png" />
                    <p className="font-bold ml-3.5">Semana del Cerebro UNAH</p>
                </a>
                <form id="search" className="order-last sm:order-none flex flex-grow items-center justify-end">
                    <input type="text" id="header-searchbox" name="q" placeholder="Buscar eventos..." className="w-full lg:max-w-[400px] bg-custom-white border border-transparent float-right focus:bg-white focus:border-slate-300 focus:outline-none h-8 p-4 placeholder-slate-500 rounded text-slate-700 text-sm" value={searchValue} onChange={({ target: { value } }) => onHandleChange(value)} />
                </form>
            </div>
        </header>
  );
};

export default Header;