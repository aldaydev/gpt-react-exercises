const Greeting = ({name})=>{
    return (
            <h2>{name ? `¡Hola ${name}!` : '¡Hola, amigo!'}</h2>
    );
};

export default Greeting;