import React from 'react'

function Galeria({listaIMG, im, imagine}) {
  return (<>
      {listaIMG.map((el, index) => (
                <img
                    key={el.id}
                    src={el.url === imagine ? imagine : el.url}
                    alt={el.title}
                    onClick={() => im(index)} 
                    className={el.url === imagine ? 'selectat' : ''} 
                />
            ))}
        </>
  )
}

export default Galeria;