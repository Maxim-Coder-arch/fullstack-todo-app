
interface IStatsManagerProps {
    changeAddedTaskState: () => void;
    isAddedNewtask: boolean;
}

export const StatsManager = ({ changeAddedTaskState, isAddedNewtask }: IStatsManagerProps) => {
    return (
        <div className="w-full p-3 bg-mist-700 rounded-lg flex justify-between gap-2 items-center">
            <span className="rounded-full bg-green-700 w-[30px] h-[30px] flex items-center justify-center font-bold text-mist-300">3</span>
        
            <button className="cursor-pointer" onClick={changeAddedTaskState}>
                {!isAddedNewtask ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32">
                        <path d="M0 0h32v32H0z" fill="none" />
                        <path fill="white" d="M23 30h-2v-6h-6v-2h6v-6h2v6h6v2h-6zm-10-2H5c-1.103 0-2-.897-2-2V4c0-1.103.897-2 2-2h16c1.103 0 2 .897 2 2v8H5v6h8v2H5v6h8zM5 10h16V4H5zm3-4a1 1 0 1 0 0 2a1 1 0 0 0 0-2m0 8a1 1 0 1 0 0 2a1 1 0 0 0 0-2m0 8a1 1 0 1 0 0 2a1 1 0 0 0 0-2" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024">
                        <path d="M0 0h1024v1024H0z" fill="none" />
                        <path fill="white" fillRule="evenodd" d="M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.1.1 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.12.12 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.1.1 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926L224.297 857.629c-.04.041-.06.052-.083.059a.12.12 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.1.1 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512L166.371 224.297c-.041-.04-.052-.06-.059-.083a.12.12 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.1.1 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.12.12 0 0 1 .07 0Z" />
                    </svg>
                )}
            </button>

        </div>
    )
}