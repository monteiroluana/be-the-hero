import React from 'react';

// export default function Header(props){
export default function Header({children}){
    return(
        <header>
            {/* <h1>{props.title}</h1> */}
            <h1>{children}</h1> {/*Retorna todo o conteudo de dentro do componente*/}
        </header>
    );
}

