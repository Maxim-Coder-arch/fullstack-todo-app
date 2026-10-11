import type { FilterChoice, IFilterConfig } from "./todo-manager"

interface FilterChoiceManagerProps {
    filterConfig: IFilterConfig[];
    activeFilter: FilterChoice
    changeActiveFilter: (variant: FilterChoice) => void;
}

export const FilterChoiceManager = ({ filterConfig, activeFilter, changeActiveFilter }: FilterChoiceManagerProps) => {
    return (
        <div className="w-full p-3 bg-mist-700 rounded-lg flex justify-between gap-2">
            {filterConfig.map(confing => {
                return (
                    <button className={`cursor-pointer px-2 py-1 rounded-lg transition-colors font-bold text-mist-300 ${activeFilter === confing.value ? "bg-green-700 hover:bg-green-600" : "bg-mist-600 hover:bg-mist-500"}`} onClick={() => changeActiveFilter(confing.value)}>{confing.label}</button>
                )
            })}
        </div>
    )
}