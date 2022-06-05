import React from "react";

const Buscador = () => {

const handlerSubmit = e => {
e.preventDefault()
const keyword = e.currentTarget.keyword.value
console.log(keyword)

}

  return (
    <div>
      <form onSubmit={handlerSubmit}>
        <label >
          <input name="keyword" type="text" placeholder="Encuentra tu PoKeMoN" />
        </label>
        <button type="submit">Buscar</button>
      </form>
    </div>
  );
};

export default Buscador;
