module.exports = class controllerNumbers {
  //Verificação dos numeros
  static async postNumbers(req, res) {
    const { numero } = req.body;

    if (numero % 2 == 0) {
      res.status(200).json({ message: "Numero  é par" });
    } else {
      res.status(400).json({ message: "Numero não é par" });
    }
  }
  static async postPrimo(req, res) {
    const { Primo } = req.body;
    if (Primo == 1) {
      return res.status(200).json({ message: "Numero não é primo" });
    }

    for (let i = 2; i <= Math.sqrt(Primo); i++) {
      if (Primo % i === 0) {
        return res.status(200).json({ message: "Numero não é primo" });
      }
    }
     return res.status(200).json({ message: "Numero  é primo" });
  }

  //Listar Professor
  static async getNumbers(req, res) {
    res.status(200).json({ Numbers: "Esta correto" });
  }
};
