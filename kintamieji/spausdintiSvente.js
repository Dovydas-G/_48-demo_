

function spausdintiSvente(holiday) {
    console.log('---------------------');

    const name = holiday.name;
    const year = holiday.date.year;
    const month = holiday.date.month;
    const day = holiday.date.day;
    const monthNames = [
        'Sausio', 'Vasario', 'Kovo', 'Balandzio',
        'Geguzes', 'Birzelio', 'Liepos', 'Rugpjucio',
        'Rugsejo', 'Spalio', 'Lapkricio', 'Gruodzio',
    ];
    const monthName = monthNames[month -1];

   return `${name} - ${year}m ${monthName} ${day}d.`;


}

export default spausdintiSvente;

