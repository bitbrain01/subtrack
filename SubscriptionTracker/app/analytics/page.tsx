'use client'

import { useSubscriptions } from '../contexts/SubscriptionContext'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts'

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#FF6B6B', '#4CAF50', '#9C27B0'];

export default function AnalyticsPage() {
  const { subscriptions, calculateMonthlyExpense } = useSubscriptions()

  const monthlyExpense = calculateMonthlyExpense()
  const yearlyExpense = monthlyExpense * 12

  const subscriptionData = subscriptions.map(sub => ({
    name: sub.name,
    value: sub.billingCycle === 'Monthly' ? sub.cost : sub.cost / 12
  }))

  const categoryData = subscriptions.reduce((acc, sub) => {
    const category = sub.billingCycle
    const cost = sub.billingCycle === 'Monthly' ? sub.cost : sub.cost / 12
    acc[category] = (acc[category] || 0) + cost
    return acc
  }, {} as Record<string, number>)

  const categoryChartData = Object.entries(categoryData).map(([name, value]) => ({ name, value }))

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Analytics</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-white/10 backdrop-blur-lg">
          <CardHeader>
            <CardTitle className="text-white">Expense Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={subscriptionData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {subscriptionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="bg-white/10 backdrop-blur-lg">
          <CardHeader>
            <CardTitle className="text-white">Expenses by Category</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={categoryChartData}>
                <XAxis dataKey="name" stroke="#fff" />
                <YAxis stroke="#fff" />
                <Tooltip />
                <Bar dataKey="value" fill="#8884d8">
                  {categoryChartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-white/10 backdrop-blur-lg">
          <CardHeader>
            <CardTitle className="text-white">Monthly Expense</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-white">${monthlyExpense.toFixed(2)}</p>
          </CardContent>
        </Card>
        <Card className="bg-white/10 backdrop-blur-lg">
          <CardHeader>
            <CardTitle className="text-white">Yearly Expense</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-white">${yearlyExpense.toFixed(2)}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

