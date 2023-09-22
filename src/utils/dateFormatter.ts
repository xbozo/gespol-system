export function dateFormatter(dataISO: string) {
    const parts = dataISO.split("-");

    if (parts.length === 3) {
        const year = parts[0];
        const month = parts[1];
        const day = parts[2];

        const dataFormatada = `${day}/${month}/${year}`;

        return dataFormatada;
    } else {
        return dataISO;
    }
}
