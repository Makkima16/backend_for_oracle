// app/Controllers/Http/ProcedimientosController.ts
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ServicesOracle from 'App/Services/ServicesOracle'

export default class ProcedimientosController {

  /**
   * Endpoint para registrar una apuesta
   */
  public async registrarApuesta({ request, response }: HttpContextContract) {
    // Extracción de parámetros del request
    const {
      p_id_cliente,
      p_id_partido,
      p_tipo_apuesta,
      p_resultado, // Guardar el equipo ganador
      p_goles_equipo1, // Goles del equipo 1
      p_goles_equipo2, // Goles del equipo 2
      p_monto,
      p_cuota
    } = request.only([
      'p_id_cliente',
      'p_id_partido',
      'p_tipo_apuesta',
      'p_resultado',
      'p_goles_equipo1',
      'p_goles_equipo2',
      'p_monto',
      'p_cuota'
    ]);
  
    // Validación adicional para "Marcador Exacto"
    if (p_tipo_apuesta === 'Marcador Exacto') {
      if (p_goles_equipo1 == null || p_goles_equipo2 == null) {
        return response.status(400).json({
          message: 'Se deben proporcionar los goles para el marcador exacto.'
        });
      }
    }
  
    try {
      // Ejecutar el servicio para registrar la apuesta en la base de datos
      const result = await ServicesOracle.registrarApuesta(
        p_id_cliente,
        p_id_partido,
        p_tipo_apuesta,
        p_resultado, 
        p_goles_equipo1, 
        p_goles_equipo2, 
        p_monto,
        p_cuota
      );
  
      return response.status(200).json({
        message: 'Apuesta registrada con éxito',
        result: result
      });
    } catch (error) {
      console.error('Error al registrar la apuesta:', error);
      return response.status(500).json({
        message: 'Error al registrar la apuesta',
        error: error.message,
        stack: error.stack
      });
    }
  }
  
  

  public async insertarCliente({ request, response }: HttpContextContract) {
    const { p_name, p_email, p_saldo, p_tel, p_user_id, p_estado } = request.only([
      'p_name', 'p_email', 'p_saldo', 'p_tel', 'p_user_id', 'p_estado',
    ]);

    try {
      // Llamar al servicio para insertar el cliente
      const result = await ServicesOracle.insertarCliente(
        p_name,
        p_email,
        p_saldo,
        p_tel,
        p_user_id,
        p_estado,
      );

      // Enviar una respuesta exitosa
      return response.status(200).json({
        message: 'Cliente registrado con éxito',
        results: result,
      });
    } catch (error) {
      // Si hay un error, responder con el error
      console.error('Error al insertar cliente desde el controlador:', error);

      return response.status(500).json({
        message: 'Error al insertar el cliente',
        error: error.message,
      });
    }
  }
   /**
   * Método para cargar saldo de un usuario
   */
   public async cargarSaldo({ request, response }: HttpContextContract) {
    const { p_id_usuario, pnuevo } = request.only(['p_id_usuario', 'pnuevo']);

    try {
      // Llamar al servicio para ejecutar el procedimiento CargarSaldo
      const result = await ServicesOracle.cargarSaldo(p_id_usuario, pnuevo);

      // Enviar una respuesta exitosa
      return response.status(200).json({
        message: 'Saldo cargado con éxito',
        result: result
      });
    } catch (error) {
      // En caso de error, devolver un mensaje adecuado
      return response.status(500).json({
        message: 'Error al cargar saldo',
        error: error.message
      });
    }
  }

  // Método para realizar el retiro de saldo
  public async retirar({ request, response }: HttpContextContract) {
    const { pid_usuario, pmonto } = request.only(['pid_usuario', 'pmonto']);  // Extraer parámetros de la solicitud

    try {
      // Llamar al servicio para ejecutar el procedimiento de retiro de saldo
      const result = await ServicesOracle.retirarSaldo(pid_usuario, pmonto);

      // Devolver una respuesta exitosa
      return response.status(200).json({
        message: 'Retiro procesado con éxito',
        result: result
      });

    } catch (error) {
      // En caso de error, devolver un mensaje con el error
      return response.status(500).json({
        message: 'Error al procesar el retiro de saldo',
        error: error.message
      });
    }
  }

  public async registrarPago({ request, response }: HttpContextContract) {
    const {
      p_id_transaccion,
      p_email,
      p_name,
      p_ref,
      p_amount,
      p_product,
      p_estado_pago
    } = request.only([
      'p_id_transaccion',
      'p_email',
      'p_name',
      'p_ref',
      'p_amount',
      'p_product',
      'p_estado_pago'
    ])

    try {
      // Llamar al servicio para ejecutar el procedimiento RegistrarPago
      const result = await ServicesOracle.registrarPago(
        p_id_transaccion,
        p_email,
        p_name,
        p_ref,
        p_amount,
        p_product,
        p_estado_pago
      )

      // Respuesta exitosa
      return response.status(200).json({
        message: 'Pago procesado con éxito',
        result: result
      })
    } catch (error) {
      // Manejo de errores
      return response.status(500).json({
        message: 'Error al procesar el pago',
        error: error.message
      })
    }
  }

  public async actualizarPartidos({ response }: HttpContextContract) {
    try {
      // Llamar al servicio para ejecutar el procedimiento de actualización de partidos y apuestas
      const result = await ServicesOracle.actualizarPartidosYApuestas();
  
      // Respuesta exitosa
      return response.status(200).json({
        message: 'Partidos y apuestas actualizados con éxito',
        result: result
      });
    } catch (error) {
      // Manejo de errores
      return response.status(500).json({
        message: 'Error al actualizar partidos y apuestas',
        error: error.message
      });
    }
  }
  
}
