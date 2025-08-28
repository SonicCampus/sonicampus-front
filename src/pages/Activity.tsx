import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { Coffee, Pizza, ShoppingBag, PartyPopper, Calendar } from 'lucide-react';

const categoryData = [
  { name: 'Food', value: 45, color: '#4F46E5', icon: Pizza },
  { name: 'Coffee', value: 30, color: '#7C3AED', icon: Coffee },
  { name: 'Shopping', value: 15, color: '#06B6D4', icon: ShoppingBag },
  { name: 'Events', value: 10, color: '#10B981', icon: PartyPopper },
];

const weeklyData = [
  { day: 'Mon', amount: 12.50 },
  { day: 'Tue', amount: 8.75 },
  { day: 'Wed', amount: 15.20 },
  { day: 'Thu', amount: 22.10 },
  { day: 'Fri', amount: 18.90 },
  { day: 'Sat', amount: 31.40 },
  { day: 'Sun', amount: 9.25 },
];

const recentTransactions = [
  { id: 1, description: 'Campus Café - Latte', amount: 4.50, category: 'Coffee', time: '2 hours ago', icon: Coffee },
  { id: 2, description: 'Student Center - Pizza', amount: 6.75, category: 'Food', time: '5 hours ago', icon: Pizza },
  { id: 3, description: 'Bookstore - Supplies', amount: 12.30, category: 'Shopping', time: '1 day ago', icon: ShoppingBag },
  { id: 4, description: 'Spring Dance Ticket', amount: 15.00, category: 'Events', time: '2 days ago', icon: PartyPopper },
];

export default function Activity() {
  const totalSpent = 118.10;
  const monthlySpent = 456.80;

  return (
    <div className="p-4 space-y-6">
      <div className="text-center space-y-2 pt-4">
        <h1 className="text-2xl font-bold">Activity</h1>
        <p className="text-muted-foreground">Track your spending patterns</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Card className="bg-gradient-sonic-primary p-4 text-white">
          <div>
            <p className="text-sm text-white/80">This Week</p>
            <p className="font-bold text-2xl text-white">${totalSpent.toFixed(2)}</p>
          </div>
        </Card>
        
        <Card className="bg-gradient-sonic-primary p-4 text-white">
          <div>
            <p className="text-sm text-white/80">This Month</p>
            <p className="font-bold text-2xl text-white">${monthlySpent.toFixed(2)}</p>
          </div>
        </Card>
      </div>

      <Tabs defaultValue="categories" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="categories">Categories</TabsTrigger>
          <TabsTrigger value="weekly">Weekly</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>

        <TabsContent value="categories" className="space-y-4">
          <Card className="bg-gradient-sonic-primary p-6 text-white">
            <h3 className="text-lg font-semibold mb-4 text-white">Spending by Category</h3>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </Card>

          <div className="space-y-3">
            {categoryData.map((category) => (
            <Card key={category.name} className="bg-gradient-sonic-primary p-4 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: category.color }}
                    />
                    <category.icon className="w-5 h-5 text-white/80" />
                    <span className="font-medium text-white">{category.name}</span>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-white">{category.value}%</p>
                    <p className="text-sm text-white/70">
                      ${(totalSpent * category.value / 100).toFixed(2)}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="weekly" className="space-y-4">
          <Card className="bg-gradient-sonic-primary p-6 text-white">
            <h3 className="text-lg font-semibold mb-4 text-white">Weekly Spending</h3>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weeklyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
                  <XAxis dataKey="day" stroke="rgba(255,255,255,0.8)" />
                  <YAxis stroke="rgba(255,255,255,0.8)" />
                  <Bar dataKey="amount" fill="rgba(255,146,76,0.8)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="space-y-4">
          <div className="space-y-3">
            {recentTransactions.map((transaction) => (
            <Card key={transaction.id} className="bg-gradient-sonic-primary p-4 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <transaction.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-sm text-white">{transaction.description}</p>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="text-xs bg-secondary/20 text-sonic-hero-orange border-0">
                          {transaction.category}
                        </Badge>
                        <span className="text-xs text-white/70">{transaction.time}</span>
                      </div>
                    </div>
                  </div>
                  <p className="font-semibold text-white">${transaction.amount.toFixed(2)}</p>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}