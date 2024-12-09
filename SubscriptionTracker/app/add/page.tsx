import { AddSubscriptionForm } from "../components/AddSubscriptionForm"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AddSubscriptionPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Add New Subscription</h1>
      <Card>
        <CardHeader>
          <CardTitle>Subscription Details</CardTitle>
        </CardHeader>
        <CardContent>
          <AddSubscriptionForm />
        </CardContent>
      </Card>
    </div>
  )
}

