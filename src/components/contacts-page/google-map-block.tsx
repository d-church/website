"use client";

import { AdvancedMarker, APIProvider, Map } from "@vis.gl/react-google-maps";

import { Icons } from "../ui/icons";

export function GoogleMapBlock() {
  const mapFocus = { lat: 49.85378, lng: 24.027624359133462 };
  const churchLocation = { lat: 49.85337, lng: 24.02763 };

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}>
      <div className="h-[650px] xl:h-[500px]">
        <Map
          reuseMaps={true}
          defaultZoom={17.2}
          defaultCenter={mapFocus}
          mapId={process.env.NEXT_PUBLIC_MAP_ID}
        >
          <AdvancedMarker position={churchLocation}>
            <Icons.googleMapPin />
          </AdvancedMarker>
        </Map>
      </div>
    </APIProvider>
  );
}
