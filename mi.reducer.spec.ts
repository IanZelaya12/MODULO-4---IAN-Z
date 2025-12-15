import { miReducer } from './mi.reducer';
import * as actions from './mi.actions'; // Asume que tienes un archivo de acciones

describe('Mi Reducer de Redux', () => {
  it('debería manejar la acción de SUMAR_UNO y actualizar el estado', () => {
    // Estado inicial de prueba
    const estadoInicial = { valor: 10 };
    // Acción que quieres probar
    const accion = actions.sumarUno(); 
    // Ejecutar el reducer
    const nuevoEstado = miReducer(estadoInicial, accion);
    
    // Aserción clave de Jasmine
    expect(nuevoEstado.valor).toBe(11); 
  });
});
