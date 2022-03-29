
function stringData(name: string, date: string): string{
    let newDate: string[] = date.split("");
    let day: number = Number(newDate[0]+newDate[1]);
    let month: string = newDate[3]+newDate[4];
    let year: string = newDate[6]+newDate[7]+newDate[8]+newDate[9];

    return `Olá me chamo ${name}, nasci no dia ${day} do mês de ${month} do ano de ${year}`
}


console.log(stringData('Roberto', '09/05/1994'));

