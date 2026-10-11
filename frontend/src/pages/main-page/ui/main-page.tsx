import { TodoManager } from "../../../widgets/todo-manager"

import { TodoManagerLayout } from "./layout"

export const MainPage = () => {
    return (
        <TodoManagerLayout>
            <TodoManager />
        </TodoManagerLayout>
    )
}