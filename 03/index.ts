const tabuada = (numeros: number[]): string => {
    let produto: string = ''

    for (const fator of numeros) {

        for (let i = 0; i <= 10; i++) {
            produto += `${fator} x ${i} = ${fator * i} \n `;

            if (i === 10) {

                produto += '-------------------- \n'

            }
        }

    }

    return produto
}

console.log(tabuada([1, 5, 2]));
