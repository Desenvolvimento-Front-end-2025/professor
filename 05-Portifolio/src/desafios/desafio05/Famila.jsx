import "./Famila.css";

const Familia = ( {sobrenome} )=>{


    return(
        <fieldset>
            <legend>Familia {sobrenome}</legend>

            Zezin Martins Pai<br />
            MAriazinha Martins Mãe<br />
                PEdrin Martins Filho<br />
                    Gustin MArtins Neto<br />
                Zezin Martins Filho<br />

        </fieldset>
    )
}

export default Familia