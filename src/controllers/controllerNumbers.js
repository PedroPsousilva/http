module.exports = class controllerNumbers{
    //Verificação dos numeros
    static async postNumbers(req,res){
        const{Par} =req.body;
        const{Primo}=req.body;
        const{numero}=req.body;
        
        if(numero % 2 === 0){ 
            res.status(200).json({message:'Numero  é par',numero});
        }
            
        else{
            res.status(400).json({message:'Numero não é par',numero});
        }
    }
    //Listar Professor
    static async getNumbers(req,res){
        res.status(200).json({Numbers:"Esta correto"})

    }
}