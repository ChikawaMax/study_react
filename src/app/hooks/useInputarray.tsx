import { useCallback, useState } from "react";

export const useInputarray = () => {

    const [text, setText] = useState("");
    const [array, setArray] = useState<any[]>([]);

    const handleAdd = useCallback(() => {
        setArray((prevArray) => {
            if (prevArray.some((item) => item === text)) {
                alert("すでに同じ要素が存在しています。")
                return prevArray
            }
            return [...prevArray, text]
        })
    }, [text])

    const handleChange = useCallback((e: any) => {
        if (e.target.value.length > 5) {
            alert("5文字以内にしてください！");
            return;
        }
        setText(e.target.value.trim());
    }, []);

    return { text, array, handleAdd, handleChange }
}