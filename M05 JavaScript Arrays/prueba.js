    let num  = [ -04,]; 
    // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
    // Guardar cada nuevo valor en un arreglo y retornarlo.
    // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
    // la ejecución y retornar el string: "Se interrumpió la ejecución".
    // [PISTA]: utiliza el statement 'break'.
    // Tu código:
    let resultado = []
    let valor = num
    for (let i = 0; i < 10; i++) {
        valor = valor + 2
        if (valor === i) {
            break;
        } 
        else resultado.push (valor);
      }  
        if (resultado < 10) {
            return "Se interrumpió la ejecución"
        } else {
            console.log (resultado)
        }  
    
 
 