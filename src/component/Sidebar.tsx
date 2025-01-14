export function Sidebar(){
    return <div className="bg-white text-black h-screen w-48 flex flex-col text-center">
        <div className="text-2xl font-extrabold p-10">SlideBar</div>
        <div className="decoration-none hover:text-lg p-4 font-bold"><a href="/signin">Signin</a></div>
        <div className="decoration-none hover:text-lg p-4 font-bold"><a href="/">Videos</a></div>
        <div className="decoration-none hover:text-lg p-4 font-bold"><a href="/">Documents</a></div>
        <div className="decoration-none hover:text-lg p-4 font-bold"><a href="/">Links</a></div>
        <div className="decoration-none hover:text-lg p-4 font-bold"><a href="/">Tags</a></div>
    </div>
}