'use client'

import { useEffect, useRef, useState } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-routing-machine'
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css'

interface Station {
  name: string
  location: {
    coordinates: [number, number]
  }
}

interface RouteLeg {
  from: string
  to: string
  price: number
}

interface RouteData {
  route: Station[]
  total_price: number
  legs: RouteLeg[]
}

interface MapComponentProps {
  routeData: RouteData
}

export default function MapComponent({ routeData }: MapComponentProps) {
  const mapRef = useRef<L.Map | null>(null)
  const markersRef = useRef<L.Marker[]>([])
  const routingControlRef = useRef<L.Routing.Control | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMapReady, setIsMapReady] = useState(false)

  // Initialize map
  useEffect(() => {
    if (!containerRef.current || mapRef.current) return

    const map = L.map(containerRef.current, {
      center: [9.0222, 38.7468],
      zoom: 13,
      layers: [
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors'
        })
      ]
    })

    mapRef.current = map

    // Wait for map to be ready
    map.whenReady(() => {
      setIsMapReady(true)
    })

    return () => {
      map.remove()
      mapRef.current = null
      setIsMapReady(false)
    }
  }, [])

  // Handle markers and bounds
  useEffect(() => {
    if (!isMapReady || !mapRef.current) return

    const map = mapRef.current

    // Clear existing markers
    markersRef.current.forEach(marker => marker.remove())
    markersRef.current = []

    // Add markers for each station
    const bounds = L.latLngBounds([])
    routeData.route.forEach((station) => {
      const [lng, lat] = station.location.coordinates
      const marker = L.marker([lat, lng], {
        icon: L.divIcon({
          html: '🚖',
          className: 'taxi-marker',
          iconSize: [25, 25]
        })
      })
      .bindPopup(station.name)
      .addTo(map)

      markersRef.current.push(marker)
      bounds.extend([lat, lng])
    })

    // Fit bounds only if we have valid bounds
    if (bounds.isValid()) {
      map.invalidateSize()
      map.fitBounds(bounds, {
        padding: [50, 50],
        maxZoom: 15
      })
    }
  }, [routeData, isMapReady])

  // Handle routing
  useEffect(() => {
    if (!isMapReady || !mapRef.current) return

    const map = mapRef.current

    // Remove existing routing control
    if (routingControlRef.current) {
      map.removeControl(routingControlRef.current)
      routingControlRef.current = null
    }

    // Add routing
    if (routeData.route.length >= 2) {
      const waypoints = routeData.route.map((station) =>
        L.latLng(station.location.coordinates[1], station.location.coordinates[0])
      )

      const routingControl = L.Routing.control({
        waypoints,
        routeWhileDragging: true,
        showAlternatives: false,
        lineOptions: {
          styles: [{ color: '#6FA1EC', weight: 4 }]
        }
      }).addTo(map)

      routingControlRef.current = routingControl
    }
  }, [routeData, isMapReady])

  return (
    <>
      <style jsx global>{`
        .taxi-marker {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 25px;
          background: none;
          border: none;
        }
        #map-container {
          width: 100%;
          height: 60vh;
          position: relative;
          z-index: 0;
          border-radius: 0.5rem;
          overflow: hidden;
        }
        .leaflet-container {
          width: 100%;
          height: 100%;
        }
          .leaflet-routing-alt {
  color: black !important;
}
      `}</style>
      <div id="map-container" ref={containerRef} />
    </>
  )
}
