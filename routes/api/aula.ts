import app = require("teem");
import Aula = require("../../models/aula");

class AulaApiRoute {
	@app.http.post()
	public async criar(req: app.Request, res: app.Response) {
		let resultado = await Aula.criar(req.body);

		if (resultado) {
			res.status(400);
		}

		res.json(resultado);
	}

	@app.http.post()
	public async editar(req: app.Request, res: app.Response) {
		let resultado = await Aula.editar(req.body);

		if (resultado) {
			res.status(400);
		}

		res.json(resultado);
	}
}

export = AulaApiRoute;
