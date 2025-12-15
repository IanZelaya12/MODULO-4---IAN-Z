// Importa las librerías necesarias
import * as SocialShare from 'nativescript-social-share';
import * as camera from 'nativescript-camera';
import { ImageSource, fromAsset } from '@nativescript/core/image-source';

// Componente TS

// 3. Compartir Contenido de Texto
shareText() {
    SocialShare.shareText("Compartiendo mi progreso en la app.", "Compartir con...");
}

// 4. & 6. Tomar y Compartir Imagen (maneja la conversión de Asset a ImageSource)
takeAndSharePhoto() {
    // 5. Plugin Camera: Solicitud de permisos y uso de takePicture()
    camera.requestPermissions().then(() => {
        camera.takePicture({ keepAspectRatio: true }).then((imageAsset) => {
            // Conversión de ImageAsset a ImageSource
            fromAsset(imageAsset).then((imageSource: ImageSource) => {
                // Compartir la ImageSource
                SocialShare.shareImage(imageSource, "¡Mi nueva foto!");
            });
        });
    });
}
