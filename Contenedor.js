class Contenedor {
  constructor(knex, tabla) {
    this.knex = knex;
    this.tabla = tabla;
  }
  async insert(obj) {
    await this.knex(this.tabla)
      .insert(obj)
      .then(() => console.log("data inserted"))
      .catch((e) => {
        console.log(e);
        throw e;
      });
  }
  async update(id, obj) {
    await this.knex(this.tabla)
      .where("id", id)
      .update(obj)
      .then(() => console.log("data updated"))
      .catch((e) => {
        console.log(e);
        throw e;
      });
  }
  async delete(id) {
    await this.knex(this.tabla)
      .where("id", id)
      .del()
      .then(() => console.log("data deleted"))
      .catch((e) => {
        console.log(e);
        throw e;
      });
  }
  async selectAll() {
    let result = [];
    await this.knex(this.tabla)
      .select("*")
      .then((res) => (result = [...res]))
      .catch((e) => {
        console.log(e);
        throw e;
      });
    return result;
  }
  async selectOne(id) {
    let result;
    await this.knex
      .from(this.tabla)
      .select("*")
      .where("id", id)
      .then((res) => (result = res))
      .catch((e) => {
        console.log(e);
        throw e;
      });
    return result;
  }
}

module.exports = Contenedor;
