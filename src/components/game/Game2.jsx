import React from "react";
import { useState } from "react";
const options = ["Penting", "Biasa", "Tidak Penting"];

function Game2() {
  const [list, setList] = useState([]);

  const [namaToDoList, setNamaToDoList] = useState("");
  const [priority, setPriority] = useState("");
  const [catatan, setCatatan] = useState("");

  const submit = (event) => {
    event.preventDefault();
    setList((dataSebelumnya) => {
      const newData = {
        namaToDoList: namaToDoList,
        priority: priority,
        catatan: catatan,
      };

      return [...dataSebelumnya, newData];
      console.log(list);
    });

    setNamaToDoList("");
    setPriority(options[0]);
    setCatatan("");
  };

  return (
    <div className="p-3">
      <h1>Simple To-Do List</h1>
      <form className="row p-3" onSubmit={submit}>
        <div className="col-md-6">
          <label htmlFor="inputNama" className="form-label d-block text-start">
            Apa yang ingin dikerjakan?
          </label>
          <input
            type="text"
            className="form-control"
            id="inputNama"
            placeholder="Nama To-Do List"
            required
            value={namaToDoList}
            onChange={(e) => setNamaToDoList(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputNama" className="form-label d-block text-start">
            Penting gk?
          </label>
          <select
            className="form-select"
            id="inputNama"
            required
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="" disabled hidden selected>
              Pilih Priority
            </option>
            {options.map((value) => (
              <option value={value} key={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-6">
          <label htmlFor="inputNama" className="form-label d-block text-start">
            Catatan
          </label>
          <textarea
            className="form-control"
            required
            placeholder="Isi Catatan To-Do List"
            id="inputNama"
            value={catatan}
            style={{ height: "100px", resize: "none" }}
            onChange={(e) => setCatatan(e.target.value)}
          />
        </div>

        <div className="col-md-12 d-flex justify-content-start">
          <button className="btn btn-primary mt-3">Mulai Permainan</button>
        </div>
      </form>

      <div className="row mx-2">
        {list.map((item, index) => (
          <div className="col-md-4 mb-3">
            <div className="card border-black border-1">
              <div
                className={`card-header text-light ${
                  item.priority === "Penting"
                    ? "bg-danger"
                    : item.priority === "Biasa"
                    ? "bg-success"
                    : "bg-dark"
                } `}
              >
                {item.priority}
              </div>
              <div className="card-body">
                <h5 className="card-title">{item.namaToDoList}</h5>
                <p className="card-text mt-">{item.catatan}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Game2;
