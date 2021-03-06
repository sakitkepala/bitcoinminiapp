import * as React from "react";
import { useQuery } from "react-query";
import { VscLoading } from "react-icons/vsc";
import { apiClient, formatKurs } from "../utils";
import { Layout } from "../komponen/layout";

function persiapkanDataTabel(dataAPI) {
    const MATA_UANG = {
        AUD: "Dollar Australia",
        EUR: "Euro Eropa",
        GBP: "Poundsterling",
        JPY: "Yen Jepang",
        USD: "Dollar Amerika"
    };

    return Object.keys(MATA_UANG).reduce(
        (nilai, kode) => [
            ...nilai,
            {
                key: kode,
                mataUang: MATA_UANG[kode],
                jual: formatKurs(dataAPI[kode].sell, kode, "narrowSymbol"),
                beli: formatKurs(dataAPI[kode].buy, kode, "narrowSymbol")
            }
        ],
        []
    );
}

export default function Monitor() {
    const kurs = useQuery(["kurs"], async () => {
        return await apiClient("https://blockchain.info/ticker");
    });

    return (
        <Layout>
            <main className="main">
                <h1 className="heading-judul">Harga Bitcoin Hari Ini</h1>

                {!kurs.data ? (
                    <div className="tabel-kurs memuat">
                        <span className="loading-animasi">
                            <VscLoading />
                        </span>{" "}
                        Sedang mengambil data...
                    </div>
                ) : (
                    <table className="tabel-kurs">
                        <thead>
                            <tr>
                                <th className="kolom-mata-uang">Mata Uang</th>
                                <th className="kolom-harga">
                                    Harga Beli Bitcoin
                                </th>
                                <th className="kolom-harga">
                                    Harga Jual Bitcoin
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {persiapkanDataTabel(kurs.data).map(record => (
                                <tr key={record.key}>
                                    <td>{record.mataUang}</td>
                                    <td className="kolom-harga">
                                        {record.beli}
                                    </td>
                                    <td className="kolom-harga">
                                        {record.jual}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </main>
        </Layout>
    );
}
