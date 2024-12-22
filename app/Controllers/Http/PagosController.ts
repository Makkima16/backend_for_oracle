import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Pago from 'App/Models/Pago';

export default class PagosController {

    public async store({request}:HttpContextContract){
            let body = request.body();
            const thePago=await Pago.create(body)
            return thePago;
        }
        public async index({request}: HttpContextContract){
            const page =request.input('page', 1);
            const perPage = request.input("per_page", 20)
            let Pagos:Pago[]=await Pago.query().paginate(page, perPage)
            return Pagos;
        }
        public async show({params}:HttpContextContract){
            return Pago.findOrFail(params.id)
        }
    
        public async destroy({params, response}: HttpContextContract){
            const thePago: Pago = await Pago.findOrFail(params.id);
            response.status(204);
            return thePago.delete()
        }
        public async handleWebhook({ request, response }: HttpContextContract) {
            const body = request.body()
        
        
        
            // Verificar si ya existe un registro con la misma referencia
            const existingPayment = await Pago.findBy('ref', body.x_ref_payco)
            if (existingPayment) {
              return response.status(200).send({ message: 'Pago ya procesado' })
            }
        
            // Crear el nuevo pago
            const payment = await Pago.create({
              email: body.x_customer_email,
              name: body.x_customer_name,
              ref: body.x_ref_payco,
              transaccion_id: Number(body.x_extra1), // Aquí puedes agregar la lógica para encontrar el cliente si lo necesitas
              amount: body.x_amount,
              product: body.x_description,
              state: body.x_response,
            })
        
            // Enviar la respuesta
            return response.status(201).send(payment)
          }
}
