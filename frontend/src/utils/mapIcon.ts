import Leaflet from 'leaflet';

import mapMarkerImg from '../assets/icons/MapMarker.svg';

export default Leaflet.icon({
    iconUrl: mapMarkerImg,
  
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [0, -60]
});