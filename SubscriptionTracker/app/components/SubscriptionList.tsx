import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const subscriptions = [
  { id: 1, name: 'Netflix', cost: 15.99, billingCycle: 'Monthly', nextRenewal: '2023-07-15' },
  { id: 2, name: 'Gym Membership', cost: 50, billingCycle: 'Monthly', nextRenewal: '2023-07-01' },
  { id: 3, name: 'Spotify', cost: 9.99, billingCycle: 'Monthly', nextRenewal: '2023-07-10' },
]

export function SubscriptionList() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Cost</TableHead>
          <TableHead>Billing Cycle</TableHead>
          <TableHead>Next Renewal</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {subscriptions.map((subscription) => (
          <TableRow key={subscription.id}>
            <TableCell className="font-medium">{subscription.name}</TableCell>
            <TableCell>${subscription.cost.toFixed(2)}</TableCell>
            <TableCell>{subscription.billingCycle}</TableCell>
            <TableCell>{subscription.nextRenewal}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

