import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Eye, EyeOff, Coffee, Pizza } from 'lucide-react';
import { useState } from 'react';

const recentPurchases = [
  { id: 1, item: 'Coffee', location: 'Campus Café', amount: 4.50, cashback: 0.23, icon: Coffee },
  { id: 2, item: 'Pizza Slice', location: 'Student Center', amount: 6.75, cashback: 0.34, icon: Pizza },
  { id: 3, item: 'Coffee', location: 'Library Café', amount: 3.25, cashback: 0.16, icon: Coffee },
  { id: 4, item: 'Sandwich', location: 'Food Court', amount: 8.90, cashback: 0.45, icon: Pizza },
  { id: 5, item: 'Energy Drink', location: 'Vending Machine', amount: 2.75, cashback: 0.14, icon: Coffee },
  { id: 6, item: 'Burger Combo', location: 'Student Union', amount: 12.50, cashback: 0.63, icon: Pizza },
  { id: 7, item: 'Smoothie', location: 'Juice Bar', amount: 6.25, cashback: 0.31, icon: Coffee },
];

export default function Home() {
  const [showBalance, setShowBalance] = useState(true);
  const totalBalance = 1247.85;
  const weeklyEarnings = 125.50;
  const monthlyEarnings = 542.20;

  return (
    <div className="p-4 space-y-6">
      <Card className="bg-gradient-sonic-primary p-6 text-white">
        <div className="space-y-6">
          <div className="flex items-start justify-between">
          <div>
            <p className="text-lg font-medium mb-2" style={{ color: '#02283C' }}>Total Balance</p>
            <div className="flex items-center gap-3">
                <p className="text-4xl font-bold">
                  {showBalance ? totalBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : '****.**'}
                </p>
                <button 
                  onClick={() => setShowBalance(!showBalance)}
                  className="text-white/80 hover:text-white transition-smooth"
                >
                  {showBalance ? <Eye className="w-6 h-6" /> : <EyeOff className="w-6 h-6" />}
                </button>
              </div>
            </div>
            <div className="bg-secondary/20 rounded-2xl p-3">
              <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <p className="text-white/80 text-xs mt-1 text-center">Tokens</p>
            </div>
          </div>

        <div className="flex justify-between">
          <div className="text-center">
            <p className="text-sm" style={{ color: '#02283C' }}>This Week</p>
            <p className="text-white font-bold text-lg">+{weeklyEarnings.toFixed(2)} S</p>
          </div>
          <div className="text-center">
            <p className="text-sm" style={{ color: '#02283C' }}>This Month</p>
            <p className="text-white font-bold text-lg">+{monthlyEarnings.toFixed(2)} S</p>
          </div>
        </div>
        </div>
    </Card>

    <Button className="w-full font-medium text-lg py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] bg-gradient-sonic-primary" style={{ color: '#02283C' }}>
      🎉 Claim Cashback: {(recentPurchases.reduce((total, purchase) => total + purchase.cashback, 0)).toFixed(2)} S
    </Button>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-white">Recent Purchases</h2>
        
        {recentPurchases.map((purchase) => (
          <Card key={purchase.id} className="bg-gradient-sonic-primary p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <purchase.icon className="w-5 h-5 text-white" />
                </div>
              <div>
                <p className="font-medium" style={{ color: '#02283C' }}>{purchase.item}</p>
                <p className="text-sm" style={{ color: '#02283C', opacity: 0.7 }}>{purchase.location}</p>
              </div>
            </div>
            
            <div className="text-right">
              <p className="font-medium text-white">${purchase.amount.toFixed(2)}</p>
              <Badge className="text-xs text-white font-semibold border-0 mt-1 bg-secondary">
                +{purchase.cashback.toFixed(2)} S
              </Badge>
            </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}