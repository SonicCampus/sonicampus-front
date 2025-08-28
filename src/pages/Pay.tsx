import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { QrCode, Scan, UserPlus, Search, ArrowLeft } from 'lucide-react';

const quickPayContacts = [
  { id: 1, name: 'Sarah Chen', username: '@sarah.chen', avatar: 'SC' },
  { id: 2, name: 'Mike Johnson', username: '@mike.j', avatar: 'MJ' },
  { id: 3, name: 'Emma Davis', username: '@emma.d', avatar: 'ED' },
  { id: 4, name: 'Alex Kim', username: '@alex.kim', avatar: 'AK' },
];

export default function Pay() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [showQR, setShowQR] = useState(false);

  const quickAmounts = [5, 10, 20, 50];

  if (showQR) {
    return (
      <div className="p-4 space-y-6">
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setShowQR(false)}
            className="text-foreground"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-xl font-semibold">Payment QR Code</h1>
        </div>

        <Card className="bg-gradient-sonic-primary p-8 text-white text-center">
          <div className="space-y-6">
            <div className="w-48 h-48 bg-white rounded-3xl mx-auto flex items-center justify-center">
              <QrCode className="w-32 h-32 text-background" />
            </div>
            <div>
              <p className="text-white/80 text-sm">Show this QR code to receive</p>
              <p className="text-2xl font-bold">
                ${selectedAmount || customAmount || '0.00'}
              </p>
            </div>
          </div>
        </Card>

        <div className="text-center space-y-2">
          <p className="text-muted-foreground text-sm">
            Or share your payment link
          </p>
          <Button variant="outline" className="w-full">
            Share Payment Link
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 space-y-6">
      <div className="text-center space-y-2 pt-4">
        <h1 className="text-2xl font-bold">Quick Pay</h1>
        <p className="text-muted-foreground">Send money instantly with S tokens</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Card className="bg-gradient-sonic-primary p-6 text-white cursor-pointer hover:opacity-90 transition-smooth">
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mx-auto">
              <Scan className="w-6 h-6" />
            </div>
            <div>
              <p className="font-semibold text-lg">Scan QR</p>
              <p className="text-sm text-white/80">Pay instantly</p>
            </div>
          </div>
        </Card>

        <Card className="bg-gradient-sonic-primary p-6 text-white cursor-pointer hover:opacity-90 transition-smooth">
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mx-auto">
              <QrCode className="w-6 h-6" />
            </div>
            <div>
              <p className="font-semibold text-lg">Show QR</p>
              <p className="text-sm text-white/80">Get paid</p>
            </div>
          </div>
        </Card>
      </div>

      <Card className="bg-gradient-sonic-primary p-6 text-white">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Select Amount</h3>
          
          <div className="grid grid-cols-4 gap-3">
            {quickAmounts.map((amount) => (
              <Button
                key={amount}
                variant={selectedAmount === amount ? "secondary" : "outline"}
                className={`${selectedAmount === amount ? 'bg-secondary text-white' : 'border-white/40 text-white hover:bg-white/10'} h-12`}
                onClick={() => {
                  setSelectedAmount(amount);
                  setCustomAmount('');
                }}
              >
                ${amount}
              </Button>
            ))}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-white">Custom Amount</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70">$</span>
              <Input
                type="number"
                placeholder="0.00"
                className="pl-8 bg-white/10 border-white/40 text-white placeholder:text-white/50"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  setSelectedAmount(null);
                }}
              />
            </div>
          </div>

          <Button 
            className="w-full bg-secondary hover:bg-secondary/80 text-white" 
            size="lg"
            onClick={() => setShowQR(true)}
            disabled={!selectedAmount && !customAmount}
          >
            Generate QR Code
          </Button>
        </div>
      </Card>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Quick Pay</h3>
          <Button variant="ghost" size="sm" className="text-primary">
            <UserPlus className="w-4 h-4 mr-2" />
            Add Contact
          </Button>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search contacts..."
            className="pl-10 bg-input border-border/40"
          />
        </div>

        <div className="space-y-3">
          {quickPayContacts.map((contact) => (
            <Card key={contact.id} className="bg-gradient-sonic-primary p-4 text-white cursor-pointer hover:opacity-90 transition-smooth">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">{contact.avatar}</span>
                  </div>
                  <div>
                    <p className="font-medium text-white">{contact.name}</p>
                    <p className="text-sm text-white/70">{contact.username}</p>
                  </div>
                </div>
                <Button size="sm" className="bg-secondary hover:bg-secondary/80 text-white">
                  Pay
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}