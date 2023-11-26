import React, { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { FaEye, FaEyeLowVision } from "react-icons/fa6";

const Game1 = () => {
  const [jumlahTebakan, setJumlahTebakan] = useState(-1);

  const [tebakan, setTebakan] = useState("");

  const [nilai, setNilai] = useState(Math.floor(Math.random() * 10) + 31);

  const [show, setShow] = useState(0);

  const [selisih, setSelisih] = useState(0);

  const notify = () => {
    toast.success("Game Selesai! Anda Menang");
  };

  const cekTebakan = (event) => {
    event.preventDefault();
   
    const value = Number(tebakan.trim());
    
    if (jumlahTebakan === -1) {
      setJumlahTebakan(0);
    }

    if (jumlahTebakan > -1) {
   
      if (jumlahTebakan === 4 && value !== nilai) {
        toast.error("Game Selesai! Anda Gagal");
      } else if (jumlahTebakan < 5) {
        if (tebakan === "") {
          toast.error("Input Tidak Boleh Kosong");
        } else if (value < nilai) {
          toast.error("Input Value Terlalu kecil");
        } else if (value > nilai) {
          toast.error("Input Value Terlalu Besar");
        }
      }
    }

    if (value === nilai) {
      notify();
      setJumlahTebakan(5);
    } else if (jumlahTebakan === 5) {
      setNilai(Math.floor(Math.random() * 10) + 31);
      setJumlahTebakan(0);
    } else if (tebakan != "") {
      setJumlahTebakan(jumlahTebakan + 1);
    }

    setTebakan("");
  };


  const changeShow = () => {
    if (show == 0) {
      setShow(1);
    } else {
      setShow(0);
    }
  };
  return (
    <div className="p-4">
      <h1>Number Guessing Game</h1>
      <ol className="text-start m-2 mt-4">
        <li>Each player gets 5 chances to guess</li>
        <li>Number range is between 31 - 40</li>
        <li>You can reset the number after 5 wrong answers</li>
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
              <div className="d-flex m">
                <input
                  type="number"
                  className="form-control"
                  id="validationCustom01"
                  placeholder="Input Angka 31 - 40"
                  autoComplete="off"
                  disabled={jumlahTebakan === 5}
                  onChange={(e) => setTebakan(e.target.value)}
                  value={tebakan}
                />
                <div>
                  <button
                    type="button"
                    onClick={changeShow}
                    className="btn btn-primary ms-2"
                  >
                    {show == 1 ? <FaEye /> : <FaEyeLowVision />}
                  </button>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="col-md-6 d-block text-start ms-4 mt-4">
          {jumlahTebakan === -1 ? (
            "Silahkan Mulai Permainan"
          ) : (
            <>
              {show == 1 ? (
                <div className="d-block text-start mb-4">
                  Nilai Aslinya Adalah {nilai}
                </div>
              ) : (
                ""
              )}
              <div className="d-block text-start">
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
          ) : jumlahTebakan < 5 ? (
            <button className="btn btn-primary btn ms-4 mt-3">
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
