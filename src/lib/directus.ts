import { createDirectus, rest, } from "@directus/sdk";

type Benefit ={
    desc: string;
    judul: string;
    logoBenefit: File,
}

type Visi = {
    judul: string;
    desc: string;
}

type Kurikulum = {
    judul: string;
    desc: string;
}

type Bidang = {
    judul: string;
    logoBidang: File;
}

type Programs = {
    id: string;
    judul: string;
    desc: string;
    hero: File;
    background:File;
    slug: string;
    course: Course;
}

type Course = {
  id: string;
  judulKursus: string;
  program: Programs[]; // one-to-many relasinya ke programs
};

type Fasilitas = {
    judul: string;
    desc: string;
}

type Schema = {
    benefit: Benefit[];
    visi: Visi;
    kurikulum: Kurikulum;
    bidang: Bidang[];
    fasilitas: Fasilitas[];
    programs: Programs[];
    course: Course[];
}



const directus = createDirectus<Schema>('http://localhost:8055').with(rest());

export default directus;