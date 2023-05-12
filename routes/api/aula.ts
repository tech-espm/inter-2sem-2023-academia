import app = require("teem");

class AulaRoute {
	@app.http.post()
	@app.route.formData()
	public async criar(req: app.Request, res: app.Response) {
		let pessoa = req.body;

		res.json("OK!");
	}
}

export = AulaRoute;
