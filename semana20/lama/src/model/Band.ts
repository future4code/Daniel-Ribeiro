export class Band {
    constructor(
        private id: string,
        private band_name: string,
        private music_genre: string,
        private responsible: string,
    ) { }

    getId() {
        return this.id;
    }

    getBandName() {
        return this.band_name
    }

    getMusicGenre() {
        return this.music_genre;
    }

    getResponsible() {
        return this.responsible;
    }

    setId(id: string) {
        this.id = id;
    }

    setBandName(band_name: string) {
        this.band_name = band_name;
    }

    setMusicGenre(music_genre: string) {
        this.music_genre = music_genre;
    }

    setResponsible(responsible: string) {
        this.responsible = responsible;
    }

    static toBandModel(band: InterfaceBand): Band {
        return new Band(band.id, band.band_name, band.music_genre, band.responsible);
    }
}

export interface InterfaceBand {
    id: string;
    band_name: string;
    music_genre: string;
    responsible: string;
}

export interface BandInputDTO {
    band_name: string;
    music_genre: string;
    responsible: string;
}