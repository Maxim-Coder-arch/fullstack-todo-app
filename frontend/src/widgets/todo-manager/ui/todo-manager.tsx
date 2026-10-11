import { useState } from "react";
import { StatsManager } from "./stats-manager";
import { FilterChoiceManager } from "./filter-choice-manager";
import { AddTaskWindow } from "./add-task-window";

export enum FilterChoice {
    all = "all",
    completed = "completed",
    uncompleted = "uncompleted",
}

export interface IFilterConfig {
    label: string;
    value: FilterChoice;
}

const filterConfig: IFilterConfig[] = [
    {
        label: "Все",
        value: FilterChoice.all
    },
    {
        label: "Выполненные",
        value: FilterChoice.completed
    },
    {
        label: "Невыполненные",
        value: FilterChoice.uncompleted
    },
]

export const TodoManager = () => {
    const [activeFilter, setActiveFilter] = useState(FilterChoice.all);
    const [isAddedNewtask, setIsAddedNewTask] = useState(false);

    const changeActiveFilter = (variant: FilterChoice) => {
        setActiveFilter(variant)
    }

    const changeAddedTaskState = () => {
        setIsAddedNewTask(
            prev => !prev
        )
    }

    return (
        <div className="min-h-[400px] min-w-[350px] bg-mist-800 rounded-lg outline-dashed outline-1 outline-offset-4 outline-mist-700 shadow-2xl shadow-amber-100/20 p-3 flex flex-col items-center gap-3 relative">
            <h1 className="text-2xl text-mist-400 font-bold">Todo manager</h1>

            <FilterChoiceManager
                filterConfig={filterConfig}
                activeFilter={activeFilter}
                changeActiveFilter={changeActiveFilter}
            />

            <StatsManager changeAddedTaskState={changeAddedTaskState} isAddedNewtask={isAddedNewtask} />

            { isAddedNewtask && <AddTaskWindow /> }
        </div>
    )
}