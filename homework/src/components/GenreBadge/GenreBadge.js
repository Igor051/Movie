import React from "react";
import style from './GenreBadge.module.css'
import cn from 'classnames'

const GenreBadge = (props) => {
    return <div className={style.genreList}>
        {props.genres.map(genre => <div key={genre.id}
                                        className={cn({[style.darkTheme]:props.darkTheme},{[style.activeGenre]: props.activeGenre === genre.id}, style.genreItem)}
                                        onClick={() => props.getFilmsForGenre(genre.id)}>
            {genre.name}
        </div>)}
    </div>
};

export default GenreBadge