import NavBar from "../../shared/navbar";

export default function Layout({children}: React.PropsWithChildren) {
    return <>
        <NavBar/>
        <main className="pt-4 bg-[#F4EFE4]">{children}</main>
        
    </>
}