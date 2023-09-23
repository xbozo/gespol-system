export function dateFormatter(dataISO: string) {
    if (typeof dataISO !== "string") {
        return dataISO;
    }

    const parts = dataISO.split("-");

    if (parts.length === 3) {
        let year = parseInt(parts[0]);
        const month = parts[1];
        const day = parts[2];

        if (year > 2030) {
            const actualYear = new Date().getFullYear();
            year = actualYear;
        }

        const dataFormatada = `${day}/${month}/${year}`;

        return dataFormatada;
    } else {
        return dataISO;
    }
}
