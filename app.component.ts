// Importa las librerías necesarias
import { messaging } from 'nativescript-plugin-firebase/messaging';
import * as Toast from 'nativescript-toasts';

// --- Código de inicialización de la aplicación (ejecutar en OnInit o al inicio) ---

// 1. Obtener el Token (para usar en la consola de Firebase)
messaging.getCurrentPushToken()
  .then(token => console.log("FCM Device Token: " + token))
  .catch(error => console.error("Error al obtener token:", error));

// 2. Mostrar Toast para Notificaciones Entrantes
messaging.onMessage((message) => {
    const notificationText = `${message.title || 'Alerta'}: ${message.body || 'Nuevo mensaje'}`;
    Toast.show({
        text: notificationText,
        duration: Toast.DURATION.LONG
    });
});
