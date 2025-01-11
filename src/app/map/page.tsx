"use client"

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import dynamic from 'next/dynamic'

// Dynamically import the map component to avoid SSR issues
const MapComponent = dynamic(() => import('@/components/map'), {
  ssr: false,
  loading: () => <div className="w-full h-[60vh] bg-gray-100 animate-pulse" />
})

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

export default function MapPage() {
  const searchParams = useSearchParams()
  const [routeData, setRouteData] = useState<RouteData | null>(null)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    const from = searchParams.get('from')
    const to = searchParams.get('to')

    if (!from || !to) {
      setError('Missing from or to parameters')
      return
    }

    const fetchRoute = async () => {
      try {
        const response = await fetch(`https://redat-backend-production.up.railway.app/route-map?from=${from} Station&to=${to} Station`)
        const data = await response.json()
        
        if (data.error) {
          setError(data.error)
          return
        }

        setRouteData(data)
      } catch (error) {
        setError('Error fetching route data')
      }
    }

    fetchRoute()
  }, [searchParams])

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardContent className="p-6">
            <div className="text-center text-destructive">{error}</div>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (!routeData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardContent className="p-6">
            <div className="text-center text-muted-foreground">Loading route data...</div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 relative">
        <MapComponent routeData={routeData} />
      </div>
      
      <Card className="m-4">
        <CardHeader>
          <CardTitle>Redat Fare Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Total Fare</p>
              <p className="text-2xl font-bold">{routeData.total_price} Birr</p>
            </div>
            
            <div>
              <p className="text-sm font-medium text-muted-foreground">Route</p>
              <p className="text-sm">{routeData.route.map(s => s.name).join(' → ')}</p>
            </div>
            
            {routeData.legs.length > 0 && (
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-2">Journey Segments</p>
                <div className="space-y-2">
                  {routeData.legs.map((leg, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-muted rounded-lg">
                      <span className="text-sm">{leg.from} → {leg.to}</span>
                      <span className="font-medium">{leg.price} Birr</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 
