const { execSync } = require('child_process');
const chalk = require('chalk');

console.log(chalk.bgYellowBright(chalk.black('Iniciando o processo de backup.')));

(() => {
    try {
        var stdout = execSync('df -h /dev/sdb');

        // Transforma em um array pelo delimitador de final de linha.
        const linhas = stdout.toString().split(/\r\n|\r|\n/g);

        linhas.forEach((value, index) => {
            
            // Substitui espaços em branco extras por apenas um espaço.
            const colunas = value.replace(/\s+/g, ' ').split(" ");

            // Filtras as linha que tem número inicial e sinal de % no final
            if (/\d+%/g.exec(value)) {
                console.log(colunas[4]);
            }

        });
    }
    catch(error){
        console.log(`Status Code: ${error.status} with '${error.message}'`);
    }
    
})();

console.log(chalk.bgBlueBright('Finalizando o processo de backup.'))
