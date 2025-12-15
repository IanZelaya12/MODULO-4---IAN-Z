// Importa las librerías necesarias del plugin de mapas
import { MapView, Marker, Position } from 'nativescript-google-maps-sdk';

export class MapComponent {
  // 8. Añadir Marker en el evento mapReady
  onMapReady(args) {
    const mapView: MapView = args.object;
    
    // Crear la posición y el marcador
    const marker = new Marker();
    marker.position = Position.positionFromLatLng(-33.86, 151.20); // Ejemplo de coordenadas
    marker.title = "Mi Ubicación Personalizada";
    
    mapView.addMarker(marker);
  }
}
