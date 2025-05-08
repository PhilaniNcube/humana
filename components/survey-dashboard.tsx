"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import GenderChart from "./charts/gender-chart"
import AgeChart from "./charts/age-chart"
import CountryChart from "./charts/country-chart"
import LocationChart from "./charts/location-chart"
import InvolvementChart from "./charts/involvement-chart"
import SectorChart from "./charts/sector-chart"
import SurveyOverview from "./survey-overview"

export default function SurveyDashboard() {
  return (
    <div className="grid gap-6">
      <SurveyOverview />

      <Tabs defaultValue="demographics" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 bg-brand-blue/10">
          <TabsTrigger
            value="demographics"
            className="data-[state=active]:bg-brand-blue data-[state=active]:text-white"
          >
            Who Responded
          </TabsTrigger>
          <TabsTrigger value="location" className="data-[state=active]:bg-brand-blue data-[state=active]:text-white">
            Where They Are From
          </TabsTrigger>
          <TabsTrigger value="education" className="data-[state=active]:bg-brand-blue data-[state=active]:text-white">
            Education
          </TabsTrigger>
        </TabsList>

        <TabsContent value="demographics" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-brand-blue/20">
              <CardHeader>
                <CardTitle>Gender Distribution</CardTitle>
                <CardDescription>Breakdown of respondents by gender</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <GenderChart />
              </CardContent>
            </Card>

            <Card className="border-brand-blue/20">
              <CardHeader>
                <CardTitle>Age Distribution</CardTitle>
                <CardDescription>Breakdown of respondents by age group</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <AgeChart />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="location" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-brand-blue/20">
              <CardHeader>
                <CardTitle>Top 5 Countries</CardTitle>
                <CardDescription>Countries with the most respondents</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <CountryChart />
              </CardContent>
            </Card>

            <Card className="border-brand-blue/20">
              <CardHeader>
                <CardTitle>Urban vs Rural</CardTitle>
                <CardDescription>Distribution of urban and rural respondents</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <LocationChart />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="education" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-brand-blue/20">
              <CardHeader>
                <CardTitle>TVET Involvement</CardTitle>
                <CardDescription>Current involvement in TVET programs</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <InvolvementChart />
              </CardContent>
            </Card>

            <Card className="border-brand-blue/20">
              <CardHeader>
                <CardTitle>Top Sectors of Study</CardTitle>
                <CardDescription>Most popular fields of study</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <SectorChart />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
