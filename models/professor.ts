import app = require("teem");

interface Professor {
    idprofessor: number;
    nome: string;
}

class Professor {
    public static async listar(): Promise<Professor[]> {
        let lista: Professor[];

        await app.sql.connect(async (sql: app.Sql) => {
            lista = await sql.query("SELECT idprofessor, nome FROM professor ORDER BY nome");
        });

        return lista;
    }
}

export = Professor;
