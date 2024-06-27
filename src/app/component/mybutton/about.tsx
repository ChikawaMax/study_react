"use client"

import { BgChange } from "../../hooks/bgChange";
import { useCounter } from "../../hooks/useCounter";
import { useInputarray } from "../../hooks/useInputarray";

export const MyButtonabout = () => {

    const { isShow, doublecount, handleClick, handleDisplay } = useCounter();
    const { text, array, handleAdd, handleChange } = useInputarray();
    BgChange();

    return (
        <div>

            {isShow ? <h1>{doublecount}</h1> : null}

            <button className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                onClick={handleDisplay}
            >{isShow ? "非表示" : "表示"}</button>
            <br />

            <button type="button" className="t focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                onClick={handleClick}
            >ボタン</button>

            <input className="bg-blue-700" type="text" value={text} onChange={handleChange} />
            <button onClick={handleAdd}>追加</button>
            <ul>
                {array.map((item) => {
                    return <li key={item}>{item}</li>
                })}
            </ul>

        </div>
    );
}