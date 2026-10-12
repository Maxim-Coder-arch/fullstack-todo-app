import { useEffect, useRef, useState, type ChangeEvent } from "react"

export const AddTaskWindow = () => {
    const descriptionTextRef = useRef<HTMLTextAreaElement>(null);

    const [descriptionText, setDescriptionText] = useState("");
    const [title, setTitle] = useState("");

    const titleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const targetText = e.target.value;
        setTitle(e.target.value);
    }

    const changeDescriptionText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setDescriptionText(e.target.value)
    }

    useEffect(() => {
        const current = descriptionTextRef.current;

        if (current) {
            current.style.height = "auto";
            current.style.height = (current.scrollHeight) + "px";
        }
    }, [descriptionText]);

    return (
        <div className="absolute min-w-[150px] min-h-full bg-mist-800 rounded-lg top-0 left-[calc(100%+16px)]">
            
            <form className="flex flex-col gap-[12px] items-center p-3">
                <input type="text" placeholder="Title" className="bg-mist-600 p-2 rounded-lg font-bold text-mist-200" />
                <textarea ref={descriptionTextRef} onChange={changeDescriptionText} value={descriptionText} placeholder="Description" className="bg-mist-600 p-2 rounded-lg font-bold text-mist-200 w-full"></textarea>
            
                <div className="flex gap-2 w-full">
                    <button className="bg-green-700 font-bold text-mist-300 w-full py-1.5 text-sm rounded-lg cursor-pointer hover:bg-green-600 transition-colors">Add task</button>
                    <button className="bg-red-700 font-bold text-mist-300 w-full py-1.5 text-sm rounded-lg cursor-pointer hover:bg-red-600 transition-colors">Clear and close</button>
                </div>
            </form>
        </div>
    )
}