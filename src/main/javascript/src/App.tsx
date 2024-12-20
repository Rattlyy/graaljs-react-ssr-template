import {Route, Routes} from "react-router";
import {ReactNode} from "react";
import {ThemeProvider} from "@/components/theme-provider.tsx";

export function Providers({children}: { children: ReactNode }) {
    return <>
        <ThemeProvider>
            {children}
        </ThemeProvider>
    </>
}

export function Routing() {
    return <Routes>
        <Route path={"/"} element={<App/>}/>
        <Route path={"*"} element={<div>Not Found</div>}/>
    </Routes>
}

function App() {
    return <div>Ciao!</div>
}