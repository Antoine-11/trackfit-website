

export default function ExtraCosts({estilo, servicio, precio}) {
    return(
    
            <div className={estilo}>
              {servicio}
              {precio}
            </div>
        
      );
}
