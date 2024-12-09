'use client'

import React, { createContext, useState, useContext, ReactNode } from 'react'

export type Subscription = {
  id: number
  name: string
  cost: number
  billingCycle: 'Monthly' | 'Yearly'
  nextRenewal: string
}

type SubscriptionContextType = {
  subscriptions: Subscription[]
  addSubscription: (subscription: Omit<Subscription, 'id'>) => void
  editSubscription: (id: number, updatedSubscription: Partial<Subscription>) => void
  deleteSubscription: (id: number) => void
  calculateMonthlyExpense: () => number
}

const SubscriptionContext = createContext<SubscriptionContextType | undefined>(undefined)

export const useSubscriptions = () => {
  const context = useContext(SubscriptionContext)
  if (!context) {
    throw new Error('useSubscriptions must be used within a SubscriptionProvider')
  }
  return context
}

export const SubscriptionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([
    { id: 1, name: 'Netflix', cost: 15.99, billingCycle: 'Monthly', nextRenewal: '2023-07-15' },
    { id: 2, name: 'Gym Membership', cost: 50, billingCycle: 'Monthly', nextRenewal: '2023-07-01' },
    { id: 3, name: 'Spotify', cost: 9.99, billingCycle: 'Monthly', nextRenewal: '2023-07-10' },
  ])

  const addSubscription = (subscription: Omit<Subscription, 'id'>) => {
    const newId = Math.max(...subscriptions.map(s => s.id), 0) + 1
    setSubscriptions([...subscriptions, { ...subscription, id: newId }])
  }

  const editSubscription = (id: number, updatedSubscription: Partial<Subscription>) => {
    setSubscriptions(subscriptions.map(sub =>
      sub.id === id ? { ...sub, ...updatedSubscription } : sub
    ))
  }

  const deleteSubscription = (id: number) => {
    setSubscriptions(subscriptions.filter(sub => sub.id !== id))
  }

  const calculateMonthlyExpense = () => {
    return subscriptions.reduce((total, sub) => {
      if (sub.billingCycle === 'Monthly') {
        return total + sub.cost
      } else {
        return total + (sub.cost / 12)
      }
    }, 0)
  }

  return (
    <SubscriptionContext.Provider value={{
      subscriptions,
      addSubscription,
      editSubscription,
      deleteSubscription,
      calculateMonthlyExpense
    }}>
      {children}
    </SubscriptionContext.Provider>
  )
}

