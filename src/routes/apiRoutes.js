//Importar o módulo Router do express
//Router será utilidado para definir rotas especificas da aplicação 

const router = require('express').Router();

//Importa a Controller de professores onde contéma lógica relacionada a professores
const controllerNumbers = require('../controllers/controllerNumbers')

//Rota POST para '/teacher'
router.post('/Numbers/',controllerNumbers.postNumbers);
router.get('/Numbers/',controllerNumbers.getNumbers);

module.exports = router