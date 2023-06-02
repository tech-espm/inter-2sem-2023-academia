import app = require("teem");

interface Aula {
    idaula: number;
    idprofessor: number;
    idtipo: number;
    data: string;
}

interface TipoAula {
    idtipo: number;
    nome: string;
}

class Aula {
    public static async listarTipos(): Promise<TipoAula[]> {
        let lista: TipoAula[];

        await app.sql.connect(async (sql: app.Sql) => {
            lista = await sql.query("SELECT idtipo, nome FROM tipo ORDER BY nome");
        });

        return lista;
    }

    public static async listar(idprofessor: number): Promise<Aula[]> {
        let lista: Aula[];

        await app.sql.connect(async (sql: app.Sql) => {
            lista = await sql.query(`
                SELECT a.idaula, date_format(a.data, '%d/%m/%Y %H:%i') data,
                a.idprofessor, p.nome professor,
                a.idtipo, t.nome tipo
                FROM aula a
                INNER JOIN professor p ON p.idprofessor = a.idprofessor
                INNER JOIN tipo t ON t.idtipo = a.idtipo
                WHERE a.idprofessor = ?
                ORDER BY a.data ASC, t.nome ASC
            `, [idprofessor]);
        });

        return lista;
    }

    public static async criar(aula: Aula): Promise<string> {
        if (!aula) {
            return "Aula inválida";
        }

        if (!aula.data) {
            return "Data da aula inválida";
        }

        // @@@

        let resultado: string = null;

        await app.sql.connect(async (sql: app.Sql) => {
            try {
                await sql.query("INSERT INTO aula (idprofessor, idtipo, data) VALUES (?, ?, ?)", [aula.idprofessor, aula.idtipo, aula.data]);
			} catch (e) {
                switch (e.code) {
                    case "ER_DUP_ENTRY":
                        resultado = "Já existe uma aula para esse professor nessa data";
                        break;
                    case "ER_NO_REFERENCED_ROW":
                    case "ER_NO_REFERENCED_ROW_2":
                        resultado = "Professor ou tipo de aula não encontrado";
                        break;
                    default:
                        throw e;
                }
			}
        });

        return resultado;
    }

    public static async editar(aula: Aula): Promise<string> {
        if (!aula) {
            return "Aula inválida";
        }

        if (!aula.data) {
            return "Data da aula inválida";
        }

        // @@@

        await app.sql.connect(async (sql: app.Sql) => {
            // @@@
        });

        return null;
    }
}

export = Aula;
