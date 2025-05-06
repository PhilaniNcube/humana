import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Calendar, MapPin } from "lucide-react"

export default function SurveyOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Survey Overview</CardTitle>
        <CardDescription>Key statistics from the survey</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center space-x-4">
            <div className="p-2 bg-brand-orange/10 rounded-full">
              <Users className="h-6 w-6 text-brand-orange" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Total Responses</p>
              <h3 className="text-2xl font-bold">352</h3>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="p-2 bg-brand-blue/10 rounded-full">
              <Calendar className="h-6 w-6 text-brand-blue" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Most Common Age</p>
              <h3 className="text-2xl font-bold">20–25 years</h3>
              <p className="text-sm text-muted-foreground">(197 responses)</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="p-2 bg-brand-green/10 rounded-full">
              <MapPin className="h-6 w-6 text-brand-green" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Top Country</p>
              <h3 className="text-2xl font-bold">Nigeria</h3>
              <p className="text-sm text-muted-foreground">(114 responses)</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
