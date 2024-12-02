import { useEffect, useState } from "react";

export const Cronometro = () => {
    const [time, setTime] = useState([0, 0]); // [minutes, seconds]
    const [running, setRunning] = useState(true);

    useEffect(() => {
        let timer;

        if (running) {
            timer = setInterval(() => {
                setTime(([m, s]) =>
                    s === 59 ? [m + 1, 0] : [m, s + 1]
                );
            }, 1000);
        }

        return () => clearInterval(timer);
    }, [running]);

    return (
        <article>
            <h2>Minutos: {time[0]} Segundos: {time[1]}</h2>
            <button onClick={() => setRunning(false)}>DETENER</button>
            <button onClick={() => setRunning(true)}>REANUDAR</button>
            <button onClick={() => setTime([0, 0])}>REINICIAR</button>
        </article>
    );
};
