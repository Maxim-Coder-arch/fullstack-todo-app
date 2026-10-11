import type { ReactNode } from "react"

export const TodoManagerLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="min-h-screen flex justify-center items-center bg-mist-900">
            { children }
        </div>
    )
}