

const TextEmotion = ( {texto, emotion, size})=>{

    return (
        <span style={
            {
                fontSize: size,
                fontWeight: "bold",
                letterSpacing: '5px',
            }
            }>
            {emotion} {texto}
        </span>
    )

}

export default TextEmotion