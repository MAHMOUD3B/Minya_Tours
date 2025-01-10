import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";

const MapPage = () => {
  const [currentLocation, setCurrentLocation] = useState<
    [number, number] | null
  >(null);

  // places coordinates
  const polylineCoordinates = [
    [27.7744209, 30.7408343],
    [27.9313606, 30.9057653],
    [28.2780116, 30.7610279],
    [28.5348453, 30.6669541],
  ];

  const handleTooltip = (index) => {
    switch (index + 1) {
      case 1:
        return "تونا الجبل";
      case 2:
        return "مقابر بنى حسن";
      case 3:
        return "جبل الطير | مسار العائلة المقدسة";
      case 4:
        return " البهنسا ";
    }
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation([latitude, longitude]);
        },
        (error) => {
          console.error("Error getting location", error);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div>
      <Navbar />
      <div className="h-[100vh] relative z-10">
        {currentLocation && (
          <MapContainer
            center={currentLocation}
            zoom={14} // مستوى التكبير
            style={{ height: "100%", width: "100%" }}
          >
            {/* طبقة القمر الصناعي من Esri */}
            <TileLayer
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
              attribution='&copy; <a href="https://www.esri.com/en-us/arcgis/about-arcgis">Esri</a>'
            />

            {/* إضافة Polyline (خط السير) */}
            <Polyline positions={polylineCoordinates} color="blue" weight={4} />

            {/* إضافة Markers لكل نقطة في الخط السير */}
            {polylineCoordinates.map((coords, index) => (
              <Marker position={coords} key={index}>
                <Popup> {handleTooltip(index)}</Popup>
              </Marker>
            ))}

            {/* إضافة Marker للموقع الحالي إذا تم العثور عليه */}
            {currentLocation && (
              <Marker position={currentLocation}>
                <Popup>موقعك الحالي</Popup>
              </Marker>
            )}
          </MapContainer>
        )}
      </div>
    </div>
  );
};

export default MapPage;
