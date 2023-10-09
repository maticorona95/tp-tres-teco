import { header } from '../../data';



const Header = () => {
    const { h1,noticiaUno,comentarioUno,noticiaDos,ComentarioDos ,noticiaTres,comentatioTres,
    } = header

    {
        return (

            <main >
                <div class="not2">
                    <div>
                        <h1>{h1}</h1>
                    </div>

                    <article id="noticia_1">
                        <header>
                            <h3>{noticiaUno}</h3>
                        </header>
                        <p>
                            {comentarioUno} <a
                                href="https://flukeout.github.io/">aqui</a>
                        </p>

                    </article>
                    <article class="noticia" id="noticia_2">
                        <header>
                            <h3>{noticiaDos}</h3>
                        </header>
                        <p> {ComentarioDos}
                        </p>

                    </article>
                    <article class="noticia" id="noticia_3">
                        <header>
                            <h3>{noticiaTres}</h3>
                        </header>
                        <p>
                           {comentatioTres} 
                        </p> <a href="#"></a>
                    </article>
                </div>






            </main>



        );
    }
}

export default Header;