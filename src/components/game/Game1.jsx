import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";

const Game1 = () => {
  const [jumlahTebakan, setJumlahTebakan] = useState(-1);
  const [tebakan, setTebakan] = useState("");
  const [nilai, setNilai] = useState(Math.floor(Math.random() * 10) + 1);

  const notify = () => {
    toast.success("Berhasil Menebak Angka");
  };

  const cekTebakan = (event) => {
    event.preventDefault();
    const input = Number(tebakan)
    if (jumlahTebakan === -1) {
      setJumlahTebakan(0);
    }

    if (jumlahTebakan > -1) {
      if (jumlahTebakan === 3 && input !== nilai) {
        toast.error("Kesempatan Anda Habis");
      } else if (jumlahTebakan < 4) {
        if (tebakan === "") {
          toast.error("Input Tidak Boleh Kosong");
        } else if (input < nilai) {
          toast.error("Angka Terlalu Kecil");
        } else if (input > nilai) {
          toast.error("Angka Terlalu Besar");
        }
      }
    }

    if (input === nilai) {
      notify();
      setJumlahTebakan(4);
    } else if (jumlahTebakan === 4) {
      setNilai(Math.floor(Math.random() * 10) + 1);
      setJumlahTebakan(0);
    } else if (tebakan != "") {
      setJumlahTebakan(jumlahTebakan + 1);
    }

    setTebakan("");
  };
  return (
    <div className="p-4">
      <h1>Number Guessing Game</h1>
      <ol className="text-start m-2 mt-4">
        <li>Each player gets 4 chances to guess</li>
        <li>Number range is between 1 - 10</li>
        <li>You can reset the number after 4 wrong answers</li>
      </ol>

      <form className="row" onSubmit={cekTebakan}>
        <div className="col-md-6 ms-4 mt-4">
          {jumlahTebakan === -1 || (
            <>
              <label
                htmlFor="validationCustom01"
                className="form-label d-block text-start"
              >
                Input Angka
              </label>
              <input
                type="number"
                className="form-control"
                id="validationCustom01"
                placeholder="Input Angka 1 - 10"
                autoComplete="off"
                onChange={(e) => setTebakan(e.target.value)}
                value={tebakan}
              />
            </>
          )}
        </div>
        <div className="col-md-6 d-block text-start ms-4 mt-4">
          {jumlahTebakan === -1 ? (
            "Silahkan Mulai Permainan"
          ) : (
            <>
              <div className="d-block text-start">
                Nilai Aslinya Adalah {nilai}
              </div>
              <div className="d-block text-start mt-4">
                Jumlah Tebakan {jumlahTebakan}
              </div>
            </>
          )}
        </div>


        <div className="col-md-6 d-flex justify-content-start">
          {jumlahTebakan === -1 ? (
            <button className="btn btn-success btn ms-4 mt-3">
              Mulai Permainan
            </button>
          ) : jumlahTebakan < 4 ? (
            <button className="btn btn-primary btn ms-4 mt-3 mb-2">
              Tebak Angka
            </button>
          ) : (
            <button className="btn btn-danger btn ms-4 mt-3">Reset</button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Game1;
