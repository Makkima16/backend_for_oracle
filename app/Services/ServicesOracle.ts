// app/Services/ServicesOracle.ts
import Database from '@ioc:Adonis/Lucid/Database';
/*
Debido a mayormente uso de procedimientos se tienen que agregar llamados, o por asi decirlo, begin
Algo a tener en cuenta es que se debe configurar adecuadamente el orden de la estruuctura de la respuesta, siendo igual
que en el procedimiento controller, el procedimiento del sqldeveloper y en el fronend
algo diferente creara errores y dificultades para encontrar errores
*/
class ServicesOracle {
  /**
   * Método para ejecutar el procedimiento almacenado REGISTRAR_APUESTA
   */
  public async registrarApuesta(
    p_id_cliente: number,
    p_id_partido: number,
    p_tipo_apuesta: string,
    p_resultado: string, // Aquí guardamos el equipo ganador
    p_goles_equipo1: number, // Goles del equipo 1 (solo si aplica)
    p_goles_equipo2: number, // Goles del equipo 2 (solo si aplica)
    p_monto: number,
    p_cuota: number
  ) {
    try {
      const result = await Database.rawQuery(`
          BEGIN
            REGISTRAR_APUESTA(:p_id_cliente, :p_id_partido, :p_tipo_apuesta, :p_resultado, :p_goles_equipo1, :p_goles_equipo2, :p_monto, :p_cuota);
          END;
      `, {
        p_id_cliente,
        p_id_partido,
        p_tipo_apuesta,
        p_resultado,
        p_goles_equipo1,
        p_goles_equipo2,
        p_monto,
        p_cuota
      });
  
      return result;
    } catch (error) {
      console.error('Error al ejecutar el procedimiento', error);
      throw new Error('Error al ejecutar el procedimiento');
    }
  }
  

  /**
   * Método para ejecutar el procedimiento CargarSaldo
   */
  public async cargarSaldo(
    p_id_usuario: number,
    pnuevo: number
  ) {
    try {
      const result = await Database.rawQuery(`
        BEGIN
          CargarSaldo(:p_id_usuario, :pnuevo);
        END;
      `, {
        p_id_usuario,
        pnuevo
      });

      return result; // Devuelve el resultado
    } catch (error) {
      console.error('Error al ejecutar el procedimiento CargarSaldo', error);
      throw new Error('Error al ejecutar el procedimiento CargarSaldo');
    }
  }
  /**
   * Método para ejecutar el procedimiento insertar_cliente
   */
  public async insertarCliente(
    p_name: string,
    p_email: string,
    p_saldo: number,
    p_tel: number,
    p_user_id: string,
    p_estado: string
  ) {
    try {
      const result = await Database.rawQuery(`
        BEGIN
          insertar_cliente(:p_name, :p_email, :p_saldo, :p_tel, :p_user_id, :p_estado);
        END;
      `, {
        p_name,
        p_email,
        p_saldo,
        p_tel,
        p_user_id,
        p_estado,
      });

      return result; // Devuelve el resultado
    } catch (error) {
      console.error('Error al ejecutar el procedimiento insertar_cliente', error);
      throw new Error('Error al ejecutar el procedimiento insertar_cliente');
    }
  }

    // Método para ejecutar el procedimiento de retiro de saldo
    public async retirarSaldo(pid_usuario: number, pmonto: number) {
        try {
          // Ejecución del procedimiento almacenado en Oracle
          const result = await Database.rawQuery(`
            BEGIN
              RetiroSaldo(:pid_usuario, :pmonto);
            END;
          `, {
            pid_usuario,
            pmonto
          });
    
          return result;  // Devuelve el resultado de la operación
        } catch (error) {
          console.error('Error al ejecutar el procedimiento de retiro de saldo', error);
          throw new Error('Error al ejecutar el procedimiento de retiro de saldo');
        }
      }

      /**
   * Método para ejecutar el procedimiento RegistrarPago
   */
  public async registrarPago(
    p_id_transaccion: number,
    p_email: string,
    p_name: string,
    p_ref: string,
    p_amount: number,
    p_product: string,
    p_estado_pago: string
  ) {
    try {
      const result = await Database.rawQuery(`
        BEGIN
          RegistrarPago(
            :p_id_transaccion,
            :p_email,
            :p_name,
            :p_ref,
            :p_amount,
            :p_product,
            :p_estado_pago
          );
        END;
      `, {
        p_id_transaccion,
        p_email,
        p_name,
        p_ref,
        p_amount,
        p_product,
        p_estado_pago
      });

      return result; // Devuelve el resultado
    } catch (error) {
      console.error('Error al ejecutar el procedimiento RegistrarPago', error);
      throw new Error('Error al ejecutar el procedimiento RegistrarPago');
    }
  }

  public async actualizarPartidosYApuestas() {
    try {
      const result = await Database.rawQuery(`
        BEGIN
          ActualizarPartidosYApuestas;
        END;
      `);
  
      return result; // Devuelve el resultado
    } catch (error) {
      console.error('Error al ejecutar el procedimiento ActualizarPartidosYApuestas', error);
      throw new Error('Error al ejecutar el procedimiento ActualizarPartidosYApuestas');
    }
  }
        
}

export default new ServicesOracle();
